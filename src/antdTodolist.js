import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import { getChangValue, getSubmit, getOnDeleteItem } from "./store/actionCreator"
import AntdTodoListUI from './antdTodolistUI'

class AntdTodoList extends Component {
    constructor(props) {
        super(props)
        this.chang = this.chang.bind(this)
        this.listenerFunc = this.listenerFunc.bind(this)
        this.submit = this.submit.bind(this)
        this.onDeleteItem = this.onDeleteItem.bind(this)
        this.state = store.getState()
        store.subscribe(this.listenerFunc)
        // console.log(this.state)
    }

    render() {
        return (
            <AntdTodoListUI inputValue={this.state.inputValue} chang={this.chang} submit={this.submit} dataList={this.state.dataList} onDeleteItem={this.onDeleteItem} />
        )
    }

    chang(e) {
       const action = getChangValue(e.target.value)
        store.dispatch(action)
    }

    submit() {
        const action = getSubmit()
        store.dispatch(action)
    }

    onDeleteItem(index) {
        const action = getOnDeleteItem(index)
        store.dispatch(action)
    }

    listenerFunc() {
        this.setState(store.getState())
    }
}

export default AntdTodoList