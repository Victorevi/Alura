/*const Livro = function(nome, editora,  paginas){
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas
    
    this.getNome = function(){
        return gNome
    }
    this.getEditora = function(){
        return gEditora
    }
    this.getPaginas = function(){
        return gPaginas
    }
}

const GraphQL = new Livro("GraphQL", "Casa do Código", 143);
console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas());

const nome = "Alura";

const temp = new String(nome);

console.log(nome);
*/

/////////////////////////////////

class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log('Título: ${2 * 2}', this.nome)
    }
    descreverTitulo(){ 
        console.log("${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.")
    }
}

const nodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195)
nodeJS.anunciarTitulo()
nodeJS.descreverTitulo()
console.log("${2 + 2}")
