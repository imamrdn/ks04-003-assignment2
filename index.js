const express = require('express')
const {config} = require('dotenv').config()
const ControllerUser = require('./Controller/User')
const {verifyToken} = require('./midleware/verifyToken')

const app = express()
app.use(express.json())

app.post('/register', ControllerUser.register)
app.get('/data-user', verifyToken, ControllerUser.dataUser)

app.listen(3000, () => {
  console.log('listening on localhost port 3000')
})