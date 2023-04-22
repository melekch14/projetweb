const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/signup', userController.addUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.post('/login', userController.login);

module.exports = router;
