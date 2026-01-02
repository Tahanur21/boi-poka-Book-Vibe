import { useLoaderData, useParams } from "react-router";
import { addToStoredReadList } from "../utilities/addToDo";
import { addToStoredWishList } from "../utilities/addWishList";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const books = data.find((book) => book.bookId === id);
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

  /*
  * understand what to store or save : => bookId;
  * where to save the bookId : database;
  * how to store : array,list,collection
  * check : if the book already read or exist
  * if not then add, if then don't add
  */

  const handleMarkAsRead = (id) =>{
    addToStoredReadList(id)
  }
  const handleMarkAsWishList = (id)=>{
    addToStoredWishList(id);
  }

  return (
    <div className="hero h-3/6 my-10">
      <div className="w-full hero-content flex-col lg:flex-row gap-10 lg:items-start">
        <div className="bg-base-200 w-full px-5 py-10 rounded-2xl">
          <img
            src={image}
            alt={bookName}
            className="w-96 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-full space-y-4">
          <h1>{bookName}</h1>
          <p>By : {author}</p>
          <div className="my-6">
            <div className="outline outline-gray-300"></div>
            <p className="py-3">{category}</p>
            <div className="outline outline-gray-300"></div>
          </div>
          <p className="text-gray-600">
            <span className="text-black font-bold">Review : </span>
            {review}
          </p>
          <div className="flex items-center gap-6">
            <p className="font-bold">Tag</p>
            {tags.map((tag, idx) => (
              <p
                className="text-green-400 text-shadow-green-400 font-semibold rounded-3xl py-1 px-4 bg-[#7fba732a]"
                key={idx}
              >
                #{tag}
              </p>
            ))}
          </div>
          <div className="outline outline-gray-300"></div>
          <div className="grid grid-cols-2 pt-4">
            <div>
              <p className="text-gray-600">Number of Pages :</p>
              <p className="text-gray-600">Publisher :</p>
              <p className="text-gray-600">Year of Publishing :</p>
              <p className="text-gray-600">Rating :</p>
            </div>
            <div>
              <p className="font-bold">{totalPages}</p>
              <p className="font-bold">{publisher}</p>
              <p className="font-bold">{yearOfPublishing}</p>
              <p className="font-bold">{rating}</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button
            onClick={()=> handleMarkAsRead(bookId)}
            className="btn btn-info">Read</button>
            <button
            onClick={()=> handleMarkAsWishList(bookId)}
            className="btn btn-info">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
