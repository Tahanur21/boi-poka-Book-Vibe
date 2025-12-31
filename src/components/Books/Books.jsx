import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch('../../../public/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="flex flex-col justify-center items-center gap-7 mb-20">
            <h1 className="text-4xl font-bold">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
                {
                    books.map(book=>
                    <Book
                    key={book.bookId}
                    book={book}
                    />)
                }
            </div>
        </div>
    );
};

export default Books;