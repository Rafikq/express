const express = require('express');
const router = express.Router();

/* GET home page.*/
router.get('/', (req, res) => {
  res.render('quiz', { title: 'Quiz' }); // views/index.pug
});

module.exports = router;
