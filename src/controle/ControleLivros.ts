import { Livro } from '../modelo/Livro';

const livros: Array<Livro> = [
    new Livro(1, 1, "Livro A", "Resumo A", ["Autor 1", "Autor 2"]),
    new Livro(2, 2, "Livro B", "Resumo B", ["Autor 3"]),
    new Livro(3, 3, "Livro C", "Resumo C", ["Autor 4", "Autor 5"]),
];

export class ControleLivros {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = livros.length > 0 ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
        livro.codigo = novoCodigo;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
    
}

export default ControleLivros


