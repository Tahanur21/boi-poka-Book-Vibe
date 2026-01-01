import { useLoaderData, useParams } from "react-router";


const BookDetails = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    
    const books = data.find(book=>book.bookId === id);
    const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    } = books;
    
    return (
        <div>
            <h1>Book Details is here {bookName}</h1>
        </div>
    );
};

export default BookDetails;