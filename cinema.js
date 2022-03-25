var cinema = "CineHouse";
let catalogo = require('./database/catalogo.json');

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
        return catalogo.push({codigo, titulo, duracao, atores, anoDeLancamento, emCartaz})
}

function buscarFilme(codigo){
    for(let i=0; i<catalogo.length; i++){
        if(codigo == catalogo[i].codigo){
            return catalogo[i];
        }
    }
}

function alterarStatusEmCartaz(codigo){
    for(let i=0; i<catalogo.length; i++){
        if(codigo == catalogo[i].codigo){
            return catalogo[i].emCartaz = !catalogo[i].emCartaz;
        }
    }
}
console.log(alterarStatusEmCartaz(5678));
console.log(catalogo);