import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state; 

        if (password !== confirmPassword) {
            alert('Passwords dont match');
            
            return;
        };

        this.props.signUp({email, password, displayName});

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state; 
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a accoutn</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type = "text"
                        name = "displayName"
                        value = {displayName}
                        onChange = {this.handleChange}
                        label = 'Display name'
                    />
                    <FormInput
                        type = "email"
                        name = "email"
                        value = {email}
                        onChange = {this.handleChange}
                        label = 'email'
                    />
                    <FormInput
                        type = "password"
                        name = "password"
                        value = {password}
                        onChange = {this.handleChange}
                        label = 'Password'
                    />
                    <FormInput
                        type = "password"
                        name = "confirmPassword"
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label = 'Confirm Password'
                    />
                    <Button type="submit">SIGN UP</Button>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    signUp: (emailAndPassowrd) => dispatch(signUpStart(emailAndPassowrd))
})

export default connect(null, mapDispatchToProps)(SignUp);

