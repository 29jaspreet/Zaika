const express = require('express');
const app = express();
const CreateUser = require("./Routes/CreatUser");
const DisplayData = require("./Routes/displayData");

const port = 5000; 
const cors = require('cors')
require("./db");


app.use(cors())

app.get('/', (req, resp)=>{
    return resp.send('hello world');
});

app.use(express.json());

app.use("/api" , CreateUser);
app.use("/api" , DisplayData);


app.listen(port ,()=>{
    console.log(`example app listening on port ${port}`)
})