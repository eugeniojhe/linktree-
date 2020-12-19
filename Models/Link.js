const mongoose = require('mongoose'); 
const slug = require('slug');
const Page  = require('./Page');
mongoose.Promise  = global.Promise;

const ObjectId = mongoose.Schema.Types.ObjectId;
const linkSchema = new mongoose.Schema({
    status:{
           type:Number, 
           default:0 
    },
    order:Number, 
         
    title:{
        type:String, 
        trim:true 
    },
    href:String, 
    op_bg_color:String, 
    op_text_color:String, 
    ob_border_type:String,        
    page_id:{
        type:ObjectId, 
        ref:'Page', 
    }
  },
{
    timestamps:true
});

linkSchema.statics.countLinks = function (slug,userId) {
    //return this.aggregate.count({slug:slug,user_id:userId});
}

module.exports = mongoose.model('Link', linkSchema);

