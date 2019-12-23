import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.scss';
import { ReactComponent as Logo} from '../../assests/logo.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const Header = (props) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <nav className="navigation options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT US</Link>
                {
                    props.currentUser
                    ? <div className="option" onClick={props.signOut}>SIGN OUT</div>
                    : <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </nav>
            {
                props.toogleCartHidden
                    ? null
                    : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    toogleCartHidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);