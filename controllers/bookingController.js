const Booking = require('../models/Booking');
const User = require('../models/User');
const Slot = require('../models/Slot');

exports.getAvailableSlots = async (req, res) => {
    try {
        const slots = await Slot.find({ booked: false }); // Fetching available slots
        res.status(200).json(slots);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching slots' });
    }
};

exports.bookSlot = async (req, res) => {
    const { userId, slotId } = req.body;

    try {
        // Check if the user already has a booking
        const existingBooking = await Booking.findOne({ userId });
        if (existingBooking) {
            return res.status(400).json({ message: 'You can only book one slot' });
        }

        // Check if the slot is available
        const slot = await Slot.findById(slotId);
        if (!slot || slot.booked) {
            return res.status(404).json({ message: 'Slot not available' });
        }

        // Create a booking
        const booking = new Booking({
            userId,
            slotId,
        });
        await booking.save();

        // Mark the slot as booked
        slot.booked = true;
        await slot.save();

        res.status(200).json({ message: 'Slot booked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error booking slot' });
    }
};

exports.cancelBooking = async (req, res) => {
    const { userId } = req.body;

    try {
        const booking = await Booking.findOneAndDelete({ userId });

        if (!booking) {
            return res.status(404).json({ message: 'No booking found for this user' });
        }

        // Mark the slot as available again
        const slot = await Slot.findById(booking.slotId);
        if (slot) {
            slot.booked = false;
            await slot.save();
        }

        res.status(200).json({ message: 'Booking canceled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error canceling booking' });
    }
};
