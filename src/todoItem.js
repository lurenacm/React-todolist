import React, {Component} from 'react'
import PropTypes from 'prop-types'

class todoItem extends Component {
    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }

    // 利用生命周期周期函数判断是否需要更新子组件，父组件生命周期render() 发生变化子组件的render函数也会重新渲染。shouldComponentUpdate() 可以判断是否需要更新组件
    shouldComponentUpdate(nextProp, nextState) {
        if (nextProp.item !== this.props.item) {
            return true
        } else {
            return false
        }
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
    item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    index: PropTypes.number
}

// prop 传递的默认值
todoItem.defaultProps = {
    item: 'hello world'
}

export default todoItem