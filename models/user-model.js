const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    cart:{
        type: Array,
        default: []
    },
    orders:{
        type: Array,
        default: []
    },
    isadmin: {
        type: Boolean,
        default: false,
    },
    contact: {
        type: Number,
        default: null,
    },
    picture: {
        type: String,
        default: null,
    },

});

module.exports = mongoose.model('user', userSchema);
;