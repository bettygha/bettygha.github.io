const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/', (req, res, next) => {
  console.log('Api is called ......');
  next();
});

router.get('/', (req, res) => {
  res.send( '<form action="/product" method="POST"> <input name="title"> <button type="submit">Submit</button> </form>');
});

 router.use('/product', (req, res,next) => {
    console.log('Api is in here ......');
  //console.log(req.body);
  res.redirect('/add-product');
  next();
}); 

router.post('/product', (req, res,next) => {
    console.log(req.body);
    res.redirect('/add-product');
});

module.exports = router;
