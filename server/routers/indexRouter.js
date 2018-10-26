
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./data-2.json', { products: [] });

router.get('/', function getIndexPage(req, res) {
  let viewModel = req.viewModel;
  console.log("hahah");
  
  viewModel.products = store.get('products');
  res.render('index.pug', viewModel);
});

router.get('/', function getIndexPage(req, res) {
  let viewModel = req.viewModel;
  console.log("hahah");
  
  viewModel.products = store.get('products');
  res.render('index.pug', viewModel);
});


router.post('/', function submitProducts(req, res) {
  
  let products = store.get('products');
  products.push({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    quantity: req.body.quantity,
    
  });
  store.set('products', products);

  
  res.redirect('/');
});

module.exports = router;
