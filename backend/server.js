import express from "express";
import dotenv from "dotenv";

// Importing Routes from folder
import router from "./routes/goalRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//dotenv.config() 
dotenv.config();

// Import Middleware
import { errorHnadeler } from "./middleware/errorMiddeleware.js";

// Import Db
import { connectDb } from "./config/db.js";

// DB render
connectDb();

const Port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goal", router);
app.use("/api/users", userRoutes);

app.use(errorHnadeler);

const Server = app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
