const mongoose = require('mongoose');
const { findOne, replaceOne } = require('../Models/Page');
const Page = require('../Models/Page');
const User = require('../Models/User'); 
const Link = require('../Models/link'); 
const Click = require('../Models/Click');

const { validationResult, matchedData } = require('express-validator'); 

exports.login = async (req,res) =>{
    res.render('admin/login');
}

exports.loginAction = async (req, res) => {
    const auth = User.authenticate(); 
    auth(req.body.email, req.body.password,(error,result) =>{
        if(!result){
            req.flash('error','Senha e/ou E-mail inválid');
            res.redirect('/admin/login');           
            return; 
        }
        req.login(result, () => {});
        res.redirect('/admin')
    });
}

exports.logout = async (req, res) => {
    req.logout(); 
    res.redirect('/');     
 }


 exports.register = async (req, res) => {
     res.render('admin/register'); 
 }

 exports.registerAction = async (req, res) => {
     const newUser = new User(req.body); 
     console.log(req.body.username); 
     User.register(newUser,req.body.password,(error) => {
        if(error){
           req.flash('error','Falha no registro de usuário '+error.message);  
            res.redirect('/admin/register');
            return; 
        }
        res.redirect('/admin/login');
        return; 
     })     
 }

 exports.pageLinks = async (req, res) => {
    let params = {
        page: '',
        links: '', 
        isLink:true,
        containerPage:true,
        bodyPageLinks:true, 
    }
    
    const page = await Page.findOne({slug:req.params.slug, user_id:'5fd8ec52bd6a4666b0a2bc2f'});
     
    if (page){
        params.page = page; 
        params.links = await Link.find({page_id:page.id}); 
       //    res.render('admin/page_links',{ params })
        res.render('admin/header',{params})
    } else {
        res.redirect('/admin'); 
    }
    
 }


 exports.pageDesign = async (req, res) => {
     res.send('Inside pageDesign'); 
 }

 exports.pageStats = async (req, res) => {
     res.send('Inside pageStats');
 }

 exports.index = async (req, res) => {
    let params = {
        pages: '',
        links: '', 
        isLink:true,
        containerIndex:true,         
    } 
    const pages =  await Page.find({user_id:'5fd8ec52bd6a4666b0a2bc2f'});
    params.pages = pages; 
    res.render('admin/header', { params });   
 }

 exports.newLink = async (req, res) => {
    let params = {
        page: '',
        link: false, 
        isLink:true,
        containerPage:true,
        bodyPageEditLink:true,           
    }
    const page = await Page.find({slug:req.params.slug, user_id:'5fd8ec52bd6a4666b0a2bc2f'}); 
    if (page){
        params.page = page; 
        res.render('admin/header',{ params });
        return; 
    }
    res.redirect('/admin'); 
 }

 exports.newLinkAction = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
      //  console.log(errors.mapped()); 
     // req.flash('error','Campos Inválidos');
        let other = errors.mapped(); 
        let  meuErro = {
            other  
        }
        console.log(meuErro); 
        req.flash(req.validationErrors(true));
        req.flash('error',+meuErro); 
        //req.flash('error',+errors.mapped());
        return res.redirect('/admin/'+req.params.slug+'/newLink'); 
    }

     const page = await Page.findOne({slug:req.params.slug,user_id:'5fd8ec52bd6a4666b0a2bc2f'});
     if (page) {
           //Realizar as validações 
             let lastOrder =  await Link.countDocuments({slug:req.params.slug,user_id:'5fd8ec52bd6a4666b0a2bc2f'});
             req.body.order = lastOrder;
             req.body.page_id = page._id;
             const link = new Link(req.body); 
             try {
                link.save(); 
             }catch(error) {
                req.flash('error','Falha ao insirir link '+error.message);
                res.redirect('/admin/'+req.params.slug+'/newlink') ;
                return; 
             }           
     } 
     return res.redirect('/admin'); 
     

 }
