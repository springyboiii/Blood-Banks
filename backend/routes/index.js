var express = require("express");
const cors = require("cors");
var router = express.Router();

const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Watson 123",
  database: "BloodBank",
});

router.use(cors());
router.use(express.json());

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/donour/add", (req, res) => {
  const name = req.body.name;
  const blood = req.body.b_type;
  const phone = req.body.contact_no;
  const address = req.body.address;
  const email = req.body.email;

  const sqlInsert =
    "INSERT INTO donor (name,b_type,contact_no,address,email) VALUES (?,?,?,?,?);";
  db.query(sqlInsert, [name, blood, phone, address, email], (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.send(result);
    }
  });
});

router.get('/editProfile', (req, res) => {
  const sqlSelect = "Select * from bank ;";
  
  db.query(
    sqlSelect,

    (err, result) => {
      res.send(result);
      
    }
  );
});
router.post("/editProfile", (req, res) => {
  
  const username = req.body.username;
  

  const sqlSelect =
    "select * from bank where username=?";
  db.query(
    sqlSelect,
    [ username],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.send(result);
      }
    }
  );
});
router.get("/dashboard", (req, res) => {
  const sqlSelect = "Select * from bank ;";
  db.query(
    sqlSelect,

    (err, result) => {
      res.send(result);
      console.log(result)
    }
  );
});
router.post("/admin/dashboard/addBd", (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const description = req.body.description;
  const location = req.body.location;
  const contact = req.body.contact;

  const sqlInsert =
    "INSERT INTO bank (name,username,password,contact_no,address,email,about) VALUES (?,?,?,?,?,?,?);";
  db.query(
    sqlInsert,
    [name, username, password, contact, location, email, description],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/signIn", (req, res) => {
  const username = req.body.userName;
  const password = req.body.password;
  const passQuery = "Select * from bank WHERE username = ? AND password=? ;";
  db.query(passQuery, [username, password], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong username/password" });
    }
  });
});

router.post("/addCamp", (req, res) => {
  const name = req.body.camp_name;
  const description = req.body.description;
  const date = req.body.date;
  const time = req.body.time;
  const org = req.body.org_name;
  const location = req.body.location;
  const bank_ID = req.body.bank_ID;
  const sqlInsert =
    "INSERT INTO camp (camp_name,org_name,description,location,bank_ID, date, time) VALUES (?,?,?,?,?,?,?);";
  db.query(
    sqlInsert,
    [name, org, description, location, bank_ID, date, time],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.send(result);
      }
    }
  );
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

module.exports = router;