var furniture = require('../models/furniture');
// List of all furniture
exports.furniture_list = function(req, res) {
res.send('NOT IMPLEMENTED: Costume list');
};
// for a specific furniture.
exports.furniture_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle furniture create on POST.
exports.furniture_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle furniture delete form on DELETE.
exports.furniture_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle furniture update form on PUT.
exports.furniture_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};

exports.furniture_list = async function(req, res) {
    try{
    thefurniture = await furniture.find();
    res.send(thefurniture);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
