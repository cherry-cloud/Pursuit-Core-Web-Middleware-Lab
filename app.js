const express = require("express");
const cors = require("cors");



const app = express();
app.use(cors());

const port = 3000;

let animalArray = ["dog", "frog", "bird", "snake", "monkey", "giraffe", "zebra", "whale", "lion", "panda", "elephant", "koala", ]



const isAnimal = (req, res, next) => {
    if (animalArray.includes(req.params.animals)) {
        console.log("Middleware isAnimal fired");
        // res.json({status: "success", message: true})
        next();
    } else {
        console.log("Middleware isAnimal fired and false");
        res.json({status: "sucess", message: false})
         // next();//a bunch of errors thought I need next for the middleware to work??? so why errors?
       
    }
    // next();
}

app.get("/animals/:animals", isAnimal, (req, res) => {
    console.log(req.params);
    res.json({status: "success", message: true})
})

app.listen(port, () => {
    console.log("listening on port: " + port)
})