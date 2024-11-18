import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ScreenSection from './components/ScreenSection';
import PricingPlan from './components/PricingPlan';
import Testimonies from './components/Testimonies';
import WaitLIst from './components/WaitLIst';
import ProductPages from './pages/ProductPages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ScreenSection />
              <PricingPlan />
              <Testimonies />
              <WaitLIst />
            </>
          }
        />

        {/* Product Page */}
        <Route path="/product" element={<ProductPages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
