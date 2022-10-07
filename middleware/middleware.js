var middlewareObj={};
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../model/user');

//middleware object to check if logged in
// isLoggedIn = (req, res, next) => {
//     if (!req.isAuthenticated()) 
//     {
//         req.session.returnTo=req.originalUrl
//         console.log("not authenticated")
//         return res.redirect("/login");
//     }
//     console.log("yes authenticated")
//     next();
// }
// module.exports=isLoggedIn;


//middleware object to check if logged in
middlewareObj.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) 
    {
        console.log("not")
        return res.redirect("/login");
    }
    console.log("yes authenticated")
    next();
}
module.exports=middlewareObj;