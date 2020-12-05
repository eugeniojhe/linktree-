const mongoose = require('mongoose'); 
mongoose.Promise  = global.Promise;

const ObjectId = mongoose.Schema.Types.ObjectId;
const pageSchema = new mongoose.Schema({
    status:Number, 
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

module.exports = mongoose.model('Link', pageSchema);

