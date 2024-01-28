import Search from "./Search";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Header = () => {
  const location = useLocation();
  const isFavoritesPage = location.pathname === "/favorites";

  return (
    <>
      <header className="header wrapper">
        <div className="header-content">
          <Link className="link-button logo" to="/">
            <h1>Meal Mingle</h1>
          </Link>
          <Link
            className="link-button"
            to={isFavoritesPage ? "/" : "/favorites"}
          >
            <h2>{isFavoritesPage ? "Search for meals" : "Favorites"}</h2>
          </Link>
        </div>
      </header>

      {!isFavoritesPage && <Search />}
    </>
  );
};

export default Header;
