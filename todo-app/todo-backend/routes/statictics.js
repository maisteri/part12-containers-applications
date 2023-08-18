const express = require('express')
const router = express.Router()
const { getAsync } = require('../redis')

router.get('/', async (_, res) => {
  let added_todos = await getAsync('added_todos')
  if (!added_todos) added_todos = 0
  res.status(200).json({ added_todos: Number(added_todos) })
})

module.exports = router
