const mongoose = require('mongoose'); 
mongoose.Promise  = global.Promise;

const ObjectId = mongoose.Schema.Types.ObjectId;
const pageSchema = new mongoose.Schema({
    slug:String, 
    op_font_color:{
        type:String,
        default: '#000000' 
    },  
    op_bg_type:{
        type:String,
        default: 'color'
    },
    op_bg_value:{
        type:String,
        default: '#FFFFFF'
    }, 
    op_profile_image:{
        type:String,
        default: 'default.png'
    }, 
    op_title:{
        type:String,
        default: ''
    }, 
    op_description:{
        type:String,
        default: ''
    }, 
    op_fb_pixel:{
        type:String,
        default: ''
    }, 
    user_id:{
        type:ObjectId, 
        ref:'User', 
    }
     
},
{
    timestamps:true
});


module.exports = mongoose.model('Page', pageSchema);
