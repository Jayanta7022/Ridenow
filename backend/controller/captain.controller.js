const captainModel = require('../db/models/captain.model');
const { z } = require('zod');
const captionService = require("../service/captain.service");
const blackListToken = require('../db/models/blacklistToken.model')

const createCaptainschema = z.object({
    fullName: z.object({
        firstName: z.string().nonempty("First name is required"),
        lastName: z.string().optional(),
    }),
    email: z.string().email("Invalid email format").nonempty("email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long").nonempty("Password is required"),
    vehicle: z.object({
        color: z.string().nonempty("vehical color is required"),
        plate: z.string().nonempty("vehical Number plate is required"),
        capacity: z.number().positive("Capacity must be a positive number"),
        vehicleType: z.enum(['car', 'motorcycle', 'auto'], "Vehicle type is required")
    })
});

module.exports.register = async (req, res, next) => {
    try {
        // Validate request body
        const validatedData = createCaptainschema.parse(req.body);

        // Pass validated data to the service
        const newCaptain = await captionService.createCaptain(
            validatedData.fullName.firstName,
            validatedData.fullName.lastName,
            validatedData.email,
            validatedData.password,
            validatedData.vehicle.color,
            validatedData.vehicle.plate,
            validatedData.vehicle.capacity,
            validatedData.vehicle.vehicleType
        );
        const token = await newCaptain.generateAuthToken();
        res.status(201).json({
            message: "Captain  registered successfully",
            user: newCaptain,
            token
        });
    } catch (error) {
        next(error);
    }
}


const loginSchema = z.object({
    email: z.string().nonempty('email is required'),
    password: z.string().nonempty('password is required')
});
module.exports.login = async (req, res, next) => {
    try {
        const validatedData = loginSchema.parse(req.body);
        const captain = await captainModel.findOne({ email: validatedData.email }).select('+password');
        if (!captain) {
            throw new Error("User not exist ");
        }
        
        const ismatch = await captain.comparePasswod(validatedData.password)

        if (!ismatch) {
            throw new Error("Password not matched");
            
        }

        const token = captain.generateAuthToken();
        res.cookie('token', token)
        return res.status(200).json({
            message: "login succesfully ",
            token,
            captain
        })
    } catch (error) {
        next(error);
    }
};


module.exports.getCaptainProfile = (req, res, next) => {
    return res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res, next) => {
    try {
        // Retrieve the token from cookies or headers
        const token = req.cookies.token || 
            (req.headers.authorization && req.headers.authorization.split(' ')[1]);
        
        if (!token) {
            return res.status(400).json({ message: "No token provided for logout" });
        }

        // Blacklist the token
        await blackListToken.create({ token });
        
        // Clear the token cookie
        res.clearCookie('token');


        // Respond with success message
        return res.status(200).json({ message: "Logout successfully" });
    } catch (error) {
        // Pass error to Express error handler
        next(error);
    }
}