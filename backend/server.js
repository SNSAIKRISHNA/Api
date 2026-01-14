import express from "express";
import dotenv from 'dotenv';

// Importing Routes from folder
import router from './routes/goalRoutes.js'
import { errorHnadeler } from "./middleware/errorMiddeleware.js";

import { connectDb } from "./config/db.js";
dotenv.config();
connectDb()

const Port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/goal',router)

app.use(errorHnadeler)


const Server = app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
