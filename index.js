const express = require("express");
const db= require("/routes/db_config");
const app=express();
const cookie=require("cookie-parser");

const PORT=process.env.PORT || 5000;
app.use("/js",express.static(_dirname+"/public/js"))
app.use("/css",express.static(_dirname+"/public/css"))
app.set("view_engine","ejs");
app.set("views","./views");
app.use(cookieParser());
app.use(cookie());
app.use(express.json());
db.connect((err)=>{
    if(err)throw err;
    console.log("database connected");

})

app.use("/",require("./routes/pages"))
app.use("/api", require("/.controllers/auth"))
app.listen(PORT);



