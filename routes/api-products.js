var express = require('express');
var router = express.Router();
function paginate(array, page_size, page_number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}
const products = require('../lists/products.json')
const addproducts = require('../lists/addproducts.json')
router.get('/', function(req, res, next) {
  var page = req.query.page
  var limit = req.query.limit
  output = paginate(products, limit, page)
  res.send(output)
});
router.get('/variations', function(req, res, next) {
  res.send(addproducts)
});

router.get("/:id", function(req,res, next) {
  var product = products.find(element => element._id == req.params.id)
  var randomProducts = []
  var arr =[]
  while (randomProducts.length < 3) {
    var r = Math.floor(Math.random() * products.length) + 1
    if (arr.indexOf(r)) {
      arr.push(r)
      randomProducts.push(products[r])
    }
  }
  if (product) {
    return res.send(product)
  } else {
    res.status(404).send("not found")
  }
})

module.exports = router;
