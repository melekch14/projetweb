const mysql = require('mysql');
const dbConfig = require('../dbConfig.js');

const pool = mysql.createPool(dbConfig);

module.exports = {
  getAllContacts(callback) {
    const query = 'SELECT * FROM contact order by date desc';
    pool.query(query, (err, result) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  addContact(contact, callback) {
    const query = 'INSERT INTO contact (name, email, message, date) VALUES (?, ?, ?, ?)';
    pool.query(query, [contact.name, contact.email, contact.message, contact.date], (err, result) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        callback(null, result.insertId);
      }
    });
  },


};
