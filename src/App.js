import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import Login from './pages/login-page/login-page';
import Checkout from './pages/checkout/checkout';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';

class App extends React.Component {
    componentDidMount() {
        this.props.checkUserSession();
    };

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/shop/" component={ShopPage} />
                    <Route 
                        path="/signin" 
                        render={() => this.props.currentUser ? (<Redirect to="/"/>) : <Login />}
                    />
                    <Route exact path="/checkout" component={Checkout} />
                </Switch>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        currentUser: selectCurrentUser(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkUserSession: () => dispatch(checkUserSession())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);