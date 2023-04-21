const mysql = require('mysql');
const dbConfig = require('../dbConfig.js');

const pool = mysql.createPool(dbConfig);

module.exports = {
  getAllUsers(callback) {
    const query = 'SELECT * FROM users';
    pool.query(query, (err, result) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  getUserById(userId, callback) {
    const query = 'SELECT * FROM users WHERE id = ?';
    pool.query(query, [userId], (err, result) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        callback(null, result[0]);
      }
    });
  },

  addUser(user, callback) {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    pool.query(query, [user.name, user.email, user.password], (err, result) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        callback(null, result.insertId);
      }
    });
  },

  updateUser(userId, user, callback) {
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    pool.query(query, [user.name, user.email, userId], (err, result) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        callback(null, result.affectedRows > 0);
      }
    });
  },

  deleteUser(userId, callback) {
    const query = 'DELETE FROM users WHERE id = ?';
    pool.query(query, [userId], (err, result) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        callback(null, result.affectedRows > 0);
      }
    });
  },

  getUserByEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (err, results) => {
          if (err) {
            reject(err);
          } else if (results.length === 0) {
            resolve(null);
          } else {
            resolve(results[0]);
          }
        }
      );
    });
  },

};
