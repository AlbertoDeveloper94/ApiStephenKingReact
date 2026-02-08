import { useState, useEffect, use } from "react";
import { getBooks } from "../services/stephenKingApi";

import Header from "../components/Header";

function Home() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        const saveBooksState = response.data.data;
        setBooks(saveBooksState);
      } catch (err) {
        setError("Error al cargar los libros");
      }
    };

    fetchBooks();
  }, []);
  console.log(books);

  if (books.length === 0) {
    return <p>Cargando Libro...</p>;
  }

  return (
    <Header
      titleName={
        books
          .filter((book) => book.Title === "Doctor Sleep")
          .map((book) => book.Title)[0]
      }
      isbn={
        books
          .filter((book) => book.Title === "Doctor Sleep")
          .map((book) => book.ISBN)[0]
      }
      year={
        books
          .filter((book) => book.Title === "Doctor Sleep")
          .map((book) => book.Year)[0]
      }
    />
  );
}

export default Home;
