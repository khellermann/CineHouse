var cinema = "CineHouse";
let catalogo = require('./database/catalogo.json');

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
        return catalogo.push({codigo, titulo, duracao, atores, anoDeLancamento, emCartaz})
}

// Realizando teste adicionarFilme
adicionarFilme(7890, "Mar Vermelho", 1, ["Teste da Silva", "Cicrano 2"], 2019, false);
console.log(catalogo);

function buscarFilme(codigo){
    for(let i=0; i<catalogo.length; i++){
        if(codigo == catalogo[i].codigo){
            return catalogo[i];
        }else{
            return "Filme não encontrado";
        }
    }
}

// Realizando teste buscarFilme
console.log("Filme buscado: ", buscarFilme(1234));

/*
function alterarStatusEmCartaz(codigo){
    for(let i=0; i<catalogo.length; i++){
        if(codigo == catalogo[i].codigo){
            return catalogo[i].emCartaz = !catalogo[i].emCartaz;
        }
    }
}
*/

//console.log("Alterando Cartaz: ", alterarStatusEmCartaz(1234));

function listarTodosOsFilmes(){
    catalogo.forEach(function(cat){
        console.log(cat.titulo);
    });
}

listarTodosOsFilmes();

function listarFilmesEmCartaz(){
    console.log("Filmes em cartaz")
    catalogo.filter(function(cat){
        if(cat.emCartaz){
            console.log(cat.titulo);
        }
    });
}
listarFilmesEmCartaz();

function alterarStatusEmCartaz(codigo){
    let filmeStatus = buscarFilme(codigo);
    filmeStatus.emCartaz = !filmeStatus.emCartaz;
    return filmeStatus;
}

console.log(alterarStatusEmCartaz(1234));