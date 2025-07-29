const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const User = require("./models/User");
const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.post("/signup", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


//  Login Route (NEW)
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Basic password match (no hashing for demo purposes)
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    res.status(200).json({ message: "Login successful!" });

  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
});

app.post('/admin/login', (req, res) => {
  const { email, password } = req.body;

  const ADMIN_EMAIL = 'admingym@gmail.com';
  const ADMIN_PASSWORD = 'admin@123';

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    res.status(200).json({ message: 'Login successful', email }); // include the email
  } else {
    res.status(401).json({ message: 'Login error' });
  }
});


app.get("/total-members", async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.status(200).json({ totalMembers: count });
  } catch (err) {
    res.status(500).json({ error: "Could not fetch members" });
  }
});


// Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});