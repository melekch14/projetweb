const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes.js');
const resRoutes = require('./routes/reservationRoutes.js');
const contactRoutes = require('./routes/contactRoutes.js');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/reservation', resRoutes);
app.use('/contact', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
