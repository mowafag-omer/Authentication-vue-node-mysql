const express = require('express')
const router = express.Router()
const db = require('../database/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/sign-up', (req, res) => {
  const {name, email} = req.body 
  const pass = bcrypt.hashSync(req.body.pass, 10)
  const sql = `INSERT INTO users (name, email, password) VALUES ('${name}','${email}','${pass}')`
  db.query(sql, (err) => {
    if (err) throw err
    res.send('successfully registered')
  })
})
.post('/sign-in', (req, res) => {
  const {email, pass} = req.body
  
  db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, results) => {
    if (err) throw err
    if(results[0] && bcrypt.compareSync(pass, results[0].password)){
      let token = jwt.sign({userId: results[0].id}, 'secretwash')
      res.status(201).send({auth: true, token: token}) 
    } else {
      res.status(400).send("Sorry, we don't know this user")
    }  
  })
})
.post('/createDB', (req, res) => {
  db.query(`CREATE DATABASE ${req.body.dbName}`, (err, result) => {
    if(err) throw err
    console.log(result)
    res.send('Database created...')
  })
})
// .put('/users/:email', (req, res) => {
//   console.log(Object.keys(req.body)[0]);
//   // var sql = `UPDATE users SET ${req.body} = 'Canyon 123' WHERE address = 'Valley 345'`;
//   db.query(sql, (err, results) => {
//     if (err) throw err
//     res.send(results)
//   })
// })
.delete('/users/:email', (req, res) => {
  db.query(`DELETE FROM users WHERE email = '${req.params.email}'`, (err, results) => {
    if (err) throw err
    res.send('User deleted...')
  })
})
.get('/all', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err
    res.send(results)
  })
})
.get('/names', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err
    const names = results.map(rslt => rslt.name)
    res.send(names)
  })
})
.get('/emails', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err
    const emails = results.map(rslt => rslt.email)
    res.send(emails)
  })
})

module.exports = router