import Search from "./Search";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Header = () => {
  return (
    <>
      <header className="header wrapper">
        <div className="header-content">
          <Link className="link-button logo" to="/">
            {" "}
            <h1>Meal Mingle</h1>
          </Link>
          <Link className="link-button" to="/favorites">
            <h2>Favorites</h2>
          </Link>
        </div>
      </header>
      <Search />
    </>
  );
};

export default Header;
