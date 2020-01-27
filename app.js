const express = require("express");
const cors = require("cors");



const app = express();
app.use(cors());

const port = 3000;

let animalArray = ["dog", "frog", "bird", "snake", "monkey", "giraffe", "zebra", "whale", "lion", "panda", "elephant", "koala", ]



const isAnimal = (req, res, next) => {
    if (animalArray.includes(req.params.animals)) {
        console.log("Middleware isAnimal fired");
        
        next();
    } else {
        console.log("Middleware isAnimal fired and false");
        res.json({status: "sucess", message: false})
         
       
    }
    
}

app.get("/animals/:animals", isAnimal, (req, res) => {
    console.log(req.params);
    res.json({status: "success", message: true})
})


const generateSpread = (req, res, next) => {
   let nums = [];
   for (let i = Number(req.params.floor); i <= Number(req.params.ceil); i++) {
       nums.push(i);
   }
//    let randNum = Math.floor(Math.random(req.params.floor) * (req.params.ceil) )


}

app.get("/random/:floor/:ceil", generateSpread, (req, res) => {
   console.log(req.params.floor, req.params.ceil);
   
   res.json({status: "success", range: [req.query.floor, req.query.ceil], randPick: res.randNum})

})

app.listen(port, () => {
    console.log("listening on port: " + port)
})

