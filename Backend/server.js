const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");

// Routes Import
const adminRoutes = require("./routes/adminRoutes");
const noticeRoutes = require("./routes/noticeRoutes");
const path = require("path");
const eventRoutes = require("./routes/eventRoutes");
const admissionNotificationRoutes = require("./routes/admissionNotificationRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const homeworkRoutes = require("./routes/homeworkRoutes");
dotenv.config();

// MongoDB Connect
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/events", eventRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/admission-notification", admissionNotificationRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/homework", homeworkRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Modern Public School Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
