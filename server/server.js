require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: "http://localhost:3000"
}))

//require config
require("./config/mongoose.config")
//require routes
require("./routes/user.routes")(app);
require("./routes/game.routes")(app);

app.listen(process.env.MY_PORT, ()=> console.log(`You are connected to port ${process.env.MY_PORT}`))