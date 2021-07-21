require('dotenv').config()
const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const morgan = require('morgan')
const knex = require('knex')

const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')
const auth = require('./controllers/authorization')

const db = knex({
  // connect to your own database here
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
  }
})

const port = process.env.PORT || 5000
const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  console.log('db', db.tables)
  res.send(db.users)
})

// app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/signin', signin.signinAuthentication(db, bcrypt))

app.post('/register', (req, res) => {
  register.handleRegister(req, res, db, bcrypt)
})

app.get('/profile/:id', auth.requireAuth, (req, res) => {
  profile.handleProfileGet(req, res, db)
})

app.post('/profile/:id', auth.requireAuth, (req, res) => {
  console.log('\n\nPOST profile req.body:', req.body)
  profile.handleProfileUpdate(req, res, db)
})

app.put('/image', auth.requireAuth, (req, res) => {
  image.handleImage(req, res, db)
})

app.post('/imageurl', auth.requireAuth, (req, res) => {
  console.log('\n\n/imageurl req')
  image.handleApiCall(req, res)
})

app.listen(port, () => {
  console.log('app is running on port', port)
})
