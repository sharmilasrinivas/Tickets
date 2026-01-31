require('dotenv').config(); // Load environment variables
import { connect } from 'mongoose';

// Replace the placeholder with your Atlas connection string
const uri = process.env.DB_URI;

connect(uri)
  .then(() => console.log('Successfully connected to MongoDB Atlas with Mongoose!'))
  .catch(err => console.error('Connection failed:', err));