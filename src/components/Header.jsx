import Search from "./Search";

const Header = () => {
  return (
    <>
      <header className="header wrapper">
        <div className="header-content">
          <h1>Meal Mingle</h1>
          <h2>Favorites</h2>
        </div>
      </header>
      <Search />
    </>
  );
};

export default Header;
