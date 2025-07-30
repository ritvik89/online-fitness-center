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
const bcrypt = require("bcryptjs");

app.post("/signup", async (req, res) => {
  const { firstname, lastname, age, gender, contact, email, password } = req.body;

  try {
    // Check if email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const newUser = new User({
      firstname,
      lastname,
      age,
      gender,
      contact,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
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
    
    // Compare password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
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