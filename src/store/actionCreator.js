import {CHANG_VALUE, SUBMIT, ON_DELETE_ITEM} from "./actionType"

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

export {
    getChangValue,
    getSubmit,
    getOnDeleteItem
}