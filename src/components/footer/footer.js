import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/black-panther-wakanda-forever.png';
import './styles.css';


function Footer () {
    return(
        
        <footer>
            <img  id="logo" src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por Davi Santana</span>
            <nav className="footer-navegation">
                <ul className="footer-list">
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
        </footer>
    )
}

export default Footer;