const express = require('express');
const users = require('./userDb');

const router = express.Router();

router.post('/', validateUser(), (req, res, next) => {
  users.insert(req.body)
  .then(user => {
    return res.status(204).json(user)
  })
  .catch(error => {
    next(error)
  })
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


function validateUser() {
  return (req, res, next) => {
    if(!req.body) {
     return res.status(400).json({
        message: "missing user data"
      })
    } else if (!req.body.name) {
     return res.status(400).json({
        message: "missing user name field"
      })
    } else {
      next()
    }
  }
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
