const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Route for user registration
router.post('/register', UserController.registerUser);

// Route for user login
router.post('/login', UserController.loginUser);

// Route for fetching user profile (after login)
router.get('/profile/:id', UserController.getUserProfile);

module.exports = router;
