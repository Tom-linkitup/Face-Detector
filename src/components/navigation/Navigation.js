import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        const {onRouteChange, isSignedIn} = this.props
            if (isSignedIn){
                return (
                <nav className="" style={{display: "flex", justifyContent: "flex-end"}}>
                   <p onClick={() => onRouteChange("signout")} className="f3 link dim black underline pa3 pointer">
                       Sign Out
                   </p>
                </nav> 
                )
            } else {
                return (
                <nav className="" style={{display: "flex", justifyContent: "flex-end"}}>
                   <p onClick={() => onRouteChange("signin")} className="f3 link dim black underline pa3 pointer">Sign In</p>
                   <p onClick={() => onRouteChange("register")} className="f3 link dim black underline pa3 pointer">Register</p>
                </nav> 
                )
            }
    }
}
