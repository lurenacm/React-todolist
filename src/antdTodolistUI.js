import React from 'react'
import { Input, Button, List } from 'antd'

// 无状态组件，但UI组件内只有render() 生命周期函数时，使用无状态组件为佳，性能更高。
const AntdTodoListUI = (props) => {
    return (
            <div>
                <div style={{marginTop: "20px", marginLeft: "100px"}}>
                    <Input placeholder="Basic usage" style={{width: "300px", marginRight: "10px"}} onChange={props.chang} value={props.inputValue} />
                    <Button type="primary" onClick={props.submit}>提交</Button>
                    <List
                        style={{ marginTop:"20px", width: "400px"}}
                        size="small"
                        bordered
                        dataSource={props.dataList}
                        renderItem={(item, index) => <List.Item onClick={(index) => {props.onDeleteItem(index)}}>{item}</List.Item>}
                        />
                </div>
            </div>
    )
}

// class AntdTodoListUI extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <div style={{marginTop: "20px", marginLeft: "100px"}}>
//                     <Input placeholder="Basic usage" style={{width: "300px", marginRight: "10px"}} onChange={this.props.chang} value={this.props.inputValue} />
//                     <Button type="primary" onClick={this.props.submit}>提交</Button>
//                     <List
//                         style={{ marginTop:"20px", width: "400px"}}
//                         size="small"
//                         bordered
//                         dataSource={this.props.dataList}
//                         renderItem={(item, index) => <List.Item onClick={(index) => { this.props.onDeleteItem(index)}}>{item}</List.Item>}
//                         />
//                 </div>
//             </Fragment>
//         )
//     }
// }

export default AntdTodoListUI