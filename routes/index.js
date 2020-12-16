const express = require('express');
require('express-group-routes'); 

const adminController = require('../controllers/adminController');
const pageController = require('../controllers/pageController'); 
const homeController = require('../controllers/homeController'); 

const authMiddleware = require('../middlewares/authMiddleware'); 

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
router.get('/pagina/new',pageController.addAction);
router.group('/admin',(router) =>{
     
      router.get('/login',adminController.login);
      router.post('/login',adminController.loginAction); 
      router.get('/logout',adminController.logout); 
      router.get('/register',adminController.register);
      router.post('/register',adminController.registerAction); 
      router.get('/:slug/links',adminController.pageLinks); 
      router.get('/:slug/design',adminController.pageDesign); 
      router.get('/:slug/stats',adminController.pageStats); 
      router.get('/',authMiddleware.isLogged,adminController.index)
})
router.get('/:slug',authMiddleware.isLogged, pageController.index); 
module.exports = router 