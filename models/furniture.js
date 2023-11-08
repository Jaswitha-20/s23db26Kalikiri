const mongoose = require("mongoose")
const furnitureSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Costume",costumeSchema);