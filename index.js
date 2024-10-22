

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const courtRoutes = require('./routes/courtRoutes');
const slotRoutes = require('./routes/slotRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://karnrahul786:DqOnJMQ22i6S56jV@cluster0.9ovru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("Connected"));


// Use routes
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/courts', courtRoutes);
app.use('/api/slots', slotRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
