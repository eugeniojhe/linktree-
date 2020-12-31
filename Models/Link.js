const mongoose = require('mongoose'); 
const slug = require('slug');
const Page  = require('./Page');
mongoose.Promise  = global.Promise;

const ObjectId = mongoose.Schema.Types.ObjectId;
const linkSchema = new mongoose.Schema({
    status:{
           type:Number, 
           default:1,
    },
    order:Number, 
         
    title:{
        type:String, 
        trim:true,
        required:'Titúlo do link inválido', 
    },
    href:String, 
    op_bg_color:String, 
    op_text_color:String, 
    ob_border_type:String,        
    page_id:{
        required:'Link  deve referenciar uma pagina', 
        type:ObjectId, 
        ref:'Page', 
    }
  },
{
    timestamps:true
});

linkSchema.statics.countLinks = function (slug,userId) {
    //Eugenio 31/12/2020- It have been replaced by the countDocuments() function 
    // on Controller 
    //return this.aggregate.count({slug:slug,user_id:userId});
}

module.exports = mongoose.model('Link', linkSchema);

