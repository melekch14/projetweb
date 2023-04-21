const mysql = require('mysql');
const dbConfig = require('../dbConfig.js');

const pool = mysql.createPool(dbConfig);

module.exports = {
  checkReservation(startdate, enddate, roomName) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT * FROM reservations WHERE ((start_date >= ? AND start_date <= ?) OR (end_date >= ? AND end_date <= ?)) and room = ?',
        [startdate, enddate, startdate, enddate, roomName],
        (err, results) => {
          if (err) {
            reject(err);
          } else if (results.length === 0) {
            resolve(0);
          } else {
            resolve(results.length);
          }
        }
      );
    });
  },

  booknow(reserv, callback) {
    const query = 'INSERT INTO reservations (start_date, end_date, title, adult, child, room) VALUES (?, ?, ?, ?,?,?)';
    pool.query(query, [reserv.startdate, reserv.enddate, reserv.title, reserv.adult, reserv.child, reserv.room], (err, result) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        callback(null, result.insertId);
      }
    });
  },

  getAllReservations(callback) {
    const query = 'SELECT * FROM reservations';
    pool.query(query, (err, result) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

};
