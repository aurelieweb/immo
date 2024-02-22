import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.scss';
import Menu from '../../components/Menu';
import logo from '../../assets/logo.png';


//import Fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header__container">
        

        <div className='header__contact-container'>
          <div className='header__contact'>
            <div className='header__contact-details'>
              {/*Vérifier la méthode*/}
              <a href="tel:+33636869270"><FontAwesomeIcon icon={faPhone} /> 06 36 86 92 70</a>
            </div>
            <div className='header__contact-media'>
            <Link to="/contact" className="menu__item-link" >
            Contact
          </Link>
            </div>
          </div>
          
        </div>
        <div className='header__logo'>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo Aurélie DEMETRIO, L'agence Digitale, développeur freelance " />
  </Link>
          {/*<div className='header__logo-text'> 
            <p>Aurélie Demetrio</p>
            <p>L'agence Digitale</p>
  </div>*/}
          <Menu/>
        </div>
        
    </header>
  );
}

export default Header;