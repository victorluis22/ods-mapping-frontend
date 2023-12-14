import React, { useState } from "react";
import logo from '../../assets/logo.png'

import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";

import LogoPrincipal from "../../assets/logoprincipal.svg"

import { IoMdMenu } from "react-icons/io";

import './style.css'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return(
        <div className="Header">
            <div className="Header-elements">
                <Link to="/" className="ImageContainer"><img src={LogoPrincipal} alt=""/></Link>
                <div className="linkContainer">
                    <Link to='/'>Home</Link>
                    <Link to='/ranking'>Termômetro</Link>
                    <Link to='/dados'>Iniciativas</Link>
                </div>

                <IoMdMenu className="toogle-menu" size={50} onClick={() => setToggleMenu(!toggleMenu)}/>
                
                {toggleMenu ?
                    <MobileMenu status={toggleMenu} toggle={setToggleMenu}/>
                    :
                    null
                }
            </div>    
        </div>
    )
}

export default Header