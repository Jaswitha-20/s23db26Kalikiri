var express = require('express');
const furniture_controlers= require('../controllers/furniture');
var router = express.Router();
/* GET costumes */
router.get('/', furniture_controlers.furniture_view_all_Page );
module.exports = router;

// GET request for one costume.
router.get('/furniture/:id', furniture_controlers.furniture_detail)

/* GET detail costume page */
router.get('/detail', furniture_controlers.furniture_view_one_Page);


/* GET create update page */
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
router.get('/update',secured, furniture_controlers.furniture_update_Page);

/* GET delete costume page */
router.get('/delete',secured, furniture_controlers.furniture_delete_Page);

router.get('/create',secured, furniture_controlers.furniture_create_Page);
