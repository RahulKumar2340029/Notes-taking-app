const express = require('express');
const router = express.Router();
const CourtController = require('../controllers/courtController');

// Route for getting all courts
router.get('/', CourtController.getAllCourts);

// Route for adding a new court
router.post('/add', CourtController.addCourt);

// Route for updating court information
router.put('/update/:id', CourtController.updateCourt);

// Route for deleting a court
router.delete('/delete/:id', CourtController.deleteCourt);

module.exports = router;
