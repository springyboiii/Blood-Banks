var express = require('express');
var router = express.Router();


const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Sandu@123',
  database: 'bloodbanks'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("INSERT INTO bloodbanks_bloodbanks (title,description,completed) VALUES ('Colombo', 'Available', 1);", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
