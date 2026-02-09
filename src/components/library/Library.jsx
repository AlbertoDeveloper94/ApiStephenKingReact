import { bookImages } from "../../data/BookImages";

function Library({ books }) {
  return (
    <section className="mt-5">
      <h2 className="italic text-3xl lg:text-4xl mb-4 text-center lg:text-left">
        Biblioteca destacada ({books.slice(0, 12).length})
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 pb-4 w-full gap-4">
        {books.slice(0, 12).map((book) => (
          <div key={book.ISBN} className="lg:w-full bg-black/40 rounded-lg p-4">
            <div className="hover:scale-105 transition w-[80%] mx-auto">
              <img
                src={bookImages[book.ISBN]}
                alt={book.Title}
                className="w-full rounded aspect-2/3"
              />

              <h3 className="mt-3 text-lg font-semibold text-center">
                {book.Title}
              </h3>

              <p className="text-md text-red-800 text-center">{book.Year}</p>
              <p className="text-center text-md my-1 text-gray-400">
                Páginas: {book.Pages}
              </p>
              <p className="text-center text-sm text-gray-400">
                Publicación: {book.Publisher}
              </p>
              <p className="text-center text-sm text-gray-400 mt-2">
                ISBN: {book.ISBN}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Library;
