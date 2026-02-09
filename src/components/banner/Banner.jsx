function Banner({ title, isbn,year, className }) {
  return (
    <section className={`text-white px-4 pt-6 relative ${className}`}>
      <div className="mb-4 absolute z-10 top-15 left-15">
        <p className="text-[11px] tracking-[4px] text-red-500">
          — Pesadilla de hoy
        </p>
        <h2 className="text-3xl font-serif italic">Libro del día</h2>
      </div>

      <div className=" relative h-full rounded-3xl overflow-hidden bg-[url('src/assets/libraryBooksImages/doctorSleepBook.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/70 to-black"></div>

        <div className="relative h-full p-6 flex flex-col justify-end">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase border border-red-500/40 px-3 py-1 rounded-full w-fit mb-4">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Top Recommendation
          </span>

          <h1 className="text-4xl font-serif font-bold mb-2">{title}</h1>
          <p className="text-2xl">{year}</p>
          <p>ISBN: {isbn}</p>

          <p className="text-sm italic text-white/70 max-w-xs mb-6 border-l-2 border-red-500 pl-4">"Todos flotan aquí...""</p>

          <button className="w-fit bg-red-600 px-8 py-3 rounded-full text-sm">
            Explore Derry →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
