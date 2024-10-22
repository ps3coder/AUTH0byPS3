import dotenv from "dotenv";
import express from "express";
import { checkJwt } from "./middleware/checkJWT.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the public route !");
});
app.get("/private", checkJwt, (req, res) => {
  res.send("Welcome to the private route. You are authenticated!");
});

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
