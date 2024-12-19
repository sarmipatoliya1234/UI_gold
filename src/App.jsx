import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './Home/Home';
import ProductPage from './components/ProductPage';
import "./App.css";
// import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <div className="mx-auto mt-0">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </main>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
