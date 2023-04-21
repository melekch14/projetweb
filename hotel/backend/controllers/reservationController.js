const resModel = require('../models/reservationModel.js');

module.exports = {
    async check(req, res) {
        const { start_date, end_date, room } = req.body;
        try {
          const result = await resModel.checkReservation(start_date, end_date, room);
          console.log(result);
          res.json({ number: result, message: result });
        } catch (error) {
          console.error(error);
          res.status(500).json({ success: false, message: 'An error occurred' });
        }
      },

      addReservation(req, res) {
        const reserv = {
          startdate: req.body.start_date,
          enddate: req.body.end_date,
          title: req.body.title,
          adult: req.body.adult,
          child: req.body.child,
          room: req.body.room,
        };
        resModel.booknow(reserv, (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error adding user to database');
          } else {
            res.status(201).send({ id: result });
          }
        });
      },

      getAllReservations(req, res) {
        resModel.getAllReservations((err, results) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error getting users from database');
          } else {
            res.send(results);
          }
        });
      },
};
