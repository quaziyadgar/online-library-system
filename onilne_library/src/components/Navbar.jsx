// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Online Library System</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/books" className="hover:underline">Browse Books</Link>
        <Link to="/add-book" className="hover:underline">Add Book</Link>
      </div>
    </nav>
  );
};

