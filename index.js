import express from "express"
const app = express();

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.listen(5000, () => console.log("Server ready on port 5000."));

