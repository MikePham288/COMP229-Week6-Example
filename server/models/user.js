//require modules for the user model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let Schema = mongoose.Schema;
let Model = mongoose.model;

let UserSchema = Schema({
    username: {
        type: String,
        default: "",
        trim: true,
        required: 'username is required'
    },
    /*
    password:
    {
    type: String,
    default:"",
    trim:true,
    required: 'password is required
    }
    */

    email: {
        type: String,
        default: "",
        trim: true,
        required: 'email is required'
    },
    displayName: {
        type: String,
        default: "",
        trim: true,
        required: 'Display Name is required'
    },
    created: {
        type: Date,
        default: Date.now
    },

    update: {
        type: Date,
        default: Date.now
    },



}, {
    collection: "users"
});

//configure options for User Model

let options = ({
    missingPasswordError: 'Wrong/Missing Password'
});

UserSchema.plugin(passportLocalMongoose, options);

module.exports.Model = Model('User', UserSchema);