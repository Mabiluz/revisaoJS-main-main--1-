const receitasJson = {
    "receitas": [
        {
            "titulo": "Bolo de cenoura",
        },
        {
            "titulo": "Bolo de chocolate",
        },
        {
            "titulo": "Bolo de laranja",
        }
    ]
}

// converti o JSON em uma variável JAVASCRIPT
// Trouxe o JSON para uma variável
// vou trabalhar agora com os dados do JSON

const dadosPessoais = {
    "nome": "Amábile Emanuelly da Luz",
    "idade": 16,
    "email": "amabileemanuelly01@gmail.com",
    "cursosFavoritos": [
        "Informática",
        "Robótica",
        "Fotografia"
    ],
    "hobbies": [
        "Praticar Esportes",
        "Cozinhar",
        "Escutar a Música",
        "Desenhar"
    ],
    "agendaSemanal": {
        "segunda": [
            "Matemática",
            "Diversidade Humana",
            "Artes"
        ],
        "terca": [
            "Algoritmos",
            "Biologia",
            "Inglês"
        ],
        "quarta": [
            "Artes",
            "Português",
            "Geografia"

        ],
        "quinta": [
            "Filosofia",
            "Português",
            "Fisíca"
        ],
        "sexta": [
            "Sociologia",
            "Fotografia",
            "História"

        ]
    }
}

console.log("Funciona meu teste");
console.log("Nome", dadosPessoais.nome);
console.log("Idade",dadosPessoais.idade);
console.log("Email",dadosPessoais.email);
console.log("Cursos Favoritos", dadosPessoais.cursosfavoritos);
console.log("Curso 1",dadosPessoais.cursosFavoritos[0]);
console.log("Curso 2",dadosPessoais.cursosFavoritos[1]);
console.log("Hobbies", dadosPessoais.hobbies);
console.log("Hobbie1",dadosPessoais.hobbies[0]);
console.log("Hobbie2",dadosPessoais.hobbies[1]);
console.log("Hobbie3",dadosPessoais.hobbies[2]);
console.log("Hobbie4",dadosPessoais.hobbies[3]);
console.log("Agenda Semanal",dadosPessoais.agendaSemanal);
console.log("Segunda", dadosPessoais.agendaSemanal.segunda);
console.log("Terça", dadosPessoais.agendaSemanal.terca);
console.log("Quarta", dadosPessoais.agendaSemanal.quarta);
console.log("Quinta", dadosPessoais.agendaSemanal.quinta);
console.log("Sexta", dadosPessoais.agendaSemanal.sexta);

console.log("Primeira atividade segunda", dadosPessoais.agendaSemanal.segunda[0]);
console.log("Segunda atividade segunda", dadosPessoais.agendaSemanal.segunda[1]);
console.log("Terceira atividade segunda", dadosPessoais.agendaSemanal.segunda[2]);

console.log("Primeira atividade terça", dadosPessoais.agendaSemanal.terca[0]);
console.log("Segunda atividade terça", dadosPessoais.agendaSemanal.terca[1]);
console.log("Terceira atividade terça", dadosPessoais.agendaSemanal.terca[2]);

console.log("Primeira atividade quarta", dadosPessoais.agendaSemanal.quarta[0]);
console.log("Segunda atividade quarta", dadosPessoais.agendaSemanal.quarta[1]);
console.log("Terceira atividade quarta", dadosPessoais.agendaSemanal.quarta[2]);

console.log("Primeira atividade quinta", dadosPessoais.agendaSemanal.quinta[0]);
console.log("Segunda atividade quinta", dadosPessoais.agendaSemanal.quinta[1]);
console.log("Terceira atividade quinta", dadosPessoais.agendaSemanal.quinta[2]);

console.log("Primeira atividade sexta", dadosPessoais.agendaSemanal.sexta[0]);
console.log("Segunda atividade sexta", dadosPessoais.agendaSemanal.sexta[1]);
console.log("Terceira atividade sexta", dadosPessoais.agendaSemanal.sexta[2]);

const receitas = receitasJson.receitas;
// forEach é uma função em Javascript
// nativa que percorre um array
// e executa uma função para cada item
receitas.forEach(
    function (item) {
        console.log(item)
        const li = document.createElement("li");
        li.textContent = item.titulo;
        document.getElementById("recipeList").appendChild(li);
        
        const img = document.createElement("img")
        img.src = "img"
    }

)



// diferente das demais funções que criamos
// essa função é assíncrona
// ela vai esperar o retorno da função fetch
async function fetchReceitas(){
    // fetch é uma função nativa do Javascript
    const resposta = await fetch("https://dummyjson.com/recipes?limit=10");
    // aqui eu converto a resposta em JSON
    const receitas = await resposta.json();

}