'use strict'
const express = require('express')
const employe = require('../controllers/employeController')
const router = express.Router()
const bodyValidation = require('../validations/employeValidation.js')
const validate = require('../middlewares/validate.js')
const authorization = require('../middlewares/verify.js')

router.get(`/`, authorization, employe.index)
router.post(`/`, authorization, bodyValidation, validate, employe.store)
router.get(`/:id`, authorization, employe.getById)
router.patch(`/:id`, authorization, bodyValidation, validate, employe.update)
router.delete(`/:id`, authorization, employe.destroy)

module.exports = router