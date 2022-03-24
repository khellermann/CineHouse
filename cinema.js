var cinema = "CineHouse";
let catalogo = [{
    codigo: 1234,
    titulo: "Sexta-feira 13",
    duracao: 2,
    atores: ["Jhonny Deep", "Arnald 10"],
    anoDeLancamento: 1996,
    emCartaz: true
},
{
    codigo: 5678,
    titulo: "Perdidos na noite",
    duracao: 1.5,
    atores: ["Raul Seixas", "Cazuza"],
    anoDeLancamento: 2022,
    emCartaz: false
}
]

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