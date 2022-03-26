
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

# MODULO II: Parte 3 - De objeto literal para JSON
## 1. Chegou o momento de deixarmos de utilizar o objeto literal integrado ao arquivo principal. Vamos modularizar essa nossa base de informações de filmes. Para isso crie, na pasta raíz do projeto, uma nova pasta chamada database (aqui será alocado qualquer arquivo que nos sirva como base de informações a serem consultadas).
- [x] mkdir database

## 2. Crie, dentro da pasta, um arquivo chamado catalogo.json
- [x] cd database
- [x] touch catalogo.json

## 3. Passe para esse arquivo todos os registros criados por você no arquivo cinema.js. E exclua o objeto catalogo do arquivo citado.
- [x] atividade realizada

## 4. Perceba que ainda precisaremos das informações dos filmes para que as funções criadas no arquivo cinema.js funcione. Para isso você deve importar o arquivo JSON e armazená-los em uma variável (vide aula 03. Introdução a Node.js)
- [x] let catalogo = require('./database/catalogo.json');

## 5. Teste as funções novamente certificando-se de que a migração de arquivo e formato não prejudicou seu funcionamento.

# MODULO 2:  Parte II - Otimizando funções e condicionais

### listarTodosOsFilmes - criar A função deve percorrer toda a lista de filmes armazenada no catálogo utilizando o loop for e retornar as informações de maneira amigável ao usuário. Essa função pode receber parâmetros? Por que?

´´´
function listarTodosOsFilmes(){
    catalogo.forEach(function(cat){
        console.log(cat.titulo);
    });
}

listarTodosOsFilmes();
´´´
### listarFilmesEmCartaz - criar A função deve percorrer toda a lista de filmes armazenada no catálogo utilizando o loop for e retornar os filmes disponíveis em cartaz - as informações de maneira amigável ao usuário. E esta, recebe parâmetros? Por que?

´´´
function listarFilmesEmCartaz(){
    console.log("Filmes em cartaz")
    catalogo.filter(function(cat){
        if(cat.emCartaz){
            console.log(cat.titulo);
        }
    });
}
listarFilmesEmCartaz();

´´´


### alterarStatusEmCartaz - alterar A função deve receber como parâmetro o número identificador do filme escolhido, buscar o filme com base no parâmetro recebido e alterar o status existente da propriedade emCartaz (se estava como true, alterar para false, e vice e versa;

```
function alterarStatusEmCartaz(codigo){
    let filmeStatus = buscarFilme(codigo);
    filmeStatus.emCartaz = !filmeStatus.emCartaz;
    return filmeStatus;
}

```



