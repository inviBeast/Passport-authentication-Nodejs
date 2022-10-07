const express=require('express')
const app=express()
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./model/user');
const userRoutes = require('./routes/users');
const path=require('path')
const flash=require('connect-flash')
const session=require('express-session')
const mongoose=require('mongoose')
const router = express.Router();
app.use(flash())
mongoose
  .connect('mongodb+srv://invibeast:backend@cluster0.pt4rr.mongodb.net/passportlearn?retryWrites=true&w=majority')
  .then(() => {
    console.log("MONGO connection successful");
  })
  .catch((err) => {
    console.log(" connection error");
    console.log(err);
  });
  
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(flash())
app.use(session({secret:'keepsecret',resave:false,saveUninitialized:false}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  console.log(req.user)
 res.locals.currentUser = req.user; 
 res.locals.success = req.flash('success');
 res.locals.error = req.flash('error');
  
  next();
})
app.use('/',userRoutes)


// require('./auth')

// app.get('/googlelearn',(req,res)=>{
//   res.send('<a href="/auth/google">Authenticate with Google</a>')
// })

// app.get('/auth/google',
// passport.authenticate('google'),{scope:['email','profile']});







app.listen(5000,()=>{
  console.log('listening at 1000')
})