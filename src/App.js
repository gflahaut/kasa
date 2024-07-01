import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details'; // Import du composant Details
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
