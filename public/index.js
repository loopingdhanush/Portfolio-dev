import express from "express";
import { createServer } from "http";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public" });
});

export default app;


app.listen(5000, () => console.log("Server ready on port 5000."));

