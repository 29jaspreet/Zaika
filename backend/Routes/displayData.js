const express = require('express');
const router = express.Router();

router.post('/foodData' ,(req,resp)=>{
    try {
        
       return resp.send([global.food_items,global.foodcategories])
    } catch (error) {
        console.error(error.message);
        resp.send("Server Error")
    }
})

module.exports = router;
