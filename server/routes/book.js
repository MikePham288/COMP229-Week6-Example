let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

let passport = require("passport");

let bookController = require("../controllers/book");

//helper function for guard purposes
function requireAuth(req, res, next) {
  //check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* Get Route for the Book List page - READ Operation */
router.get("/", bookController.displayBookList);

/* Get Route for displaying Add page - CREATE Operation */
router.get("/add", requireAuth, bookController.displayAddPage);

/* Post Route for processing Add page - CREATE Operation */
router.post("/add", requireAuth, bookController.processAddPage);

/* Get Route for displaying Edit page - UPDATE Operation */
router.get("/edit/:id", requireAuth, bookController.displayEditPage);

/* Post Route for processing Edit page - UPDATE Operation */
router.post("/edit/:id", requireAuth, bookController.processEditPage);

/* Get to perform Deletion - DELETE Operation */
router.get("/delete/:id", requireAuth, bookController.performDelete);

module.exports = router;
