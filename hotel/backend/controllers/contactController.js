const contactModel = require('../models/contactModel.js');

module.exports = {
    getAllContacts(req, res) {
        contactModel.getAllContacts((err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error getting contact from database');
      } else {
        res.send(results);
      }
    });
  },

  addContact(req, res) {
    const contact = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      date: req.body.date,
    };
    contactModel.addContact(contact, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error adding contact to database');
      } else {
        res.status(201).send({ id: result });
      }
    });
  },

};
