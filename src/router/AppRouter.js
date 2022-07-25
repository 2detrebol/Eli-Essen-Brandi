import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from "../components/Navbar/NavBar";
import { Cacerolas } from '../pages/Cacerolas';
import { Sartenes } from '../pages/Sartenes';
import { Complementos } from '../pages/Complementos';
import { Recetas } from '../pages/Recetas';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/index" />} />
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

