const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
      res.json(response.data)
    }).catch(function (error) {
      res.json("Error occured!")
    })
});

module.exports = router;



