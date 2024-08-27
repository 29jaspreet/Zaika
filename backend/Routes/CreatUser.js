const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const jwt = require ("jsonwebtoken");
const bcrypt =require("bcryptjs");
const jwtSecret = "IamTheLuckiestoneBecauseIamwithTherightpeople";

// signup code
router.post("/creatuser", 
     // email must be an email
  body('email').isEmail(),
  // password must be at least 5 chars long
  body('password' , "Incorrect Password").isLength({ min: 5 }),
  body('name').isLength({ min: 5 })

    ,async(req, resp)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return resp.status(400).json({ errors: errors.array() });
        }
        const salt =await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password,salt)
    try {
     const user = await  User.create({
            name:req.body.name,
            password:secPassword,
            email:req.body.email,
            location:req.body.location,
        });
       return resp.json({success:true})
    } catch (error) {
       console.log(error);
       return resp.json({success:false});
        
    }
});

// login code

router.post("/loginuser",
  body('email').isEmail(),
  // password must be at least 5 chars long
  body('password' , "Incorrect Password").isLength({ min: 5 })
  ,async(req, resp)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

  let email=req.body.email;
 try {
  const userData = await  User.findOne({email});
  if(!userData){
    return resp.status(400).json({ errors: "Try logging in with correct credentials" });
  }

  const pwdCompare = await bcrypt.compare(req.body.password ,userData.password)
if(!pwdCompare){
  return resp.status(400).json({ errors: "Try logging in with correct credentials" });
}

const data ={
  user:{
    id:userData.id
  }
}


const authToken = jwt.sign(data ,jwtSecret);

return resp.json({ success:true , authToken:authToken});

 } catch (error) {
    console.log(error);
    return resp.json({success:false});
     
 }
})

module.exports = router;