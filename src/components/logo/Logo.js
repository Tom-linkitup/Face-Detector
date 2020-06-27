import React, { Component } from 'react'
import Tilt from "react-tilt"
import brain from "./brain.png"
import "./Logo.css"

export default class Logo extends Component {
    render() {
        return (
            <div className="ma4 mt0">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 30 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner pa4">
                        <img style={{paddingTop: "1px"}} src={brain} alt="logo" className=""/>
                    </div>
                </Tilt>
            </div>
        )
    }
}
