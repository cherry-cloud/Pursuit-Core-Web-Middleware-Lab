const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;

let animals = ["dog", "frog", "bird", "snake", "monkey", "giraffe", "zebra", "whale", "lion", "panda", "elephant", "koala", ]

const isAnimal = 

app.get("/animals/:animals", (req, res) => {
    
})

app.listen(port, () => {
    console.log("listening on port: " + port)
})