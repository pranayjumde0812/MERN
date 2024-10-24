import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/database.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 6000;
const app = express();

app.use(express.json()); // middlewares
app.use(express.urlencoded({ extended: true })); 

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server has started on port ${port}`));
