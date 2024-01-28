import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Meals from "./components/pages/Meals";
import Favorites from "./components/pages/Favorites";

import Layout from "./components/Layout";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Meals />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
