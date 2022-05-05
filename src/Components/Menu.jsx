import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import { FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaAlignJustify } from 'react-icons/fa'


const Menu = () => {
  return (
      <>
          <div className="main-menu" >
              <div className="logo"><h1>React developer </h1></div>
              
          <div className="nav-link">
              <NavLink className={"link"} to={'/'}> Home</NavLink>
              <NavLink className={"link"} to={'/About'}> About</NavLink>
              <NavLink className={"link"} to={'/service'}> Service</NavLink>
              <NavLink className={"link"} to={'/contact'}> Contact</NavLink>
          </div>
          <div className="social">
              <a href='https://www.facebook.com/webdevelopparsoli/' target={"_blank"}> <FaFacebookSquare/></a>
              <a href='https://github.com/Mohdsahilparsoli' target={"_blank"}> <FaGithubSquare/></a>
             {/* <a href='https://www.instagram.com/aakil_khan_776/?hl=en' target={"_blank"}> <FaInstagramSquare/></a>*/}
              <a href='https://www.linkedin.com/in/md-sahil-839588227/' target={"_blank"}> <FaLinkedin/></a>
              <a href='https://twitter.com/sahilparsoli' target={"_blank"}> <FaTwitterSquare/></a>

          
          </div>
          <dev className="menubar">
          <button><FaAlignJustify/></button>
          </dev>
          </div>
      </>
  
    )
}

export default Menu