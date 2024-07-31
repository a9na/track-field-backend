const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/trackfield', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
const athletesRouter = require('./routes/athletes');
const eventsRouter = require('./routes/events');
const resultsRouter = require('./routes/results');

app.use('/api/athletes', athletesRouter);
app.use('/api/events', eventsRouter);
app.use('/api/results', resultsRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
