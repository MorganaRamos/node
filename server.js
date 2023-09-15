const http = require('http') //https://nodejs.org/dist/latest-v18.x/docs/api/synopsis.html

const PORT = 5000
const HOST = 'localhost'

const server = http.createServer((req, res) => {
   res.end('Oi, estou funcionando com nodemon')

  });


server.listen(PORT, HOST, () =>{
    console.log(`Server rodando: http://${HOST}:${PORT}/`);
  })