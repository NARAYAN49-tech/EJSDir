const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.use(express.urlencoded({ extended : true }));
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.get("/about", (req, res) =>{
    res.render("about.ejs");
});

app.get("/signup", (req, res) => {
    res.render("signup.ejs");
});

app.get("/game", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1 ;
    let name = "Narayan";
    let lostPlayers = ["Ravikant","seema","vimal","jija","rishi","sneha"];
    res.render("game.ejs",{diceVal, name, lostPlayers});
});

app.post("/signup",(req, res) => {
    let {email, password, name} = req.body;
    res.send(`<h1>Username :${name},,, <br>Email :  ${email} <br> Password : ${password}</h1>`);
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
