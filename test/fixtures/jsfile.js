import * as http from 'node:http'

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((_, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello World')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
