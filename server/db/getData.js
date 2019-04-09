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

const getData = {
  // Reference functions down below
  getUrine,
  getGtube,
  getOstomy
}
module.exports = getData

function getUrine (user_id) {
  return new Promise((resolve, reject) => {
    db.urine.findAll({
      where: {
        user_id: user_id
      },
      order: [['id', 'DESC']]
    })
      .then(res => {
        resolve(res)
      })
      .catch(er => {
        reject(er)
      })
  })
}

function getGtube (user_id) {
  return new Promise((resolve, reject) => {
    db.gtube.findAll({
      where: {
        user_id: user_id
      },
      order: [['id', 'DESC']]
    })
      .then(res => {
        resolve(res)
      })
      .catch(er => {
        reject(er)
      })
  })
}

function getOstomy (user_id) {
  return new Promise((resolve, reject) => {
    db.ostomy.findAll({
      where: {
        user_id: user_id
      },
      order: [['id', 'DESC']]
    })
      .then(res => {
        resolve(res)
      })
      .catch(er => {
        reject(er)
      })
  })
}
