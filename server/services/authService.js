const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');

const User = require('../models/User');
const { SECRET } = require('../config');

exports.register = async (userData) => {
    if (userData.password !== userData.rePassword)
        throw new Error('Passwords do not match!');
    
    const user = await User.findOne({ email: userData.email});
    if (user) {
        throw new Error('User already exists!');
    }
    /* This is the way if we want to have an autologin!!!*/
    const createdUser = await User.create(userData);

    const token = await generateToken(createdUser);

    return token; //In this case we must to delete bellow row!!!

    // return User.create(userData);
};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Login failed!');
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        // throw new Error('Login failed!');
        res.send({ message: 'Login failed!' });
    }

    const token = await generateToken(user);
    const userId = user._id;
    return { token, userId };
}

function generateToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    };

    return jwt.sign(payload, SECRET, { expiresIn: '4h'});
};