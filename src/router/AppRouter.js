import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "../components/Navbar/NavBar";
import { Cacerolas } from '../pages/Cacerolas';
import { Sartenes } from '../pages/Sartenes';
import { Complementos } from '../pages/Complementos';
import { Recetas } from '../pages/Recetas';
import { Home } from '../pages/Home';


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Cacerolas" element={<Cacerolas />} />
                    <Route path="/Sartenes" element={<Sartenes />} />
                    <Route path="/Complementos" element={<Complementos />} />
                    <Route path="/Recetas" element={<Recetas />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;

