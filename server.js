import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema for email subscriptions
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

// Create a model from the schema
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Define the /api/subscribe route
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
 
  try {
    // Create a new subscriber
    const newSubscriber = new Subscriber({ email });

    // Save to the database
    await newSubscriber.save();

    res.status(201).json({ message: 'Subscription successful' });
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate email error code
      res.status(400).json({ message: 'Email already subscribed' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
