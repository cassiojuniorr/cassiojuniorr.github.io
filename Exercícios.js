const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
];
  
// Adicione o código do exercício aqui:
function authorBornIn1947(year) {
    let nameAtuthor = '';
    return books.find((env) => {
        nameAtuthor = env.author.birthYear === year;
        return nameAtuthor;
    });
};
/* console.log(authorBornIn1947(1947)); */

function smallerName(array) {
    let nameBook = array[0].name;
    array.forEach(element => {
        element.name.length
        if(element.name.length < nameBook.length){
            nameBook = element.name;
        }
    });
    return nameBook;
};
/* console.log(smallerName(books)); */

function getNamedBook(array) {
    let book26C = '';
    array.find((env, ) => {
        env.name.length
        if(env.name.length === 26){
            book26C = env.name;
        }
    });
    return `${book26C} tem ${book26C.length} caracteres.`;
};
/* console.log(getNamedBook(books)); */

function everyoneWasBornOnSecXX(bornDay) {
    return books.every((element) => {
       return element.author.birthYear === bornDay;
    });
}
/* console.log(everyoneWasBornOnSecXX(1890)); */

function someBookWasReleaseOnThe80s(decada) {
    
}