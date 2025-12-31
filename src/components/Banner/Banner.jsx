import React from "react";
import banner from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen my-20 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 p-20 text-center lg:text-left">
        <div className="">
            <img
          src={banner}
          className="rounded-lg shadow-2xl"
        />
        </div>
        <div className="space-y-10">
          <h1 className="text-5xl font-semibold">Books to freshen up your bookshelf</h1>
          <button className="btn bg-green-500 text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
