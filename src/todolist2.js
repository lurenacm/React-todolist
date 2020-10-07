import React from 'react'
import { connect } from 'react-redux'

const Todolist2 = (props) => {
            const { inputValue, list, changInput, submit }= props
             return (
                 <div>
                     <input value={inputValue}  onChange={changInput}/>
                     <button onClick={submit}>提交</button>
                     <ul>
                         {
                              list.map( (item, index) => {
                                    return (
                                     <li key={index}>{item}</li>
                                    )
                             })
                         }
                     </ul>
                 </div>
             )
}

// class Todolist2 extends Component {
//     render() {
//        const { inputValue, list, changInput, submit }= this.props
//         return (
//             <div>
//                 <input value={inputValue}  onChange={changInput}/>
//                 <button onClick={submit}>提交</button>
//                 <ul>
//                     {
//                          list.map( (item, index) => {
//                                return (
//                                 <li key={index}>{item}</li>
//                                )
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changInput(e) {
            const CHANG_INPUT = 'chang_input'
            const action = {
                type: CHANG_INPUT,
                value: e.target.value
            }
            dispatch(action)
        },
        submit() {
            const ADD_LIST = 'add_list'
            const action = {
                type: ADD_LIST
            }
            dispatch(action)
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (Todolist2)