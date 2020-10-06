const express = require('express');
const users = require('./userDb');

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res, next) => {
  users.get()
  .then(user => {
    return res.status(200).json(user)
  })
  .catch(error => {
    console.log(error)
    next(error)
  })
});

router.get('/:id', validateUserId(), (req, res) => {
  return res.status(200).json(req.user);
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  return (req, res, next) => {
    users.getById(req.params.id)
    .then(user => {
        if(user) {
            req.user = user
            next()
        } else {
            return res.status(404).json({
                errorMessage: "Some helpful error message"
            })
        }
    })
    .catch(error => {
        console.log(error)
        return res.status(400).json({
            message: 'invalid user id'
        })
    })
}
}


function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
