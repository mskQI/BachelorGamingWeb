import React from 'react';
import browse from './pages/browse';
import details from './pages/details';
import Home from './pages/Home';
import profile from './pages/profile';
import streams from './pages/streams';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';

function App() {
    return (
      <div>
      <Header />
      <Home/>

     <Footer />
      </div> 
    );
}

export default App