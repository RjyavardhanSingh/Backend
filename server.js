const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const feedbackRoutes = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/api/feedback', feedbackRoutes);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));


app.use(express.static(path.join(__dirname, '../Portfolio/my-project/dist'))); 

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Portfolio/my-project/dist', 'index.html')); 
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
