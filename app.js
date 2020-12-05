const express = require('express'); 
const mustache = require('mustache-express'); 
const cookieParser = require('cookie-parser'); //Needed to wokr with messages flashs 
const session = require('express-session'); //Needed to work with messages flashs 
const flash = require('express-flash');//Dealing with messages flashs 
const passport = require('passport');
const localStrategy = require('passport-local').Strategy; 


const router = require('./routes/index'); 










const app = express(); 


app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));


app.use(cookieParser(process.env.SECRET)); 
app.use(session({
    secret:process.env.SECRET, 
    resave:false, 
    //saveUninitiliazed:false, 
    saveUninitialized:false,
}));

app.use(flash());
app.use(passport.initialize()); 
app.use(passport.session()); 

app.use((req,res,next) => {
    res.locals.flashes = req.flash(); 
    next(); 
});

const User = require('./Models/User'); 
passport.use(new localStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 
app.use('/',router); 


app.engine('html',mustache(__dirname+'/views/partials','html'));
app.set('view engine','html'); 
app.set('views',__dirname+'/views'); 

module.exports = app; 