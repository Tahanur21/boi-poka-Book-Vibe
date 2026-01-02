import React from "react";
import { useLoaderData } from "react-router";

const ListedBooks = () => {
    const allBooks = useLoaderData();
    console.log(allBooks)
  return (
    <div className="mt-12">
        <div className="flex justify-center items-center">
            <button className="btn bg-green-500 text-white">Sort By</button>
        </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift my-20">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Book"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>

      </div>
    </div>
  );
};

export default ListedBooks;
