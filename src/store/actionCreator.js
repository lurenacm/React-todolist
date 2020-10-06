import axios from 'axios'
import {CHANG_VALUE, SUBMIT, ON_DELETE_ITEM, INIT_LISTDATA} from "./actionType"

const getChangValue = (value) => {
    return {
        type: CHANG_VALUE,
        value
    }
}

const getSubmit = () => ({
    type: SUBMIT
})

const getOnDeleteItem = (index) => ({
    type: ON_DELETE_ITEM,
    index
})

const initListData = (data) => ({
    type: INIT_LISTDATA,
    data
})

const getListData = () => {
    // 中间可以接受参数 dispatch方法，派发给reducer
    return (dispatch) => {
        axios.get('./mock.json').then(res => {
            // console.log(res)
            const data = res.data
            const action = initListData(data)
            dispatch(action)
        }).catch(e => {
            console.log(e)
        })
    }
}

export {
    getChangValue,
    getSubmit,
    getOnDeleteItem,
    getListData,
    initListData
}