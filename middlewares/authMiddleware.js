const { register } = require('../controllers/adminController');

exports.isLogged = (req, res, next) => {
    if(!req.isAuthenticated()){
        res.redirect('/admin/login');
        return; 
    }
    next(); 
}