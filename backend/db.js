const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Zaika").then(async ()=>{
    console.log("Db connection is made succesfully");

    const FoodItems =mongoose.model('food_items' , new mongoose.Schema({

    }));
    const fetchedData = await FoodItems.find({});
    global.food_items = fetchedData;
    console.log('Data from MongoDb :',fetchedData);


    const FoodCategory = mongoose.model('foodcategories' , new mongoose.Schema({

    }));
    const fetchedCategory= await FoodCategory.find({});
global.foodcategories = fetchedCategory;
    
        console.log('Data from MongoDb :',fetchedCategory);
      
    }).catch((err)=>{
        console.error(err.message);
    });

