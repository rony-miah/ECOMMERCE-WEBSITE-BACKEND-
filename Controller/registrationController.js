const emailValidation = require('../helpers/emailValidation');
const emailVerificationTemplate = require('../helpers/emailVerificationTemplate');
const sendEmail = require('../helpers/sendEmail');
const UserList = require('../models/userSchema');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

async function registrationController(req, res) {
    const { firstname, lastname, email, telephone, address1, city, postcode, division, district, password } = req.body;
    // console.log(req.body);
    if (!firstname || !lastname) {
        return res.send({error: "Firstname & Lastname is required"})
    }
    if (!email) {
        return res.send({error: "Email is required"})
    }
    if(!emailValidation(email)) {
        return res.json({error:"Invalid Email!"})
    }
    if (!telephone) {
        return res.send({error: "Telephone is required"})
    }
    if (!address1) {
        return res.send({error: "Address is required"})
    }
    if (!city) {
        return res.send({error: "City is required"})
    }
    if (!postcode) {
        return res.send({error: "Postcode is required"})
    }
    if (!division) {
        return res.send({error: "Division is required"})
    }
    if (!district) {
        return res.send({error: "District is required"})
    }
    if (!password) {
        return res.send({error: "Password is required"})
    }

    const usedEmail = await UserList.findOne({email});
    if(usedEmail){
        return res.send({error: "Already in used!"})
    }

    bcrypt.hash(password, 10, function(err, hash) {
        const users = new UserList({
            firstname,
            lastname,
            email,
            telephone,
            address1,
            city,
            postcode,
            division,
            district,
            password:hash
        })
        users.save();
        var token = jwt.sign({ email }, process.env.SECRET_TOKEN);
        sendEmail(email, "EMAIL VERIFICATION", emailVerificationTemplate(token));
        res.send(users);
    });
    
}

module.exports = registrationController;