const mongoose = require('mongoose'); 
const passportLocalMongoose = require('passport-local-mongoose'); 
mongoose.Promise  = global.Promise;


const userSchema = new mongoose.Schema({
    username:{
        type:String,        
        },
    email:{
        type:String,      
    },
    resetPasswordToken:String, 
    resetPasswordExpires:Date, 
},
{
    timestamps:true
});
userSchema.plugin(passportLocalMongoose,{ usernameField: 'email' });
module.exports = mongoose.model('User', userSchema);
