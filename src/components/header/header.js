import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import { ReactComponent as Logo} from '../../assests/logo.svg';

const Header = (props) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <nav className="navigation options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT US</Link>
            </nav>
        </div>
    )
}

export default Header;