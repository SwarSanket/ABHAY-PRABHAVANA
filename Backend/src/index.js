import connectDB from "./db/db.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

// Call the function to connect to the database
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })

  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });
