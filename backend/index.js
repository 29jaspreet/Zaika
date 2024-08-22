const express = require('express')
const app = express();
const port = 5000; 
require("./db");

app.get('/', (req, resp)=>{
    resp.send('hello world');
})

app.listen(port ,()=>{
    console.log(`example app listening on port ${port}`)
})