const mongoose = require("mongoose")
const furnitureSchema = mongoose.Schema({
Furniture: String,
Design: String,
Cost: Number,
Brand: String
})
module.exports = mongoose.model("furniture",furnitureSchema);
