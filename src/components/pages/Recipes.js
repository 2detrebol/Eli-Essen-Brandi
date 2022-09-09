import React, { useState, useEffect } from 'react'
import "./Recipes.css"

const Recipes = () => {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    if (loading) {
        return <div className="containerLoading">
            <img src="../img/logo.png" className="logoLoading" alt="logo" />
            <p className="animate__animated animate__flash animate__infinite	infinite"> Cargando...</p>
        </div>
    }

    return (
        <>
            <h1 className="tittleRecipes animate__animated animate__bounceIn">Recetas</h1>
            <div className="videos animate__animated animate__fadeIn animate__delay-1s">
                <video className="video1" width="880" height="560" src="https://i.imgur.com/TQmiDnf.mp4" controls alt="Pepas de membrillo"></video>
                <video className="video2" width="445" height="275" src="https://i.imgur.com/kejjuHi.mp4" controls alt="Torta húmeda con frutas"></video>
                <video className="video3" width="445" height="275" src="https://i.imgur.com/2yzqMMb.mp4" controls alt="Brownie"></video>
                <video className="video4" width="445" height="275" src="https://i.imgur.com/tptFLHT.mp4" controls alt="Cookies con chips"></video>
                <video className="video5" width="445" height="275" src="https://i.imgur.com/0hQnrAE.mp4" controls alt="Limonies"></video>

            </div>

        </>
    )
}

export default Recipes;
