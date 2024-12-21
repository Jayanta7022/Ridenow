const mongoose = require("mongoose");


const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: String,
        default: Date.now,
        expires: 86400,
    }
});


module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);