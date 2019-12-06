const db = require("../connector.js"); //connecting to the database

// GET: Get all the books -> /books
const getBooks = (req, res, next) => {
    db.any('SELECT * FROM books')
    .then((books) => {
        res.status(200).json({
            status: 'Success',
            message: 'Retrieving all the books',
            books: books
        })
    })
    .catch((err) => {
        console.log("Error retrieving all the books: ", err)
        return next(err);
    })
};


// GET: Get books by Autor -> /books/autor/:id
const getAllBooksByAutor = (req, res, next) => {
    db.any(
      'SELECT cover, title, serie FROM book JOIN autor ON autor.id = autor_id WHERE autor.id={id}',
      {
          id: Number(req.params.id)
      })
      .then(books => {
        res.status(200).json({
          status: "success",
          message: "Got all Users.",
          books: books
        });
      })
      .catch(err => {
        res.status(400).json({
          status: "error",
          message: " 🤣 Na nana na nah. You didn't get your books!😝 ",
          err
        });
        next();
      });
  };

// GET: Get books by User -> /books/user/:id
const getBooksByUser = (req, res, next) => {
    db.any('SELECT cover, title, name AS user FROM bookshelf_user ' + 
    'JOIN book ON book.id = bookshelf_user.book_id ' + 
    'JOIN users ON bookshelf_user.user_id = users.id ' +
    'WHERE book.i=${id}', 
    {
        id: Number(req.params.id)
    })
    .then(books => {
      res.status(200)
          .json({
            status: 'success',
            message: 'got all the books from this user',
            books: books
          })
    })
    .catch(err=>{
      res.status(400)
          .json({
            status: 'Failure',
            message: 'Did not get any books'
          })
          next();
    })
};


// POST: Adding new book -> /books
const addingBook = (req, res, next) => {
    db.none(
        'INSERT INTO book(cover, title, serie, synopsis, published_date, pages, autor_id) ' + 
        'VALUES(${cover}, ${title}, ${serie}, ${synopsis}, ${published_date}, ${pages}, ${autor_id},)', 
        {
            cover: req.body.cover,
            title: req.body.title,
            serie: req.body.serie,
            synopsis: req.body.synopsis,
            published_date: req.body.published_date,
            pages: req.body.pages,
            autor_id: Number(req.params.autor_id),
        })
        .then(() => {
            res.status(200).json({
            status: 'Success',
            message: "Book Added"
            });
        })
        .catch(err => {
            console.log("Error adding book: ", err)
            return next(err);
    })
};

module.exports = { getBooks, getAllBooksByAutor, getBooksByUser, addingBook }
      