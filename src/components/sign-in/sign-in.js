import React from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { signInWithGoogle } from '../../firebase/utils';
import { auth } from '../../firebase/utils';
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

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        } catch (error) {
            console.error(error);
        };
    };

    handleChange = (e) => {
        const { value, name} = e.target;

        this.setState({
            [name]: value
        })
    }

    render() {
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
                        <Button onClick={signInWithGoogle} className="google-signin"> Sign In With Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;