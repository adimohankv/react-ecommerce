import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import Login from './pages/login-page/login-page';
import { auth } from './firebase/utils'
import './App.css'

class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            setCurrentUser: null
        };
        this.unsubscribeFromAuth = null;
    };

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                setCurrentUser: user
            });

            console.log(user);
        })
    };

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    };

    render() {
        return (
            <div>
            <Header currentUser={this.state.setCurrentUser}/>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop/" component={ShopPage} />
                <Route path="/signin" component={Login} />
            </Switch>
            </div>
        );
    };
};


export default App;