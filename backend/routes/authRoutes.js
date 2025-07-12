const express = require('express');
const router = express.Router();
const { register, login, protectedRoute } = require('../controllers/authController');
const protect = require('../middleware/authmiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/protected', protect, protectedRoute);

module.exports = router;
