import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth/auth";
import { errorMiddlewareController } from "./middleware/error/errorMiddleware";

const PORT = process.env.PORT;
const URI = process.env.DATABASE_STRING as string;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/auth", authRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint doesn't exist!" });
  next();
});

app.use(errorMiddlewareController);

mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT || 5000, () => {
      console.log(`Database connected! Server is running on PORT: ${PORT} `);
    });
  })
  .catch((error) => console.log(error));
