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
// for a specific Costume.
exports.furniture_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await furniture.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Costume update form on PUT.
exports.furniture_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await furniture.findById(req.params.id)
        // Do updates of properties
        if (req.body.Furniture) toUpdate.Furniture = req.body.Furniture;
        if (req.body.Design) toUpdate.Design = req.body.Design;
        if (req.body.Cost) toUpdate.Cost = req.body.Cost;
        if (req.body.Brand) toUpdate.Brand = req.body.Brand;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};

exports.furniture_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await furniture.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle a show one view with id specified by query
exports.furniture_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await furniture.findById(req.query.id)
        res.render('furnituredetail',
            { title: 'Furniture Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


//Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.furniture_create_Page = function(req, res) {
console.log("create view")
try{
res.render('furniturecreate', { title: 'Furniture Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for updating a costume.
// query provides the id
exports.furniture_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await furniture.findById(req.query.id)
res.render('furnitureupdate', { title: 'Furniture Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};





