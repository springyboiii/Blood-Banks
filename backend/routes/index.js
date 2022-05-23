var express = require('express');
const cors = require('cors');
var router = express.Router();


const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Sandu@123',
  database: 'bloodbanks'
});

router.use(cors());
router.use(express.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/donour/add',(req,res)=>{

  const name = req.body.name;
  const blood = req.body.b_type;
  const phone = req.body.contact_no;
  const address = req.body.address;

  const sqlInsert = "INSERT INTO donor (name,b_type,contact_no,address) VALUES (?,?,?,?);"
  db.query(sqlInsert,[name, blood, phone, address],(err,result)=>{
    if (err) {
      console.log(err);
      return;
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
