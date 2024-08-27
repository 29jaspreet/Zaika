const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Zaika").then(async ()=>{
    console.log("Db connection is made succesfully");

    const FoodItems =mongoose.model('food_items' , new mongoose.Schema({

    }));
    const fetchedData = await FoodItems.find({});
    global.food_items = fetchedData;

    const FoodCategory = mongoose.model('foodCategory' , new mongoose.Schema({

    }));
    const fetchedCategory= await FoodCategory.find({});
global.foodCategory = fetchedCategory;
    
        console.log('Data from MongoDb :');
      
    }).catch((err)=>{
        console.log(err.message);
    });

