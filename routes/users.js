const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user-controllers');
router.get('/profile', user_controller.profile);
router.post('/create-user', user_controller.signup);
router.post('/login-user', user_controller.signin);
console.log("test1");
module.exports = router;