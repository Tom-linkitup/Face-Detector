import React, { Component } from 'react';
import "./FaceRecognition.css"

class FaceRecognition extends Component {
    render() {
        return (
            <div className="center ma">
                <div className="absolute mt2">
                    <img id="inputimage" src={this.props.url} alt="" className="" width="500px" height="auto"/>
                    <div 
                    className="bounding-box" 
                    style={{
                        top: this.props.box.top_row, 
                        bottom: this.props.box.bottom_row,
                        right: this.props.box.right_col,
                        left: this.props.box.left_col}}></div>
                </div>
            </div>
        );
    }
}

export default FaceRecognition;
