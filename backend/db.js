const mongoose = require('mongoose');
const mongoDB = async()=>{
    await mongoose.connect("mongodb://localhost:27017/Zaika",()=>{
        console.log("connected succesfully");
        
    });
}

module.exports=mongoDB;
