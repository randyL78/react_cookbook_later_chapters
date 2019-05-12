// dependencies
import express from 'express';
import path from 'path';

// Controllers
import apiController from './controllers/api';

// Globals
const port = 3000;

// Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', apiController);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

