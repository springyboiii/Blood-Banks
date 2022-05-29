var express = require('express');
const cors = require('cors');
var router = express.Router();


const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Sandu@123',
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

router.get('/viewDonours', (req,res)=>{
  db.query("SELECT * FROM donor;", (err, result) =>{
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.get('/viewDonourID/:id', (req,res)=>{
  const id = req.params.id;
  db.query("SELECT * FROM donor WHERE ID=?", id, (err, result) =>{
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.put('/donour/edit/:id', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  const email = req.body.email;
  const id = req.params.id;
  db.query(
    "UPDATE donor SET name = ?, contact_no=?, address=?, email=? WHERE id = ? ",
    [name, phone, address, email, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.delete('/donour/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query(
    "DELETE FROM donor WHERE id=?", id,(err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/viewCamp", (req, res) => {
  db.query("SELECT * FROM camp;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;