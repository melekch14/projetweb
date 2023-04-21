const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController.js');

router.get('/get', contactController.getAllContacts);
router.post('/send', contactController.addContact);

module.exports = router;
