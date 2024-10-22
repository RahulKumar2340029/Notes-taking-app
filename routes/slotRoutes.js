const express = require('express');
const router = express.Router();
const SlotController = require('../controllers/slotController');

// Route for getting all slots for a specific court
router.get('/:courtId', SlotController.getSlotsByCourt);

// Route for adding a new slot
router.post('/add', SlotController.addSlot);

// Route for updating a slot
router.put('/update/:id', SlotController.updateSlot);

// Route for deleting a slot
router.delete('/delete/:id', SlotController.deleteSlot);

module.exports = router;
