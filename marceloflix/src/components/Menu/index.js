import React from 'react';
import {Link} from 'react-dom';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';


function Menu(){
    return (
        <nav className="Menu">
            <a to="/">
                <img className="Logo" src={Logo} alt="Marceloflix logo"/>
            </a>
            <Button as={Link} className='Buttonlink' to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}
export default Menu;