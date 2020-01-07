import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    };

    onSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        this.props.signInWithEmail({email, password});
    };

    handleChange = (e) => {
        const { value, name} = e.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        const {signInWithGoogle} = this.props;

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onSubmit}>
                    <FormInput
                        name = "email" 
                        id = "sign-in-email" 
                        value = {this.state.email} 
                        type = "email"
                        handleChange = {this.handleChange}
                        label = "EMAIL"
                        required
                    />
                    <FormInput
                        name = "password"
                        id = "sign-in-password"
                        value = {this.state.password} 
                        type = "password"
                        handleChange = {this.handleChange}
                        label = "PASSWORD"
                        required
                    />
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button type="button" onClick={signInWithGoogle} className="google-signin"> Sign In With Google</Button>
                    </div>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmail: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);