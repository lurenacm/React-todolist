import React, {Component} from 'react';

class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal : '',
            list: []
        }
    }
    render() {
        return (
        <div>
            <input value={this.state.inputVal} onChange={this.chang.bind(this)}/>
            <button onClick={this.pushList.bind(this, this.state.inputVal)}>提交</button>
            <ul>
                {
                    this.state.list.map( (item, index) => {
                        return (
                            <li onClick={this.deleteList.bind(this, index)} key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
        )
    }

    chang(e) {
        this.setState({
            inputVal : e.target.value
        })
    }
    pushList(val) {
        this.setState({
        list:[...this.state.list, val],
        inputVal: ''
        })
    }
    deleteList(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list:list
        })
    }
}

export default Todolist
