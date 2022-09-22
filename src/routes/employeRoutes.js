'use strict'
const express = require('express')
const employe = require('../controllers/employeController')
const router = express.Router()
const bodyValidation = require('../validations/employeValidation.js')
const validate = require('../middlewares/validate.js')

router.get(`/`, employe.index)
router.post(`/`, bodyValidation, validate, employe.store)
router.get(`/:id`, employe.getById)
router.patch(`/:id`, bodyValidation, validate, employe.update)
router.delete(`/:id`, employe.destroy)

module.exports = router