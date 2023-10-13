import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Logement from './pages/Logement';
import Error from './pages/Error';

import './App.scss';

function App() {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/*" element={<Error />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
