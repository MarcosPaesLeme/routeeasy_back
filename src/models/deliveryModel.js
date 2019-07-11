const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
    clientName: String,
    weigth: Number,
    address: {
        publicPlace: String,
        number: String,
        neighborhood: String,
        complement: String,
        city: String,
        state: String,
        country: String,
        geolocation: {
            lat: Number,
            lgn: Number,
        }
    }
});

module.exports.DeliverySchema = DeliverySchema;
module.exports.Delivery = mongoose.model('Delivery', DeliverySchema);