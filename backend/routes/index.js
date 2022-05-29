var express = require("express");
const cors = require("cors");
var router = express.Router();

const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bloodbanks",
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
      
    }
  );
});
router.post("/updateBloodbank", (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const description = req.body.description;
  const location = req.body.location;
  const contact = req.body.contact;
  console.log("posted");
  const sqlUpdate ="UPDATE bank SET name=?,contact_no=?,address=?,email=?,about=? WHERE username=?;";
  db.query(
    sqlUpdate,
    [name, contact, location, email, description, username],
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

router.post("/updateInventory/:bank_ID", (req, res) => {
  const a_pos = req.body.a_pos;
  const a_neg = req.body.a_neg;
  const b_pos = req.body.b_pos;
  const b_neg = req.body.b_neg;
  const ab_pos = req.body.ab_pos;
  const ab_neg = req.body.ab_neg;
  const o_pos = req.body.o_pos;
  const o_neg = req.body.o_neg;

  const bank_ID = req.params.bank_ID;

  db.query(
    "UPDATE inventory SET a_pos =?, a_neg =?, b_pos=?, b_neg=?, ab_pos=?, ab_neg=?,o_pos=?, o_neg=? WHERE bank_ID = ?",
    [a_pos, a_neg, b_pos, b_neg, ab_pos, ab_neg, o_pos, o_neg, bank_ID],
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

router.get("/getInventory/:bank_ID", (req, res) => {
  const bank_ID = req.params.bank_ID;
  db.query(
    "SELECT * FROM inventory WHERE bank_ID=?",
    bank_ID,
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