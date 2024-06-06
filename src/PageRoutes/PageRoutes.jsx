
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductPage from "../Pages/ProductPage";


const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/product" Component={ProductPage} />
    </Routes>
  );
};

export default PageRoutes;