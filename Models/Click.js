const mongoose = require('mongoose'); 
mongoose.Promise  = global.Promise;

const ObjectId = mongoose.Schema.Types.ObjectId;
const clickSchema = new mongoose.Schema({
    link_id:{
        type:ObjectId, 
        ref:'Link', 
    },
    click_date:Date, 
    total:{
        type:Number, 
        default:0
    },           
  },
 {
    timestamps:true
});
module.exports = mongoose.model('Click', clickSchema);

