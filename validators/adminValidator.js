const { urlencoded } = require('express');
const { isValidObjectId } = require('mongoose');
const { checkSchema } = require('express-validator'); 
module.exports = {
    newLinkAction: checkSchema({
        status: {
            isBoolean: true, 
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
             isURL: true, 
             errorMessage:'Url inválida',
        },
        op_bg_color:{
            isLength:{
                options: { min:4}
             },
             errorMessage:'Background-color inválida',
        },
        op_text_color:{
            isLength:{
                options: { min:4}
             },
          errorMessage:'Cor do texto inválida', 
        },
        op_border_type:{
             isLength:{
                options: { min:4}
             },
          errorMessage:'Tipo de borda inválido',
                          
        },
        page_id:{
          // isInt:true, //Validando somente campos que estão
                        //no form 
             
          
        }
    }),
}