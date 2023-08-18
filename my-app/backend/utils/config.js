require('dotenv').config()

const PORT = process.env.PORT

const SECRET = process.env.SECRET

// console.log('@config.js: NODE_ENV', process.env.NODE_ENV)
// console.log('@config.js: MONGODB_URI', process.env.MONGODB_URI)
// console.log('@config.js: DEV_MONGODB_URI', process.env.DEV_MONGODB_URI)

const MONGODB_URI =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : process.env.DEV_MONGODB_URI

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET,
  NODE_ENV,
}
