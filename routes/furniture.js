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

/* GET create costume page */
router.get('/create', furniture_controlers.furniture_create_Page);

/* GET create update page */
router.get('/update', furniture_controlers.furniture_update_Page);

/* GET delete costume page */
router.get('/delete', furniture_controlers.furniture_delete_Page);
