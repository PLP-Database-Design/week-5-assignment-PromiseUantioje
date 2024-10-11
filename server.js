// importing the necessary dependencies
const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require ('dotenv')
const cors = require('cors'); 

// Import the cors module

app.use(express.json());
app.use(cors());
dotenv.config();

// connect to Database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // port: 3300
  })

  db.connect((err) => {
    if (err) return console.log("Error connecting to the mySQL Db");

    console.log('Connected to the MySQL database');
  });


// Question 1
// Patients name with Id, First Name, last name, date of birth 
app.get('/', function(req, res){
  let sql = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients";
  db.query(sql, function(err, results){
      if(err) throw err;
      res.send(results);
  })
})

// Question 2
// All providers with their first name, last name and Specialty
app.get('/', function(req, res){
  let sql = "SELECT first_name, last_name, provider_specialty FROM providers";
  db.query(sql, function(err, results){
      if(err) throw err;
      res.send(results);
  })
})

// Question 3
//All patients by their first name
app.get('/', function(req, res){
  let sql = "SELECT first_name FROM patients";
  db.query(sql, function(err, results){
      if(err) throw err;
      res.send(results);
  })
})

// Question 4
//All providers by their specialty
app.get('/', function(req, res){
  let sql = "SELECT provider_specialty FROM providers";
  db.query(sql, function(err, results){
      if(err) throw err;
      res.send(results);
  })
})


  const PORT = 3000
  app.listen(PORT, () => {
    console.log(`server is runnig on http://localhost:${PORT}`)
  })


// decalre the port and listen to the server
// const PORT = 3000;
// function onserverstart(){console.log ('server is running')}
// app.listen(PORT,onserverstart)


