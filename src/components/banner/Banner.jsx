function Banner({ title }) {
  return (
    <section className="bg-[url('src/assets/DontHaveFearBook.jpg')] bg-contain bg-center bg-no-repeat text-white flex flex-col lg:h-screen h-dvh overflow-hidden">
      <div>
        <p className="text-[12px] text-red-500 tracking-[3px] mt-4">Pesadilla de hoy</p>
        <h3 className="text-2xl my-2">Libro del día</h3>
      </div>
      <div className=" flex-1 flex flex-col justify-end items-start mb-5">
        <h2 className="text-5xl">{title}</h2>
        <button className="bg-red-500 py-3 px-8 rounded-4xl">Explore {title}</button>
      </div>
    </section>
  );
}
export default Banner;
