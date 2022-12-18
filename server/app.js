const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require("express").Router();
const Data = require("./schema");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoURI = "mongodb://localhost:27017/hello";
mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(
    cors({
      origin: "*",
    })
  );
app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
routes.get("/alldata", async (req, res) => { 
    try {
        const foodDatas = await Data.find({})
        console.log(foodDatas)
        res.send(foodDatas);
        
    } catch (error){
        res.status(500).json({
            Error: error
        })
    }
});

