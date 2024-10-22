const SlotModel = require('../models/Slot'); // Adjust according to your model's path

// Get slots by court
const getSlotsByCourt = async (req, res) => {
    const { courtId } = req.params; // Expecting court ID in params
    try {
        const slots = await SlotModel.find({ court: courtId }); // Assuming slot schema has a court reference
        res.json(slots);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching slots', error });
    }
};

// Add a new slot
const addSlot = async (req, res) => {
    const { courtId, startTime,endTime, isBooked, user } = req.body; // Expecting courtId and time in request
    try {
        const newSlot = new SlotModel({ court: courtId, startTime, endTime, isBooked, bookedBy:user});
        await newSlot.save();
        res.status(201).json({ message: 'Slot added successfully', slot: newSlot });
    } catch (error) {
        res.status(500).json({ message: 'Error adding slot', error });
    }
};

// Update a slot
const updateSlot = async (req, res) => {
    const { id } = req.params; // Expecting slot ID in params
    const { time, isBooked } = req.body; // Expecting updated slot details in request
    try {
        const slot = await SlotModel.findByIdAndUpdate(id, { time, isBooked }, { new: true });
        if (!slot) return res.status(404).json({ message: 'Slot not found' });
        res.json({ message: 'Slot updated successfully', slot });
    } catch (error) {
        res.status(500).json({ message: 'Error updating slot', error });
    }
};

// Delete a slot
const deleteSlot = async (req, res) => {
    const { id } = req.params; // Expecting slot ID in params
    try {
        const slot = await SlotModel.findByIdAndDelete(id);
        if (!slot) return res.status(404).json({ message: 'Slot not found' });
        res.json({ message: 'Slot deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting slot', error });
    }
};

module.exports = {
    getSlotsByCourt,
    addSlot,
    updateSlot,
    deleteSlot,
};
