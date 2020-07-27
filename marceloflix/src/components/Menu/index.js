import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';
function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Marceloflix logo"/>
            </a>
            <Button className='Buttonlink' href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}
export default Menu;