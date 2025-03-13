import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


export const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const data = await response.json();
        // console.log(data);
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
      setLoading(false);
    };

    fetchBook();
  }, [id]);

  if (loading) return <p className="text-center">Loading book details...</p>;
  if (!book) return <p className="text-center">Book not found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={book.volumeInfo.imageLinks?.large || book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128x192"}
        alt={book.volumeInfo.title}
        className="w-full h-96 object-cover mb-4"
      />
      <h1 className="text-3xl font-bold">{book.volumeInfo.title}</h1>
      <p className="text-gray-600">{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
      <p className="text-gray-800 mt-2">{<div dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} /> || "No description available."}</p>
      <Link to="/books" className="text-blue-600 hover:underline mt-4 inline-block">
        Back to Browse
      </Link>
    </div>
  );
};

export default BookDetails;
