import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/black-panther-wakanda-forever.png';
import './styles.css';


function Header () {
    return (
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }}  to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/comentarios'>
                    <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}




export default Header;