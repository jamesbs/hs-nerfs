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


server.listen(port, () => {
  console.log('running server on port', port)
})



// const server = new Hapi.Server()

// server.connection({
//   port: 8998
// })

// server.register(require('inert'), function(err) {
//   if (err) {
//     console.log(err)
//     throw err;
//   }

//   server.route({
//     method: 'GET',
//     path: '/api/update/{id}',
//     handler: function(request: Hapi.Request, reply) {
//       const item = db[request.params['id']]

//       return reply(item)
//     },
//     config: {
//       state: {
//         parse: false, // parse and store in request.state
//         failAction: 'ignore' // may also be 'ignore' or 'log'
//       }
//     },
//   })

//   server.route({
//     method: 'GET',
//     path: '/',
//     config: {
//       state: {
//         parse: false, // parse and store in request.state
//         failAction: 'ignore' // may also be 'ignore' or 'log'
//       }
//     },
//     handler: function(request, reply: Hapi.IReply) {
//       const r = reply.file(resolve(__dirname, 'dist','index.html'))

//       return r
//     }
//   })

//   server.start(function(err) {
//     if (err) {
//       console.log(err)
//       throw err;
//     }

//     console.log('server running at:', server.info.uri)
//   })
// })
