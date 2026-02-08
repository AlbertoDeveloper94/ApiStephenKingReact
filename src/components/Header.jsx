import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";
function Header({ titleName }) {
  return (
    <header className="flex flex-col font-extrabold h-screen">
      <Navbar className="h-auto" />
      <Banner className="flex-1" title={titleName} />
    </header>
  );
}
export default Header;
