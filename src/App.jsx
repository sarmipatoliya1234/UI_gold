import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FooterDetail from './components/FooterDetail';
import Home from './Home/Home';
import "./App.css";
import RingsGrid from './components/ringGrid';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="font-sans">
      <div className="mx-auto mt-0">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<RingsGrid />} />
            <Route path="/category/:id" element={<ProductPage />} />
          </Routes>
        </main>
        <Newsletter />
        <Footer />
        <FooterDetail />
      </div>
    </div>
  );
}

export default App;
