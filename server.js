const express = require("express");
const connectDB = require("./config/db");
const ejs = require("ejs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

// cors

const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(","),
};
app.use(cors(corsOptions))

// ejs.Template enging
app.use(express.static("public"));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.json());

// routes

app.use("/api/files", require("./routes/files"));

app.use("/files", require("./routes/show"));

app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
