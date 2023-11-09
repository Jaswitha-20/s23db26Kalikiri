var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var furniture_controller = require('../controllers/furniture');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/furniture', furniture_controller.furniture_create_post);
// DELETE request to delete Costume.
router.delete('/furniture/:id', furniture_controller.furniture_delete);
// PUT request to update Costume.
router.put('/furniture/:id', furniture_controller.furniture_update_put);
// GET request for one Costume.
router.get('/furniture/:id', furniture_controller.furniture_detail);
// GET request for list of all Costume items.
router.get('/furniture', furniture_controller.furniture_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"furniture", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
