
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const productsRouter = require('./server/routers/productsRouter');
const indexRouter = require('./server/routers/indexRouter');
const port = 3300;

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use(morgan('dev'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log("hahahaha");
  req.viewModel = {
    title: 'TLGS Online Shop'
  };
  next();
});





app.use('/', indexRouter);
app.use('/api/products', productsRouter);


app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});
