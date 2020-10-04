import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button } from 'antd' 

class AntdTodoList extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Input placeholder="Basic usage" style={{width: "300px", marginRight: "10px"}} />
                    <Button type="primary">提交</Button>
                </div>
            </Fragment>
        )
    }
}

export default AntdTodoList