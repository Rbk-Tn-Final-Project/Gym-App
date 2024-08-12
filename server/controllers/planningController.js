const Planning = require('../models/planning')

// Create a new planning entry
exports.createPlanning = async (req, res) => {
    try {
        const planning = await Planning.create(req.body);
        res.status(201).json(planning);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all planning entries
exports.getAllPlanning = async (req, res) => {
    try {
        const planningEntries = await Planning.findAll();
        res.status(200).json(planningEntries);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a planning entry by ID
exports.getPlanningById = async (req, res) => {
    try {
        const planning = await Planning.findByPk(req.params.id);
        if (planning) {
            res.status(200).json(planning);
        } else {
            res.status(404).json({ error: 'Planning entry not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
// New method to search events by coach name
exports.searchPlanningsByCoach = async (req, res) => {
    try {
        const { coachName } = req.query;

        if (!coachName) {
            return res.status(400).json({ message: 'Coach name is required' });
        }

        const plannings = await Planning.findAll({
            include: [{
                model: Coach,
                where: {
                    [Op.or]: [
                        { firstName: { [Op.like]: `%${coachName}%` } },
                        { lastName: { [Op.like]: `%${coachName}%` } }
                    ]
                }
            }]
        });

        if (plannings.length === 0) {
            return res.status(404).json({ message: 'No events found for the specified coach' });
        }

        res.json(plannings);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching events', error: err.message });
    }
};

// Update a planning entry by ID
exports.updatePlanning = async (req, res) => {
    try {
        const planning = await Planning.findByPk(req.params.id);
        if (planning) {
            await planning.update(req.body);
            res.status(200).json(planning);
        } else {
            res.status(404).json({ error: 'Planning entry not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a planning entry by ID
exports.deletePlanning = async (req, res) => {
    try {
        const planning = await Planning.findByPk(req.params.id);
        if (planning) {
            await planning.destroy();
            res.status(200).json({ message: 'Planning entry deleted' });
        } else {
            res.status(404).json({ error: 'Planning entry not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
