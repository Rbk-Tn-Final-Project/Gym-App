const Message = require('../models/message');

// Get all messages
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific message by ID
exports.getMessageById = async (req, res) => {
    try {
        const message = await Message.findByPk(req.params.id);
        if (message) {
            res.json(message);
        } else {
            res.status(404).json({ error: 'Message not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new message
exports.createMessage = async (req, res) => {
    try {
        const { firstName, lastName, email, message } = req.body;
        const newMessage = await Message.create({ firstName, lastName, email, message });
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
