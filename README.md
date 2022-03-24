
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

