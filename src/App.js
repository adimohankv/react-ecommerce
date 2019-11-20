import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import Login from './pages/login-page/login-page';
import { auth, createUserProfileDocument } from './firebase/utils'
import './App.css'

class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            currentUser: null
        };
        this.unsubscribeFromAuth = null;
    };

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }, () => console.log(userRef));
                });
            } else {
                this.setState({
                    currentUser: userAuth
                })
            };
        })
    };

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    };

    render() {
        return (
            <div>
            <Header currentUser={this.state.currentUser}/>
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