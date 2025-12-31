import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
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
  } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-6">
      <figure className="p-10 rounded-2xl bg-gray-300">
        <img
          src={image}
          alt="_blank"
          className="rounded-xl w-40 h-50 object-cover"
        />
      </figure>
      <div className="card-body flex flex-col ml-4 space-y-3">
        <div className="flex gap-4">
          <button className="text-green-400 text-shadow-green-400 font-semibold rounded-3xl p-3 bg-[#7fba732a]">
            Young Adult
          </button>
          <button className="text-green-400 text-shadow-green-400 font-semibold rounded-3xl p-3 bg-[#7fba732a]">
            Identity
          </button>
        </div>
        <div className="h-16">
          <h2 className="card-title text-left text-2xl font-bold">
            {bookName}
          </h2>
        </div>
        <p className="text-left text-[18 font-semibold px]">By : {author}</p>
        <div className="outline-1 outline-gray-200 outline-dashed"></div>
        <div className="flex items-center justify-between text-gray-500">
          <span className="text-lg text-gray-500">{category}</span>
          <div className="flex items-center gap-2 text-lg">
            <span>{rating}</span>
            <CiStar className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
