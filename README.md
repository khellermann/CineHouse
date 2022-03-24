
# MODULO 1: PARTE I: CineHouse
## No terminal verificar se o node foi instalado 👌
- [x] node -v 
## Criar pasta para projeto, chamada CineHouse 👌
- [x] mkdir CineHouse
## Criar arquivo chamado cinema.js, nele criar uma variável chamada cinema e esta deverá receber um valor como nome da loja 👌
- [x] touch cinema.js
- [x] Criar váriavel e atribuir valor 

# PARTE II: CineHouse
## Executar o comando npm init 👌
- [x] npm init
## Imprimir a variavel criada na parte I 👌
- [x] console.log(cinema);
## Executar o arquivo 👌
- [x] node cinema.js
## Adicionar a biblioteca nodemon como desenvolvimento 👌
- [x] npm install nodemon -D


# MODULO 2: Parte I - Variáveis para o CineHouse
## Criar uma variável do tipo array chamada catalogo. Esta será um array de objetos, onde cada objeto representará um filme. 👌
- [x] let catalogo = [];
## O filme deve conter os seguintes atributos: 👌
- a. código (numérico - identificador do filme)
- b. titulo (string)
- c. duração (numérico - em horas)
- d. atores (array de strings - nomes)
- e. anoDeLancamento (numérico)
- f. emCartaz (booleano)

## Deverão ser criados dois registros de filmes (de acordo com sua preferência). É importante apenas que um deles receba o valor de true na propriedade emCartaz e o outro o valor false.

```
let catalogo = [{
    codigo: 1234,
    titulo: "Sexta-feira 13",
    duração: 2,
    atores: ["Jhonny Deep", "Arnald 10"],
    anoDeLancamento: 1996,
    emCartaz: true
},
{
    codigo: 5678,
    titulo: "Perdidos na noite",
    duração: 1.5,
    atores: ["Raul Seixas", "Cazuza"],
    anoDeLancamento: 2022,
    emCartaz: false
}
]
```

# MODULO II: Parte II - Funções para o CineHouse
## Criando as funções:

### adicionarFilme
- [x] A função deve receber os parâmetros com as informações necessárias para
criar um objeto do tipo Filme.
Qual método dentre os que falamos hoje pode nos ajudar a adicionar
informações em uma array?
push(); ✔️

```
function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
        return catalogo.push({codigo, titulo, duracao, atores, anoDeLancamento, emCartaz})
}

adicionarFilme(4321, "Branca de Neve", 3, ["Paris Hilton", "Carla Perez"], 2019, true);
```

### buscarFilme
- [x] A função deve receber como parâmetro o número identificador do filme e fazer
busca no array de catálogo e ao fim retornar o objeto encontrado. Preferencialmente, retorne de forma mais amigável ao usuário final (pode utilizar console para não retornar apenas o objeto).
Qual método dentre os que falamos hoje pode nos ajudar a buscar uma
informação em uma array?
indexOf(); ✔️

```
function buscarFilme(codigo){
    for(let i=0; i<catalogo.length; i++){
        if(codigo == catalogo[i].codigo){
            return catalogo[i];
        }
    }
}
```


### alterarStatusEmCartaz
- [x] A função deve receber como parâmetro o número identificador do filme
escolhido, buscar o filme com base no parâmetro recebido e alterar o status
existente da propriedade emCartaz (se estava como true, alterar para false, e
vice e versa).

```
function alterarStatusEmCartaz(codigo){
    for(let i=0; i<catalogo.length; i++){
        if(codigo == catalogo[i].codigo){
            return catalogo[i].emCartaz = !catalogo[i].emCartaz;
        }
    }
}
```
