const userModel = require('../models/userModel.js');

module.exports = {
  getAllUsers(req, res) {
    userModel.getAllUsers((err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error getting users from database');
      } else {
        res.send(results);
      }
    });
  },

  getUserById(req, res) {
    const userId = req.params.id;
    userModel.getUserById(userId, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error getting user from database');
      } else if (result) {
        res.send(result);
      } else {
        res.status(404).send(`User with id ${userId} not found`);
      }
    });
  },

  addUser(req, res) {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    userModel.addUser(user, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error adding user to database');
      } else {
        res.status(201).send({ id: result });
      }
    });
  },

  updateUser(req, res) {
    const userId = req.params.id;
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    userModel.updateUser(userId, user, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating user in database');
      } else if (result) {
        res.send(`User with id ${userId} updated successfully`);
      } else {
        res.status(404).send(`User with id ${userId} not found`);
      }
    });
  },

  deleteUser(req, res) {
    const userId = req.params.id;
    userModel.deleteUser(userId, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting user from database');
      } else if (result) {
        res.send(`User with id ${userId} deleted successfully`);
      } else {
        res.status(404).send(`User with id ${userId} not found`);
      }
    });
  },

  async login(req, res) {
    const { email, password } = req.body;
    console.info({ email, password });
    try {
      const user = await userModel.getUserByEmailAndPassword(email, password);
      console.info(user);
      if (user) {
        res.json({ user });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred' });
    }
  },

};
