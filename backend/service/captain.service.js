const captainModel = require('../db/models/captain.model')
const createCaptain = async (firstName, lastName, email, password, color, plate, capacity, vehicleType) => {
    try {
        if (!firstName || !email || !password || !color || !plate || !capacity || !vehicleType) {
            throw new Error("Invalid field: First name, email, and password are required.");
        }
    
        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            throw new Error("captain is already registered.");
        }
    
        // Hash the password
        const hashedPassword = await captainModel.hashPassword(password);
    
        // Create the user in the database
        const captain = await captainModel.create({
            fullName: {
                firstName,
                lastName,
            },
            email,
            password: hashedPassword,
            vehicle: {
                color,
                plate,
                capacity,
                vehicleType,
    
            }
        });
    
        return captain;
    } catch (error) {
        throw new Error(error);
    }
};



module.exports = {
    createCaptain
}