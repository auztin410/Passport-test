import React, { Component } from 'react';
import 'whatwg-fetch';
import { getFromStorage, setInStorage } from "../utils/storage";
import Header from '../Header/Header';

class Submit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signInError: '',
            signInEmail: '',
            signInPassword: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmail: '',
            signUpPassword: '',
        }
    }

    componentDidMount() {
        const obj = getFromStorage("weird_wide_web");

        if (obj && obj.token) {
            const { token } = obj;
            fetch("/api/account/verify?token=" + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token,
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false,
                        })
                    }
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        const {
            isLoading,
            token,
            signInError,
            signInEmail,
            signInPassword,
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPassword,
            signUpError,
        } = this.state;

        return (
            <div>
                <h1>Submit Form</h1>
            </div>
        );

    }
}

export default Submit;