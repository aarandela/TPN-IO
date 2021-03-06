const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const getData = require('../db/getData')
const postData = require('../db/addData')

module.exports = router

// POSTS
router.post('/api/add/URINE', (req, res) => {
  let input = req.body
  postData.addUrine(input.value, input.comments, input.date, input.time, input.user_id)
    .then(data => {
      res.send({ success: true, data: data })
    })
    .catch(er => {
      res.send({ success: false, data: er })
    })
})

router.post('/api/add/GTUBE', (req, res) => {
  let input = req.body
  postData.addGtube(input.value, input.comments, input.date, input.time, input.user_id)
    .then(data => {
      res.send({ success: true, data: data })
    })
    .catch(er => {
      res.send({ success: false, data: er })
    })
})
router.post('/api/add/OSTOMY', (req, res) => {
  let input = req.body
  postData.addOstomy(input.value, input.comments, input.date, input.time, input.user_id, input.change)
    .then(data => {
      res.send({ success: true, data: data })
    })
    .catch(er => {
      res.send({ success: false, data: er })
    })
})

router.post('/api/add/ORAL', (req, res) => {
  let input = req.body
  postData.addOral(input.value, input.comments, input.date, input.time, input.user_id)
    .then(data => {
      res.send({ success: true, data: data })
    })
    .catch(er => {
      res.send({ success: false, data: er })
    })
})

// ===================== GET ================================
router.get('/api/URINE/:user_id', (req, res) => {
  let user_id = req.params.user_id
  if (user_id) {
    getData
      .getUrine(user_id)
      .then(data => {
        console.log('This should be the data from /api/urine', data)
        res.send({ urine: data })
      })
      .catch(er => {
        console.log('This is the er', er)
      })
  }
})

router.get('/api/GTUBE/:user_id', (req, res) => {
  let user_id = req.params.user_id
  if (user_id) {
    getData
      .getGtube(user_id)
      .then(data => {
        console.log('This should be the data from /api/gtube', data)
        res.send({ gtube: data })
      })
      .catch(er => {
        console.log('This is the er', er)
      })
  }
})

router.get('/api/OSTOMY/:user_id', (req, res) => {
  let user_id = req.params.user_id
  if (user_id) {
    getData
      .getOstomy(user_id)
      .then(data => {
        console.log('This should be the data from /api/ostomy', data)
        res.send({ ostomy: data })
      })
      .catch(er => {
        console.log('This is the er', er)
      })
  }
})

router.get('/api/ORAL/:user_id', (req, res) => {
  let user_id = req.params.user_id
  if (user_id) {
    getData
      .getOral(user_id)
      .then(data => {
        console.log('This should be the data from /api/oral', data)
        res.send({ oral: data })
      })
      .catch(er => {
        console.log('This is the er', er)
      })
  }
})
