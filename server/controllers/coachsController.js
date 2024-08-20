const {CoachList} = require('../models/coachs')

// Create a new coach
exports.createCoach = async (req, res) => {
    try {
        const coach = await CoachList.create(req.body);
        res.status(201).json(coach);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all coaches
exports.getAllCoaches = async (req, res) => {
    try {
        const coaches = await CoachList.findAll();
        res.status(200).json(coaches);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a coach by ID
exports.getCoachById = async (req, res) => {
    try {
        const coach = await CoachList.findByPk(req.params.id);
        if (coach) {
            res.status(200).json(coach);
        } else {
            res.status(404).json({ error: 'Coach not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a coach by ID
exports.updateCoach = async (req, res) => {
    try {
        const coach = await CoachList.findByPk(req.params.id);
        if (coach) {
            await coach.update(req.body);
            res.status(200).json(coach);
        } else {
            res.status(404).json({ error: 'Coach not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a coach by ID
exports.deleteCoach = async (req, res) => {
    try {
        const coach = await CoachList.findByPk(req.params.id);
        if (coach) {
            await coach.destroy();
            res.status(200).json({ message: 'Coach deleted' });
        } else {
            res.status(404).json({ error: 'Coach not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
