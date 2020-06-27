import React, { Component } from 'react'
import "./imageLinkForm.css"

export default class ImageLinkForm extends Component {
    render() {
        return (
            <div>
                <p className="f3">
                    {"This magic brain will detect faces"}
                </p>
                <div className="center">
                    <div className="center form pa4 br3 shadow-5">
                        <input type="text" className="f4 pa2 w-70 center" onChange={this.props.change}/>
                        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                        onClick={this.props.submit}
                        >Detect</button>
                    </div>
                </div>
            </div>
        )
    }
}
