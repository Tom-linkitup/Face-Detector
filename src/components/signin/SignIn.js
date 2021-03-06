import React, { Component } from 'react';

class SignIn extends Component {

    state ={
        signInEmail:"",
        signInPassword:""
    }

    onEmailChange = (e) => {
        this.setState({signInEmail: e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({signInPassword: e.target.value})
    }

    onSubmitSignIn = () => {
        fetch("https://frozen-sierra-19157.herokuapp.com/signin", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.id){
                this.props.loadUser(data)
                this.props.onRouteChange("home")
            }
        })        
    }

    render() {
        const {onRouteChange} = this.props
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">  
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5">Email</label>
                            <input 
                            className="pa2 input-reset bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5">Password</label>
                            <input 
                            className="b pa2 input-reset bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            onChange={this.onPasswordChange}
                            />
                        </div>
                    </fieldset>
                <div className="">
                    <input 
                    onClick={this.onSubmitSignIn}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" 
                    type="submit" 
                    value="Sign in" 
                    />
                </div>
                <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange("register")} className="f5 link dim black db pointer">Register</p>
                </div>
            </div>
            </main>
            </article>        
        );
    }
}

export default SignIn;
