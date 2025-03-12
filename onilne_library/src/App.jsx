import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, AddBook, BookDetails, BrowseBooks, NotFound } from "./pages/index";
import { Navbar } from "./components/Navbar";

import './App.css'

function App() {

  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Navigate to="/books/fiction" />} />
      <Route path="/books/:category" element={<BrowseBooks />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>)
}

export default App
