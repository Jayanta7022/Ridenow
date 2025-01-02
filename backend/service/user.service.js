const userModel = require("../db/models/user.model");

const createUser = async ( firstName, lastName, email, password ) => {
    try {
        if (!firstName || !email || !password) {
            throw new Error("Invalid field: First name, email, and password are required.");
        }
    
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            throw new Error("Email is already registered.");
        }
    
        // Hash the password
        const hashedPassword = await userModel.hashPassword(password);
    
        // Create the user in the database
        const user = await userModel.create({
            fullName: {
                firstName,
                lastName,
            },
            email,
            password: hashedPassword,
        });
    
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

const deleteUser = async () => {
    
}



module.exports = {
    deleteUser,
    createUser
}
