// store2 使用react-redux 模块编写, 
// 使用api: connect(),连接组件, mapStateToProps() 将state数据映射到Props, mapDispatchToProps() 将dispatch映射到props中

import { createStore } from "redux"
import reducer from './reducer'

const store = createStore(reducer)

export default  store