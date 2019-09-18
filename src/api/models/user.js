const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    
const UserSchema = new Schema(
    {
        createdAt: { type: Date, default: Date.now },
        email: { type: String, default: null },
        name: { type: String, default: null },
        pass: { type: String, default: null },
        profilePhoto: { type: Buffer, default: null },
        userName: { type: String, default: null }
    }
);

module.exports = mongoose.model('User', UserSchema);