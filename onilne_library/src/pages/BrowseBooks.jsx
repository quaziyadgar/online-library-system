import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";


export const BrowseBooks = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // Get user-added books from Redux
  const userBooks = useSelector((state) => state.books.userBooks);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=20`
        );
        const data = await response.json();

        if (!data.items) throw new Error("No books found");

        setBooks(data.items);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchBooks();
  }, [category]);

  // Filter both API & user-added books
  const filteredBooks = [
    ...userBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    ),
    ...books.filter((book) => {
      const info = book.volumeInfo || {};
      return (
        info.title?.toLowerCase().includes(search.toLowerCase()) ||
        info.authors?.[0]?.toLowerCase().includes(search.toLowerCase())
      );
    }),
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{category ? `${category} Books` : "All Books"}</h1>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      {loading && <p className="text-center">Loading books...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {!loading && !error && filteredBooks.length === 0 && (
        <p className="text-center text-gray-600">No books found.</p>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map((book) => {
          const info = book.volumeInfo || {};
          return (
            <li key={book.id} className="bg-white p-4 shadow rounded-lg">
              <img
                src={info.imageLinks?.thumbnail || "https://via.placeholder.com/128x192"}
                alt={info.title || "No Title"}
                className="w-full h-48 object-cover mb-2"
              />
              <h2 className="text-lg font-bold">{info.title || "No Title"}</h2>
              <p className="text-gray-600">{info.authors?.[0] || "Unknown Author"}</p>
              <Link to={`/book/${book.id}`} className="text-blue-600 hover:underline block mt-2">
                View Details
              </Link>
            </li>
          );
        })}
      </ul>

      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  );
};
