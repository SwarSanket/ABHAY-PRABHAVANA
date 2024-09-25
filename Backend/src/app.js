import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import subscriptionRoutes from "./routes/subscriptionRoutes.js"; // Adjust the path if necessary

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Access the subscription routes
app.use("/api", subscriptionRoutes); // This will prefix all routes in subscriptionRoutes with "/api"

// Export the app
export default app;
