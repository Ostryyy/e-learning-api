const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

connectDB();

app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
