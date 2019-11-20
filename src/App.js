import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import Login from './pages/login-page/login-page';
import { auth, createUserProfileDocument } from './firebase/utils';
import { setCurrentUser } from './redux/user/user.actions'
import './App.css';

class App extends React.Component {
    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data()
                    }, () => console.log(userRef));
                });
            } else {
                setCurrentUser(userAuth)
            };
        })
    };

    componentWillUnmount() {
        this.unsubscribeFromAuth();
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
                </Switch>
            </div>
        );
    };
};

const mapStateToProps = ({user}) => {
    return {
        currentUser: user.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => {
            dispatch(setCurrentUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);