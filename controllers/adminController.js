const mongoose = require('mongoose');
const { findOne } = require('../Models/Page');
const Page = require('../Models/Page');
const User = require('../Models/User'); 
const Link = require('../Models/link'); 

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
    }
    
    const page = await Page.findOne({slug:req.params.slug, user_id:req.user._id});
     
    if (page){
        params.page = page; 
        params.links = await Link.find({page_id:page.id}); 
        res.render('admin/page_links',{ params })
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
    const pages =  await Page.find({user_id:req.user._id});
    res.render('admin/index', { pages }); 
   
 }