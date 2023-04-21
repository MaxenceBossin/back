const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['professor', 'student', 'staff'],
        required: false
    }

});

userSchema.pre(
    'save',
    async function(next) {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    }
);

userSchema.methods.isValidPassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = User = mongoose.model('user', userSchema);
