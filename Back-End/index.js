import express from "express";

const  app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
  res.send("Home page");
})
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Register data received");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login data received");
});

app.get("/about",(req,res)=>
{
  res.send("About page is here")
})

  app.listen(8000,()=>
  {
    console.log("Running")
  })