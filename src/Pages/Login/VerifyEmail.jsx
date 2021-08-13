import React, { Component } from 'react'
import './VerifyEmail.css'

class EmailVerify extends Component {


    /* handleSubmit = async () => {
        const token = this.props.match.params.token
        console.log(token);
        token.split("http://localhost:3000/EmailVerify?token=");
        try {
            this.setState({ token: token });
            await UserSession.instance.Verification(this.props.token);
        } catch (err) {
            console.log('sign up error', err);
            throw Error(err);
        }
    }
 */
    async componentDidMount() {
        /* const token = this.props.match.params.token */
        const query = new URLSearchParams(this.props.location.search);

        const token = query.get('token')
        var separate = token

        separate.split("?token=");
        console.log(separate);

        if (token) {
            this.setState({ token: token })
            console.log(token);
            fetch('https://integrative-django.herokuapp.com/users/verified/', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'token': token
                })
            })
            console.log(token);

        }
    }

    render() {

        return (
            <div>
                <center>
                    <div className="VerifyBack"><img src="https://www.dropbox.com/s/gfzjsdfp1lo293g/Welcome-amico.png?raw=1" alt="Material" />
                        <button className="verifyButton" onSubmit={this.handleSubmit}>Click Me</button>
                    </div>
                </center >
            </div >
        );
    }
}


export default EmailVerify;