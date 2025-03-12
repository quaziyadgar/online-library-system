import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/booksCategories";


export const Home = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Online Library</h1>
      <h2 className="text-xl font-semibold mb-2">Book Categories</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <li key={category} className="bg-gray-200 p-3 rounded-lg">
            <Link to={`/books/${category.toLowerCase()}`} className="text-blue-600 font-semibold hover:underline">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

