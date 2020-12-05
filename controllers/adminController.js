const mongoose = require('mongoose');
const User = require('../Models/User'); 

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
        req.flash('success','Login efetuado com sucesoo');
        res.redirect('/admin')
    });
}

exports.logout = async (req, res) => {
    res.send('Inside logOut'); 
 }


 exports.register = async (req, res) => {
     res.render('admin/register'); 
 }

 exports.registerAction = async (req, res) => {
     const newUser = new User(req.body); 
     console.log(req.body.name); 
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
     res.send('inside pageLinks'); 
 }


 exports.pageDesign = async (req, res) => {
     res.send('Inside pageDesign'); 
 }

 exports.pageStats = async (req, res) => {
     res.send('Inside pageStats');
 }

 exports.index = async (req, res) => {
     res.send('admin/index'); 
 }