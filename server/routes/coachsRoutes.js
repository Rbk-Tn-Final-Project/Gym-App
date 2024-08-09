const express = require('express');
const router = express.Router();
const coachListController = require('../controllers/coachsController')

router.post('/', coachListController.createCoach);
router.get('/', coachListController.getAllCoaches);
router.get('/:id', coachListController.getCoachById);
router.put('/:id', coachListController.updateCoach);
router.delete('/:id', coachListController.deleteCoach);

module.exports = router;
