const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const db = require('../models')

const addData = {
  // Reference functions down below
  addUrine,
  addGtube,
  addOstomy
}
module.exports = addData

function addUrine (value, comments, date, time, user_id) {
  return new Promise((resolve, reject) => {
    db.urine.create({
      user_id,
      value,
      comments,
      count: 1,
      date,
      time
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function addGtube (value, comments, date, time, user_id) {
  return new Promise((resolve, reject) => {
    db.urine.create({
      user_id,
      value,
      comments,
      date,
      time
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
function addOstomy (value, comments, date, time, user_id, changed) {
  return new Promise((resolve, reject) => {
    db.urine.create({
      user_id,
      value,
      comments,
      changed,
      date,
      time
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
