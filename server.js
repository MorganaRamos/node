// const http = require('http') 
//https://nodejs.org/dist/latest-v18.x/docs/api/synopsis.html

import { get, createServer } from 'http'

const PORT = 5000
const HOST = 'localhost'

const server = createServer((req, res) => {
   res.end('Oi, estou funcionando com nodemon')

  });

get('/', (req, res) =>{
    return 'Teste'
})


server.listen(PORT, HOST, () =>{
    console.log(`Server rodando: http://${HOST}:${PORT}/`);
  })