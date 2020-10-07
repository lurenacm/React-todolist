// import React from 'react';
// import ReactDOM from 'react-dom';
// // import Todolist from './APP'
// // import APP from './APP'
// import AntdTodoList from './antdTodolist'


// ReactDOM.render(
//     // <Todolist />,
//     // <APP />,
//     <AntdTodoList />,
//   document.getElementById('root')
// );

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store2'
import Todolist2 from './todolist2'

// 将store 通过组件Provider传递到下面的每个组件中
const App = (
  <Provider store={store}>  
    <Todolist2></Todolist2>
  </Provider>
)

ReactDOM.render(
    App,
    document.getElementById('root')
)
