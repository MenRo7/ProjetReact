import React from 'react';
import './assets/style/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
