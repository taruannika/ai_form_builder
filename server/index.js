const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoutes = require("./routes/auth.route");

const app = express();

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;
const CLIENT_URL = process.env.CLIENT_URL;
const CORS_OPTIONS = {
  origin: CLIENT_URL,
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE"],
};

const connectToDB = async () => {
  try {
    console.log("Connecting to DB...");
    await mongoose.connect(MONGO_URI);
    console.log("Connected succesfully to DB");
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};

connectToDB();

app.use(cors(CORS_OPTIONS));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
