import React from 'react'
import foto from "../assets/logo1.png"


const NavBar = () => {
    return (
        <div className='navBar'>

            <img src={foto} alt="" />
            <a href='#'>Inicio</a>
            <a href='#'>Contacto</a>
            <a href='#'>Sobre Nostros</a>
            <a href='#'>Mas Informacion</a>
        </div>
    )
}

export default NavBar