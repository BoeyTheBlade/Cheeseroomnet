var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('listen', { title: 'The Cheese Room Podcast' });
});

module.exports = router;
