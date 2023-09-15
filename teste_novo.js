// a função require importa modulos (funções ou atributos) que podem ser utilizadas no codigo
var os = require('os') //documentação: https://nodejs.org/api/os.html
var fs = require('fs') /

console.log('------ modulo: OS -------\n');
console.log('SO:', os.platform());
console.log('Arquitetura:', os.arch());
console.log('Hostname:', os.hostname());
console.log('------ modulo: OS -------\n');


console.log('------ modulo: FS -------\n');
fs.rename('teste.js', 'teste_novo.js', (err) =>{
    if(err){
        console.log(err);
    }
})