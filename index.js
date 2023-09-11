import express  from "express";

const app = express();
app.use( express.static( "public" ) );


app.get("/",(req,res)=>{
    res.render("index.ejs")
});

app.get("/about",(req,res)=>{
    res.render("about.ejs")
});

app.get("/contact",(req,res)=>{
    res.render("contact.ejs")
});

app.get("/project",(req,res)=>{
    res.render("project.ejs")
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
