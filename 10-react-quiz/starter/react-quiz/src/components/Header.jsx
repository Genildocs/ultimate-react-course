import Logo from "../assets/react.svg";
function Header() {
  return (
    <header className="app-header">
      <img
        src={Logo}
        alt="React logo"
        style={{ width: "50px", height: "50px" }}
      />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
