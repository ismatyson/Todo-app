import * as types from '../store/types'

export const addTask  = (payload) => ({
    type: types.NEWTASK,
    payload
})