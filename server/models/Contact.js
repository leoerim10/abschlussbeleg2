const mongoose = require('mongoose')

const Contactschema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    street: {
        type: String,
    },
    houseNumber: {
        type: Number,
    },
    postalCode: {
        type: Number,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    owner: {
        type: String,
    },
    lat: {
        type: String,
    },
    lng: {
        type: String,
    },
});

const Contact = mongoose.model("Contact", Contactschema);
module.exports = Contact;