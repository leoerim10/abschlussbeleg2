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

    plz: {
        type: String,
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
    privacy: {
        type: String,
    },
    lat: {
        type: String,
    },
    long: {
        type: String,
    },
});

const Contact = mongoose.model("Contact", Contactschema);
module.exports = Contact;