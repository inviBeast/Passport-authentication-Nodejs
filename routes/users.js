const express = require('express');
const router = express.Router();
const passport = require('passport');
const middleware=require('../middleware/middleware.js')
const User = require('../model/user');

router.get('/',(req,res)=>{res.render('navbar')})

router.get("/register",(req,res)=> res.render("register"))

router.post('/register',async(req,res)=>{
     try {
         const { email, username, password } = req.body;
         console.log(req.body)
         const user = new User({ email, username });
         const registeredUser = await User.register(user, password);
         console.log(registeredUser)
         req.login(registeredUser, err => {
             if (err) return next(err);
             //req.flash('success', 'Welcome to Yelp Camp!');
             res.redirect('/');
         })
     } catch (e) {
         //req.flash('error', e.message);
         res.redirect('register');
     }
 })
 
router.get('/login',(req,res)=>{
  res.render('login')
})

router.post('/login',passport.authenticate('local', { failureFlash: true, failureRedirect: '/error' }),(req,res)=>{

  res.redirect('/confidential')
  })

router.get('/confidential',middleware.isLoggedIn,(req,res)=>{    
  // if(req.isAuthenticated()){
  //     req.session.returnTo=req.originalUrl
  const redirectUrl=req.session.returnTo || '/'
      res.redirect(redirectUrl)
   })
  //  middleware.isLoggedIn
router.get('/error',(req,res)=>res.send("invalid credentials"))

router.get('/campgrounds',(req,res)=>{
  res.send('authenticated')
})

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); 
    }
    res.redirect('/register');
  });
});
router.get("/COPS",middleware.isLoggedIn,(req,res)=>{
  res.redirect("https://www.copsiitbhu.co.in/")
})
// middleware.isLoggedIn
module.exports = router;