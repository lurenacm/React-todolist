import React, { Component, Fragment } from 'react'
import store from './store/index'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd' 

class AntdTodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        console.log(this.state)
    }

    render() {
        return (
            <Fragment>
                <div style={{marginTop: "20px"}}>
                    <Input placeholder="Basic usage" style={{width: "300px", marginRight: "10px"}} />
                    <Button type="primary">提交</Button>
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
}

export default AntdTodoList