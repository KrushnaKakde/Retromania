const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/retromania');
const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart:{
        type: Array,
        default: []
    },
    orders:{
        type: Array,
        default: []
    },
    isadmin: Boolean,
    contact: Number,
    picture: String,

});

module.exports = mongoose.model('user', userSchema);
;