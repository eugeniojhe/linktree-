const express = require('express');
require('express-group-routes'); 

const adminController = require('../controllers/adminController');
const pageController = require('../controllers/homeController'); 
const homeController = require('../controllers/homeController'); 

const router = express.Router(); 


/* app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  }); */


router.get('/',homeController.index);

router.group('/admin',(router) =>{
     
      router.get('/login',adminController.login);
      router.post('/login',adminController.loginAction); 
      router.get('/logout',adminController.logout); 
      router.get('/register',adminController.register);
      router.post('/register',adminController.registerAction); 
      router.get('/:slug/links',adminController.pageLinks); 
      router.get('/:slug/design',adminController.pageDesign); 
      router.get('/:slug/stats',adminController.pageStats); 
      router.get('/',adminController.index)
})
module.exports = router 