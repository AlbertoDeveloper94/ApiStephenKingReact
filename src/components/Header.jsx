import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";
function Header({ titleName, isbn,year }) {
  return (
    <header className="h-screen flex flex-col">
      <Navbar className="h-16 " />
      <Banner className="flex-1" title={titleName} isbn={isbn} year={year}/>
    </header>
  );
}
export default Header;
