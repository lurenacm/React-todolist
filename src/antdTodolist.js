import React, { Component, Fragment } from 'react'
import store from './store/index'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd' 

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
                    <Input placeholder="Basic usage" style={{width: "300px", marginRight: "10px"}} onChange={this.chang} />
                    <Button type="primary" onClick={this.submit}>提交</Button>
                    <List
                        style={{ marginTop:"20px", width: "400px"}}
                        size="small"
                        bordered
                        dataSource={this.state.dataList}
                        renderItem={item => <List.Item>{item}</List.Item>}
                        />
                </div>
            </Fragment>
        )
    }

    chang(e) {
        const action = {
            type: 'changValue',
            value: e.target.value
        }
        store.dispatch(action)
    }

    submit() {
        const action = {
            type: 'SUBMIT'
        }
        store.dispatch(action)
    }

    listenerFunc() {
        this.setState(store.getState())
    }
}

export default AntdTodoList