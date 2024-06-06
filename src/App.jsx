import "./App.css";
import PageRoutes from "./PageRoutes/PageRoutes";
import AppHeader from "./components/AppHeader/AppHeader";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import LogoCarousel from './components/LogoCarousel/LogoCarousel'


function App() {
  return (
    <>
      <AppHeader />
      <MainCarousel/>
      <LogoCarousel/>
      <PageRoutes />
    </>
  );
}

export default App;