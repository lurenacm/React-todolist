import React, {Component} from 'react'

class todoItem extends Component {
    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }
    render() {
        return (
            <div onClick={this.deleteItem} key={this.props.index}>{this.props.item}</div>
        )
    }

    deleteItem(e) {
        // console.log(this.props.item)
        this.props.deleteItem(this.props.index)
    }
}

export default todoItem