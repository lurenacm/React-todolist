import React, {Component} from 'react';
import TodoItem from './todoItem';

class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal : '',
            list: []
        }
        this.deleteList= this.deleteList.bind(this)
        this.chang= this.chang.bind(this)
    }
    render() {
        return (
        <div>
            <input value={this.state.inputVal} onChange={this.chang}/>
            <button onClick={this.pushList.bind(this, this.state.inputVal)}>提交</button>
            <ul>
                {
                    this.state.list.map( (item, index) => {
                        return (
                            <TodoItem  item={item} key={index}  index={index} deleteItem={this.deleteList}/>
                        )
                    })
                }
            </ul>
        </div>
        )
    }

    chang(e) {
        // this.setState({
        //     inputVal : e.target.value
        // })
        const value =e.target.value
        this.setState( () => ({
            inputVal: value
        }))
    }
    pushList(val) {
        this.setState({
        list:[...this.state.list, val],
        inputVal: ''
        })
    }
    deleteList(index) {
        // 异步赋值
        this.setState((preState) => {
            const list = [...preState.list]
            list.splice(index, 1)
            return {list}
        })
        // const list = [...this.state.list]
        // list.splice(index, 1)
        // this.setState({
        //     list:list
        // })
    }
}

export default Todolist
