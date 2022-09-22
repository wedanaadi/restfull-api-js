const express = require('express')
const app = express()
const env = require('dotenv')
env.config()
const port = process.env.PORT || 5000
const employeRoutes = require('./src/routes/employeRoutes.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/v1/employe',employeRoutes)

app.listen(port, ()=>console.log(`running on port ${port}`))