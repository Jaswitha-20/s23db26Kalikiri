const mongoose = require("mongoose")
const furnitureSchema = mongoose.Schema({
    Furniture: {
        type: String,
        required: true
    },
    Design: String,
    Cost: {
        type: Number,
        min: 2000,
        max: 2000000
    },
    Brand: String
})
module.exports = mongoose.model("furniture", furnitureSchema);
