import React, {Component} from 'react'
import PropTypes from 'prop-types'

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

// prop 类型校验
todoItem.propTypes = {
    item: PropTypes.arrayOf(PropTypes.string, PropTypes.number),
    index: PropTypes.number
}

// prop 传递的默认值
todoItem.defaultProps = {
    item: 'hello world'
}

export default todoItem