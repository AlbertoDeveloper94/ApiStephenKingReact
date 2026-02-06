import Navbar from "./navbar/Navbar";
function Header({ titleName }) {
  return (
    <header className="flex flex-col font-extrabold h-screen">
      <Navbar className="h-auto" />
    </header>
  );
}
export default Header;
