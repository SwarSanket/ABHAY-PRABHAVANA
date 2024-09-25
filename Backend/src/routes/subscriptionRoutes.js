import express from "express";
import { createSubscription } from "../controller/subscriptionController.js"; // Adjust the path based on your folder structure

const router = express.Router();

// Define the route for creating a new subscription
router.post("/subscriptions", createSubscription);

export default router;
