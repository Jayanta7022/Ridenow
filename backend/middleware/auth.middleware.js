const userModel = require('../db/models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListToken = require('../db/models/blacklistToken.model')
const captainModel = require('../db/models/captain.model')

module.exports.authUser = async (req, res, next) => {
    console.log("auth");
    
    try {
        
        const token = req.cookies.token ||
            (req.headers.authorization && req.headers.authorization.split(' ')[1]);
        
        if (!token) {
            console.log("not token");            
            throw new Error("unauthorize token");
        }

        const isBlacklistedToken = await blackListToken.findOne({ token });
        if (isBlacklistedToken) {
            console.log("blacklist token");
            throw new Error("Unauthorize token");
        }

        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({ _id: verifiedToken._id });
        console.log("auth done");
        
        req.user = user;
        return next();
    } catch (error) {
        next(error)
    }
}


module.exports.authCaptain = async (req, res, next) => {
    console.log("auth");
    
    try {

        const token = req.cookies.token ||
            (req.headers.authorization && req.headers.authorization.split(' ')[1]);
        // console.log(token);
        
        if (!token) {
            console.log("not token");
            
            console.log("token is not there");
            throw new Error("unauthorize token");
        }

        const isBlacklistedToken = await blackListToken.findOne({ token });
        if (isBlacklistedToken) {
            console.log("blacklist token");
            throw new Error("Unauthorize token");
        }

        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findOne({ _id: verifiedToken._id });
        req.captain = captain;
        return next();
    } catch (error) {
        next(error);
    }
}