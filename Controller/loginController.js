const emailValidation = require("../helpers/emailValidation");
const UserList = require("../models/userSchema");
const bcrypt = require('bcrypt');

async function loginController(req, res){
    // console.log("it's login time");
    const {email, password} = req.body;
    if (!email){
       return res.json({error: "Email is required!"});
    }else if(!emailValidation(email)){
        return res.json({error: "Email is not match!"});
    }else if(!password){
        return res.json({error: "Password is required!"});
    }else{
        const existingEmail = await UserList.find({email});
        // console.log(existingEmail);
        if (existingEmail.length > 0) {
            bcrypt.compare(password, existingEmail[0].password).then(function(result) {
                if (result) {
                    res.json({success: "Login successful!"});
                }else{
                    res.json({error: "Password is not matched!"});
                }
            });
        }else{
            return res.json({error: "Email is not matched!"});
        }
    }
}

module.exports = loginController;