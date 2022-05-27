var express = require('express');
const cors = require('cors');
var router = express.Router();


const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'arvinth',
  database: 'BloodBank'
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
  const email = req.body.email;

  const sqlInsert = "INSERT INTO donor (name,b_type,contact_no,address,email) VALUES (?,?,?,?,?);"
  db.query(sqlInsert,[name, blood, phone, address,email],(err,result)=>{
    if (err) {
      console.log(err);
      return;
    } else {
      res.send(result);
    }
  });
});
router.post('/admin/dashboard/addBd',(req,res)=>{

  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const description = req.body.description;
  const location = req.body.location;
  const contact = req.body.contact;

  const sqlInsert = "INSERT INTO bank (firstname,lastname,username,password,contact_no,address,email,about) VALUES (?,?,?,?,?,?,?,?);"
  db.query(sqlInsert,[name,name,username,password,contact,location,email,description],(err,result)=>{
    if (err) {
      console.log(err);
      return;
    } else {
      res.send(result);
    }
  });
});

router.post('/addCamp',(req,res)=>{
  
  const name = req.body.camp_name;
  const description = req.body.description;
  const date = req.body.date;
  const time = req.body.time;
  const org = req.body.org_name;
  const location = req.body.location;
  const bank_ID = req.body.bank_ID;
  const sqlInsert = "INSERT INTO camp (camp_name,org_name,description,location,bank_ID, date, time) VALUES (?,?,?,?,?,?,?);"
  db.query(sqlInsert,[name, org, description, location,bank_ID,date,time],(err,result)=>{
    if (err) {
      console.log(err);
      return;
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
