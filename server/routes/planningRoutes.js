const express = require('express');
const router = express.Router();
const planningController = require('../controllers/planningController')

router.post('/', planningController.createPlanning);
router.get('/', planningController.getAllPlanning);
router.get('/:id', planningController.getPlanningById);
router.put('/:id', planningController.updatePlanning);
router.delete('/:id', planningController.deletePlanning);
router.get('/search', planningController.searchPlanningsByCoach);

module.exports = router;
