import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Integrations from "./components/Integrations/Integrations";
import Testimonials from "./components/Testimonials/Testimonials";
import "./styles/global.scss";
const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Integrations />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
