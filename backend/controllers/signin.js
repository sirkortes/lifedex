const jwt = require('jsonwebtoken')

const redis = require('redis')
// const redisClient = redis.createClient(process.env.REDIS_URI)

const redisClient = redis.createClient({
  host: '127.0.0.1',
  port: 6379
})

redisClient.on('error', (err) => {
  console.log('Error ' + err)
})

const handleSignin = (db, bcrypt, req, res) => {
  const { email, password } = req.body

  console.log('\n\nhandleSignIn', { email, password })
  if (!email || !password) {
    // return res.status(400).json('incorrect form submission');
    return Promise.reject('incorrect form submission')
  }

  return db
    .select('email', 'hash')
    .from('login')
    .where('email', '=', email)
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash)
      if (isValid) {
        return db
          .select('*')
          .from('users')
          .where('email', '=', email)
          .then((user) => user[0])
          .catch((err) => Promise.reject('unable to get user'))
        // .then(user => {
        //   res.json(user[0])
        // })
        // .catch(err => res.status(400).json('unable to get user'))
      } else {
        Promise.reject('wrong credentials')
        // res.status(400).json('wrong credentials')
      }
    })
    .catch((err) => Promise.reject('wrong credentials'))
  // .catch(err => res.status(400).json('wrong credentials'))
}

const getAuthTokenId = (req, res) => {
  const { authorization } = req.headers

  console.log('\n\ngetAuthTokenId()', authorization)

  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(400).json('Unauthorized')
    }

    return res.json({ id: reply })
  })
}

const signToken = (email) => {
  const jwtPayload = { email }
  // console.log('\n\ncreating jwt - secret[%s] payload:', process.env.JWT_SECRET, jwtPayload)
  return jwt.sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '2 days' })
}

const setToken = (key, value) => {
  return Promise.resolve(redisClient.set(key, value))
}

const createSessions = (user) => {
  // JWT token, return user data
  const { email, id } = user
  const token = signToken(email)
  return setToken(token, id)
    .then(() => {
      // console.log('\n\nsucess setToken', { id, token })
      return { success: 'true', userId: id, token }
    })
    .catch((err) => console.log('err createSessions: ', err))
  // return { success: 'true', userId: id, token }
}

const signinAuthentication = (db, bcrypt) => (req, res) => {
  const { authorization } = req.headers

  console.log('\n\nsigninAuthentication authorization: ', authorization)
  return authorization
    ? getAuthTokenId(req, res)
    : handleSignin(db, bcrypt, req, res)
        .then((data) => (data.id && data.email ? createSessions(data) : Promise.reject(data)))
        .then((session) => {
          // console.log('\n\nsigninAuthentication success', session)
          res.json(session)
        })
        .catch((err) => {
          // console.log('\n\nsigninAuthentication error', err)
          res.status(400).json(err)
        })
}

module.exports = {
  handleSignin: handleSignin,
  signinAuthentication: signinAuthentication,
  redisClient: redisClient
}
