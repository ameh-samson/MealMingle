import { Outlet } from "react-router-dom";
import Header from "./Header";
import Meals from "./pages/Meals";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
