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
function getBookById(id, callback){
    const book = booksDB.find(book => book.id === id);
    if(!book){
        const error = new Error();
        error.message = "book not found!";
        return callback(error);
    }
    callback(null, book);  
}

function getAuthorById(id, callback){
    const author = authorsDB.find(author => author.id === id);
    if(!author){
        const error = new Error();
        error.message = "Author not found!";
        return callback(error);
    }
    callback(null, author);  
}

//Try with 1,3 and 4
getBookById(2, (err, book) => {
    if(err){
        return console.log(err.message);
    }

    getAuthorById(book.authorId, (err, author) => {
        if(err){
            return console.log(err.message);
        }
        console.log(`This book "${book.title}" was written by ${author.name}.`);
    });

    return console.log(book);
});