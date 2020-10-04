import React, { Component, Fragment } from 'react'
import './app.css'

class APP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show:'show',
            hide: 'hide',
            toggleShow: true
        }
        this.toggle = this.toggle.bind(this)
    }

    render() {
        return (
            <Fragment>
                <div className={this.state.toggleShow ? this.state.show : this.state.hide}>hello world</div>
                <button onClick={this.toggle}>toggle</button>
            </Fragment>
        )
    }

    toggle() {
        this.setState( (preState) => ({
            toggleShow: !preState.toggleShow
        }))
    }
} 

export default APP