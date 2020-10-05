import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
import { getChangValue, getSubmit, getOnDeleteItem } from "./store/actionCreator"

class AntdTodoList extends Component {
    constructor(props) {
        super(props)
        this.chang = this.chang.bind(this)
        this.listenerFunc = this.listenerFunc.bind(this)
        this.submit = this.submit.bind(this)

        this.state = store.getState()
        store.subscribe(this.listenerFunc)
        // console.log(this.state)
    }

    render() {
        return (
            <Fragment>
                <div style={{marginTop: "20px", marginLeft: "100px"}}>
                    <Input placeholder="Basic usage" style={{width: "300px", marginRight: "10px"}} onChange={this.chang} value={this.state.inputValue} />
                    <Button type="primary" onClick={this.submit}>提交</Button>
                    <List
                        style={{ marginTop:"20px", width: "400px"}}
                        size="small"
                        bordered
                        dataSource={this.state.dataList}
                        renderItem={(item, index) => <List.Item onClick={this.onDeleteItem.bind(this, index)}>{item}</List.Item>}
                        />
                </div>
            </Fragment>
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