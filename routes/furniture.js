var express = require('express');
const furniture_controlers= require('../controllers/furniture');
var router = express.Router();
/* GET costumes */
router.get('/', furniture_controlers.furniture_view_all_Page );
module.exports = router;
