import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from "./components/AppHeader/AppHeader";
import LogoCarousel from "./components/LogoCarousel/LogoCarousel";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <Router>
      <AppHeader/>
      <MainCarousel/>
      <LogoCarousel/>
      <Routes>
        <Route path="/" element={<Products />} />
        
  <Route path="/product/:productId/:variantId" element={<ProductDetails />} />
</Routes>

      
    </Router>
  );
};

export default App;
