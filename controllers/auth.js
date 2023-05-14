const express=require("express");
const register=require("./register")
const login=require("./login")
const logout=require("./logout")

const router=express.Router();


//Router.post("/register",register);
//Router.post("/login",login);
//Router.get("/logout",logout);

module.exports=router;

