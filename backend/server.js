import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./db/conn.js";
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// routes
// - POST /api/users** - Register a user
// - POST /api/users/auth** - Authenticate a user and get token
// - POST /api/users/profile** - Logout user and clear cookie
// - GET /api/users/profile** - Get user profile
// - PUT /api/users/profile** - Update profile
