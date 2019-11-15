import React from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
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

                    <Button type="submit">Sign In</Button>
                </form>
            </div>
        )
    }
}

export default SignIn;