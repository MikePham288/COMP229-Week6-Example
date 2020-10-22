let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let mysort = { name: 1 };

let jwt = require("jsonwebtoken");

// create a reference to the model
let Book = require("../models/book");

module.exports.displayBookList = (req, res, next) => {
  Book.Model.find((err, bookList) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      //console.log(BookList);

      res.render("index", {
        title: "Books",
        BookList: bookList,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  }).sort({ name: 1 });
};

module.exports.displayAddPage = (req, res, next) => {
  res.render("index", {
    title: "Add Book",
  });
};

module.exports.processAddPage = (req, res, next) => {
  let newBook = Book.Model({
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    description: req.body.description,
    price: req.body.price,
  });

  Book.Model.create(newBook, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the book list
      res.redirect("/book-list");
    }
  });
};
module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  Book.Model.findById(id, (err, bookToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("index", {
        title: "Edit Book",
        book: bookToEdit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};
module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedBook = Book.Model({
    _id: id,
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    description: req.body.description,
    price: req.body.price,
  });

  Book.Model.updateOne(
    {
      _id: id,
    },
    updatedBook,
    (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the book list
        res.redirect("/book-list");
      }
    }
  );
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  Book.Model.remove(
    {
      _id: id,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        //refresh the book list
        res.redirect("/book-list");
      }
    }
  );
};
