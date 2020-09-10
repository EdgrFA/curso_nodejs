const booksDB = [
    {
        id: 1,
        title: 'Clean Code',
        authorId: 1
    },
    {
        id: 2,
        title: 'The pragmantic programmer',
        authorId: 2
    },
    {
        id: 3,
        title: 'Web Development with Node.js',
        authorId: 3
    }
];

const authorsDB = [
    {
        id: 1,
        name: "Robert C. Martin"
    },
    {
        id: 2,
        name: "Steve Forest"
    }
];

//Callback Hell
async function getBookById(id){
    const book = booksDB.find(book => book.id === id);
    if(!book){
        const error = new Error();
        error.message = "book not found!";
        throw error;
    }
    return book;
}

async function getAuthorById(id){
    const author = authorsDB.find(author => author.id === id);
    if(!author){
        const error = new Error();
        error.message = "Author not found!";
        throw error;
    }
    return author;
}

//Try with 1,3 and 4
async function main(){
    try{
        const book = await getBookById(4);
        const author = await getAuthorById(book.id);
        console.log(`This book "${book.title}" was written by ${author.name}.`);
    }catch(ex){
        console.log(ex.message);
    }
}

main();