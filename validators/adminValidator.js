const { urlencoded } = require('express');
const { isValidObjectId } = require('mongoose');
const { checkSchema } = require('express-validator'); 
module.exports = {
    newLinkAction: checkSchema({
        status: {
            isLength:{
                options: { min:4}
             },
            errorMessage:'Status deve ser 0(Zero) ou (1)',  
        },
        title:{
            isLength:{
                options: { min:2}
             },
            errorMessage:'Título inválido - Deve ter no minino 2 characters',
        },
        href:{
            isLength:{
                options: { min:4}
             },
             notEmpty:true, 
             errorMessage:'Url inválida',
        },
        op_bg_color:{
            isLength:{
                options: { min:4}
             },
             errorMessage:'Background-color inválida',
        },
        op_bg_text_color:{
            isLength:{
                options: { min:4}
             },
          errorMessage:'Cor de fundo do texto inválido', 
        },
        op_border_type:{
             isLength:{
                options: { min:4}
             },
          errorMessage:'Tipo de borda inválido',
                          
        },
        page_id:{
           
             
          
        }
    }),
}