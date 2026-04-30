import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const SECRET_KEY = "mysecretkey";

let users = [];


// middleware  

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // optional
    next();
  } catch (err) {
    return res.json({ msg: "Invalid token" });
  }
};

app.get("/profile", authenticate, (req, res) => {
  res.json({
    msg: "Welcome to profile",
    user: req.user
  });
});



app.get("/", (req, res) => {
  res.json({ msg: "home is working now" })
})
app.get("/register", (req, res) => {
  res.json({ msg: "welcone to the register" })

});

app.post("/register", async (req, res) => {
  const { email, name, pwd } = req.body;

  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.json({ msg: "User already exists" });
  }

  const hashedPwd = await bcrypt.hash(pwd, 10);

  users.push({ email, name, pwd: hashedPwd });

  console.log("All Users:", users);

  res.json({ msg: "User registered successfully" });
});


app.get("/login", (req, res) => {
  res.json({ msg: "welcone to the login" })

});

app.post("/login", async (req, res) => {
  const { email, pwd } = req.body;

  const user = users.find(user => user.email === email);

  if (!user) {
    return res.json({ msg: "User not found" });
  }

  const isMatch = await bcrypt.compare(pwd, user.pwd);

  if (!isMatch) {
    return res.json({ msg: "Wrong password" });
  }

  const token = jwt.sign(
    { email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ msg: "Login successful", token });
});



app.get("/about", (req, res) => {
  res.send("About page is here")
})

app.listen(8000, () => {
  console.log("Running")
})