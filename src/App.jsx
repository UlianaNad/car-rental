import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Catalog = lazy(() => import("./pages/Catalog"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </div>
  );
};
