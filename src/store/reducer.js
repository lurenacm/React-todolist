// 所有数据仓库
const defaultStore = {
    inputValue: '123',
    dataList: [ 'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.']
}

export default (state= defaultStore, action) => {
    if (action.type === 'changValue') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state
}