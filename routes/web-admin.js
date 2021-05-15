var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Admin Panel' })
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Admin Products' });
});

router.get('/products-new', function(req, res, next) {
  res.render('products-new', { title: 'Add New Product'});
});

module.exports = router;
