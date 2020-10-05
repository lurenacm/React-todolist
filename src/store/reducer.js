import { CHANG_VALUE, SUBMIT, ON_DELETE_ITEM } from "./actionType"

// 所有数据仓库
const defaultStore = {
    inputValue: '',
    dataList: [ 'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.']
}

export default (state= defaultStore, action) => {
    if (action.type === CHANG_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === SUBMIT) { 
        const newState = JSON.parse(JSON.stringify(state))
        newState.dataList.push(newState.inputValue)
        newState.inputValue = ""
        return newState
    } 
    if (action.type === ON_DELETE_ITEM) { 
        const newState = JSON.parse(JSON.stringify(state))
        newState.dataList.splice(action.index, 1)
        return newState
    }
    return state
}