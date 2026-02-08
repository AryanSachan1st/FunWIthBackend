import express from  "express";
import 'dotenv/config';

const app = express();
const port = process.env.PORT;


app.get("/", (req, res) => {
    res.send("Welcome to my Express Server");
})

app.get("/about", (req, res) => {
    res.send("<h1>Myself Aryan Sachan</h1>")
})

const data = {
    name: "Aryan Sachan",
    age: 20,
    college: "VIT Chennai"  
}

app.get("/data", (req, res) => {
    res.json(data);
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})