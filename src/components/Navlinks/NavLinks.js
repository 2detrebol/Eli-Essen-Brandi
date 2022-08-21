import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import './NavLinks.css'
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../service/firebase/index'

const NavLinks = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionCategories = query(collection(db, 'categories'), orderBy('name', 'asc'));

        getDocs(collectionCategories).then((response) => {
            const categories = response.docs.map((snap) => {
                return {
                    id: snap.id,
                    ...snap.data(),
                };
            });
            setCategories(categories);
        });
    }, []);

    return (
        <div className="containerLinks">
            <Nav className="menuNav animate__animated animate__fadeIn animate__delay-1s">
                {categories.map((category) => (
                    <NavLink className="linkNav animate__animated animate__fadeIn animate__delay-1s" key={category.id} to={category.path}>
                        {category.name}
                    </NavLink>
                ))}
                <NavLink className="linkNav recetas animate__animated animate__fadeIn" to="/Recetas">Recetas</NavLink>
            </Nav>
        </div>
    );
}

export default NavLinks;