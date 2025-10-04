const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Contact POST route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Please fill all fields" });
  }

  // For testing, just log the data
  console.log("Contact form submitted:", req.body);

  // Here you can integrate Nodemailer to send emails

  res.status(200).json({ msg: "Message received" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
