import { Outlet } from "react-router-dom";
import Header from "./Header";
import Meals from "./pages/Meals";
import Modal from "./Modal";
import { useGlobalContext } from "../Context";

const Layout = () => {
  const { showModal } = useGlobalContext();
  return (
    <div>
      <Header />
      {showModal ? <Modal /> : <Outlet />}
    </div>
  );
};

export default Layout;
