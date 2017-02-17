import * as Hapi from 'hapi'
import { db } from './db'
import { resolve } from 'path'

const express = require('express')
const fallback = require('express-history-api-fallback')

const server = express()

const root = resolve(__dirname, 'dist')
const port = process.env.PORT || 8998

server.get('/api/update/:id', (req, res) => {
  const item = db[req.params.id]
  return res.send(item)
})

server.use(express.static(root))
server.use(fallback('index.html', { root }))
