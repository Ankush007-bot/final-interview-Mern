const express = require("express");
const jwt = require("jsonwebtoken");
const redis = require("./utils/redis");
const auth = require("./middleware/auth");
const app = express();

app.use(express.json());

// 🟢 Login → Issue JWT
app.post("/login", (req, res) => {
  const user = { id: 1, name: "Ankush" };
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// 🔐 Protected API
app.get("/profile", auth, (req, res) => {
  res.json({ message: "Profile Data", user: req.user });
});

// 🔴 Logout → Add token to blacklist
app.post("/logout", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(400).json({ message: "Token missing" });

  // set token in redis with expiry equal to JWT expiry (1 hour)
  await redis.set(`blacklist:${token}`, "true", { EX: 3600 });

  res.json({ message: "Logout successful, token blacklisted" });
});

app.listen(5000, () => console.log("Server running on 5000"));
