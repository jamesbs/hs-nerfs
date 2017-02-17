import * as Hapi from 'hapi'
import { db } from './db'
import { resolve } from 'path'

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: resolve(__dirname, 'dist')
            }
        }
    }
})

console.log('heroku port is (', process.env.PORT, ')')

server.connection({
  port: process.env.PORT || 8998
})

server.register(require('inert'), function(err) {
  if (err) {
    console.log(err)
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/api/update/{id}',
    handler: function(request: Hapi.Request, reply) {
      const item = db[request.params['id']]

      return reply(item)
    },
    config: {
      state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
      }
    },
  })

  server.route({
    method: 'GET',
    path: '/',
    config: {
      state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
      }
    },
    handler: function(request, reply: Hapi.IReply) {
      const r = reply.file('index.html')

      return r
    }
  })

  server.route({
    method: 'GET',
    path: '/{filename}',
    config: {
      state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
      }
    },
    handler: {
        file: function (request) {
            return request.params['filename'];
        }
    }
  })

  server.start(function(err) {
    if (err) {
      console.log(err)
      throw err;
    }

    console.log('server running at:', server.info.uri)
  })
})
