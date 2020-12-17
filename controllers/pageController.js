const mongoose = require('mongoose'); 
const Page = require('../Models/Page'); 

exports.index = async (req, res) => {
    const page = await Page.findOne({slug:req.params.slug, user_id:'5fd8ec52bd6a4666b0a2bc2f'});
    
    if (page){
         res.render('page',{ page });
    } else {
        res.redirect('/admin');
    }
    
   
}

exports.addAction = async (req, res) => {
        req.body.slug = 'eugeniopage1'
        req.body.op_font_color = '#000000';
        req.body.op_bg_type = 'color'; 
        req.body.op_bg_value = '#FFFFFF';
        req.body.op_profile_image = 'default.png'; 
        req.body.op_title = 'Pagina01 do Eugenio'; 
        req.body.op_description = 'Esta pagina é do Eugenio'; 
        req.body.op_fb_pixel = '';
        req.body.user_id = req.user._id;   
       
        page = new Page(req.body);
        await page.save();
        res.redirect('/'); 
}
