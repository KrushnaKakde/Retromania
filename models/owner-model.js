const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    email: String,
    password: String,
 
    product:{
        type: Array,
        default: []
    },
    gestin: String,
    picture: String,

});

module.exports = mongoose.model('owner', ownerSchema);
;