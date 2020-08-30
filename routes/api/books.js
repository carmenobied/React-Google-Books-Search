const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const { query } = require("express");

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = process.env.GOOGLE_APIKEY 

// Search for books via Google Books API
router.router("/api/books/search/")
  .get(BASEURL + query.title + APIKEY);

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
