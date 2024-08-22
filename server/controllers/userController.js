const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();
exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstName,
            lastName: lastName || '',  
            email,
            password: hashedPassword,
            role: 'user'
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user.userId, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Returning both the token and user object
        res.status(200).json({ token, user: { id: user.userId, role: user.role, email: user.email } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllusers = async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};