import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./styles/GlobalStyle";

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
      <GlobalStyle />
    </div>
  );
};
