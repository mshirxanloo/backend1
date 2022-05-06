const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET users by IDs. */
router.post("/", (req, res) => {
    if (!req.body.id) {
      res.json("No ID found in reqest body.")
    } else {
      axios.get(`https://jsonplaceholder.typicode.com/users/${req.body.id}`)
        .then(function(response) {
          res.json(response.data)
        }).catch(function(error) {
          res.json("Error occured!")
        })
    }
  });


module.exports = router;


