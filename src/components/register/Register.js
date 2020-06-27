import React, { Component } from 'react';

class Register extends Component {

    state ={
        email:"",
        password:"",
        name:""
    }
    onNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    onSubmitRegister = () => {
        fetch("https://frozen-sierra-19157.herokuapp.com/register", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
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
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">  
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                            <input 
                            className="pa2 input-reset bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            onChange={this.onNameChange}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                            <input 
                            className="pa2 input-reset bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            onChange={this.onEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset bg-transparent hover-bg-black hover-white w-100" 
                            type="password"
                            onChange={this.onPasswordChange}/>
                        </div>
                    </fieldset>
                <div className="">
                    <input 
                    onClick= {this.onSubmitRegister}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" 
                    type="submit" 
                    value="Register" 
                    />
                </div>
            </div>
            </main>
            </article>  
        );
    }
}

export default Register;
