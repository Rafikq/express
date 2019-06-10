const express = require('express');
const router = express.Router();

/* GET home page.*/
router.get('/', (req, res) => {
  res.render('admin', { title: 'Admin' }); // views/index.pug
});

module.exports = router;