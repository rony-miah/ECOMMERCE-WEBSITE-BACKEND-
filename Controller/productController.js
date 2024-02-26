const UserList = require("../models/userSchema");

async function secureProduct(req, res, next) {
    // console.log(req.headers.authorization.split('@'));
    const userId = req.headers.authorization.split('@')[1];
    const password = req.headers.authorization.split('@')[2];
    // console.log(userId, password);
    if (!req.headers.authorization) {
        res.json({ error: "Unauthorized" });
    } else {
        const user = await UserList.find({ _id: userId });
        // console.log(user.length);
        if (user.length > 0) {
            if (password == "e!8/ekV18e*K") {
                // console.log(user[0].role);
                if (user[0].role == "merchant") {
                    // console.log("u can upload");
                    next();
                }
            } else {
                res.json({ error: "You aren't able to upload" });
            }
        } else {
            res.json({ error: "You can't upload your product" });
        }
    }

}

function createProduct(req, res) {
    res.json({ success: "product created" })
}

module.exports = { secureProduct, createProduct };