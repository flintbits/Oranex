import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config(); //Load all the environment variables

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json()); //Allows JSON requests

app.use(express.static(path.resolve("public"))); //serve static frontend files

//APi test
app.get("/api/message", (req, res) => {
  res.json({ message: "Its working and hello" });
});

//start the API server
app.listen(PORT, () => {
  console.log(`API Server running at http://localhost:${PORT}`);
});
