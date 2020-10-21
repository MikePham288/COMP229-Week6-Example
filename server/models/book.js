let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Model = mongoose.model;

//create a model class
let booksModel=new Schema({
    name: String,
    author:String,
    published: String,
    description:String,
    price: Number


},
{
    collection:"books"  
});

module.exports.Model=Model('Book', booksModel);
