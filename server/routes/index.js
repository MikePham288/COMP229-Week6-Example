let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/products', indexController.displayProductPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* Get Route for displaying Login page  */
router.get('/login', indexController.displayLoginPage);

/* Post Route for processing Login page */
router.post('/login', indexController.processLoginPage);

/* Get Route for displaying Register page  */
router.get('/register', indexController.displayRegisterPage);

/* Post Route for processing Register page */
router.post('/register', indexController.processRegisterPage);

/* Get to perform UserLogout */
router.get('/logout', indexController.performLogout);


module.exports = router;
