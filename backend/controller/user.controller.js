const { z } = require("zod");
const userModel = require('../db/models/user.model');
const { createUser } = require('../service/user.service')
const blackListToken = require('../db/models/blacklistToken.model')

const createUserSchema = z.object({
    fullName: z.object({
        firstName: z.string().nonempty("First name is required"),
        lastName: z.string().optional(),
    }),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

module.exports.register = async (req, res, next) => {
    try {
        // Validate request body
        const validatedData = createUserSchema.parse(req.body);

        // Pass validated data to the service
        const newUser = await createUser(validatedData.fullName.firstName,validatedData.fullName.lastName, validatedData.email, validatedData.password );
        const token = await newUser.generateAuthToken();
        res.status(201).json({
            message: "User registered successfully",
            user: newUser,
            token
        });
    } catch (error) {
        next(error);
    }
};

const loginSchema = z.object({
    email: z.string().nonempty('email is required'),
    password: z.string().nonempty('password is required')
});


module.exports.login = async (req, res, next) => {
    
    try {
        const validatedData = loginSchema.parse(req.body);
        const user = await userModel.findOne({ email: validatedData.email }).select('+password');
        if (!user) {
            throw new Error("User not exist ");
        }
        
        const ismatch = await user.comparePasswod(validatedData.password)

        if (!ismatch) {
            throw new Error("Password not matched");
            
        }

        const token = user.generateAuthToken();
        res.cookie('token', token)
        return res.status(200).json({
            message: "login succesfully ",
            token,
            user
        })
    } catch (error) {
        next(error);
    }
};

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user)
}


module.exports.logout = async (req, res, next) => {
    try {
        console.log("backend logout");
        
        // Retrieve the token from cookies or headers
        const token = req.cookies.token || 
            (req.headers.authorization && req.headers.authorization.split(' ')[1]);
        
        // Clear the token cookie
        res.clearCookie('token');
        
        if (!token) {
            return res.status(400).json({ message: "No token provided for logout" });
        }

        // Blacklist the token
        await blackListToken.create({ token });
        
        // Respond with success message
        return res.status(200).json({ message: "Logout successfully" });
    } catch (error) {
        // Pass error to Express error handler
        next(error);
    }
};
