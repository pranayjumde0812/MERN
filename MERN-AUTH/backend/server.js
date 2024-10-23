import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();

const port = process.env.PORT || 6000;
const app = express();


app.use('/api/users', userRoutes);
app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`server has started on port ${port}`));
