import React, { Component } from 'react'

export default class Rank extends Component {
    render() {
        const {name, entries} = this.props
        return (
            <div>
                <div className="f3 white">
                    {`${name} , your current entry is...`}
                </div>
                <div className="f1 white">
                    {entries}
                </div>
            </div>
        )
    }
}
