const express=require("express")
const router=express.Router();
router.get("",(req,res)=>{
res.render("index");
})
router.get("/register",(req,res)=>
{
    res.sendFile("register.html",{root:"./public"});
}
)

router.get("/register",(req,res)=>
{
    res.sendFile("login.html",{root:"./public/"});
}
)
