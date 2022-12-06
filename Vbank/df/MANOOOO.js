class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }
    anunciarTitulo(){
        console.log(`Título: ${this.nome}.`);
    }
    descreverTitulo(){ 
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`);
    }
}

const nodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195);
nodeJS.anunciarTitulo();
nodeJS.descreverTitulo();

class LivroColecao extends Livro {
    constructor(nome, nomeColecao){
        super(nome);
        this.nomeColecao = nomeColecao;
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}.`);
    }
}

const LogicaDeProgramacao = new LivroColecao ("Lógica de Programação", "Começe a Programar");
LogicaDeProgramacao.descreverColecao();