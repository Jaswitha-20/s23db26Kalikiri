var furniture = require('../models/furniture');
exports.furniture_list = function (req, res) {
    res.send('NOT IMPLEMENTED: furniture list');
};
// for a specific furniture.
exports.furniture_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: furniture detail: ' + req.params.id);
};
// Handle furniture create on POST.
// exports.furniture_create_post = function (req, res) {
//     res.send('NOT IMPLEMENTED: furniture create POST');
// };
// Handle furniture delete form on DELETE.
exports.furniture_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: furniture delete DELETE ' + req.params.id);
};
// Handle furniture update form on PUT.
exports.furniture_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: furniture update PUT' + req.params.id);
};
// List of all furniture
exports.furniture_list = async function (req, res) {
    try {
        thefurniture = await furniture.find();
        res.send(thefurniture);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.furniture_view_all_Page = async function (req, res) {
    try {
        thefurniture = await furniture.find();
        res.render('furniture', { title: 'furniture Search Results', results: thefurniture });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.furniture_create_post = async function (req, res) {
    console.log(req.body)
    let document = new furniture();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Furniture = req.body.Furniture;
    document.Design = req.body.Design;
    document.Cost = req.body.Cost;
    document.Brand = req.body.Brand;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



