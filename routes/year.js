var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    const date = new Date();
    res.json({ now: date });
   });
  
  module.exports = router;