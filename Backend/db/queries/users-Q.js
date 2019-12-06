const db = require("../connector.js"); //connecting to the database

// GET: Get single user -> /user/:id: 
const getSingleUser = (req, res, next) => {
    let userId = parseInt(req.params.id);
    db.one(
        'SELECT * FROM users WHERE id=$1', [userId])
    .then(users => {
        res.status(200).json({
            status: 'Success',
            message: 'Got a single user',
            users: users
      });
    }).catch(err => {
        console.log("Error retrieving all users: ", err)
        return next(err);
    })
};

// PATCH: Update single user -> /user/:id: 
const updateUser = (req, res, next) => {
    db.none(
        'UPDATE users SET name=${name}, email=${email}, password_digest=${password_digest}, picture=${picture} WHERE id=${id}', 
        {
            id: Number(req.params.id),
            name: req.body.first_name,
            email: req.body.email,
            password: req.body.password,
            picture: req.body.picture
        })
        .then(() => {
            res.status(200).json({
            status: 'Success',
            message: "User Updated"
            });
        })
        .catch(err => {
            console.log("Error updating user: ", err)
            return next(err);
    })
};

// DELETE: Delete single user -> /user/:id: 
const deleteUser = (req, res, next) => {
    let userId = parseInt(req.params.id);
    db.result('DELETE FROM users WHERE id=$1', userId)
    .then((users) => {
        res.status(200).json({
            status: 'Success',
            message: 'User Deleted'
        });
    }).catch(err => {
        console.log("Error deleting user: ", err)
        return next(err);
    })
  };

  module.exports = { getSingleUser, updateUser, deleteUser }