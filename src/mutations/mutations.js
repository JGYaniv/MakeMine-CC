const types = {
    ADD_USER: 'ADD_USER',
    REMOVE_USER: 'REMOVE_USER',
    UPDATE_USER: 'UPDATE_USER',
    SET_MODE: 'SET_MODE',
    SET_SELECTED: 'SET_SELECTED'
} 

const mutations = {
    [types.ADD_USER](state, payload) {
        state.users.push({...payload.user, id: state.users.length+1})
    },
    [types.REMOVE_USER](state, payload) {
        let users = state.users.filter(user => user.userName != payload.user.userName)
        state.users = users
        state.ui.selected = null
    },
    [types.UPDATE_USER](state, payload) {
        let users = []
        state.users.forEach(user => {
            if (user.id === payload.user.id){
                users.push(Object.assign({}, user, payload.user))
            }
            else users.push(user)
        })
        state.users = users
    },
    [types.SET_MODE](state, payload) {
        state.ui.mode = payload.mode
    },
    [types.SET_SELECTED](state, payload) {
        state.ui.selected = payload.selected
    }
}

export default mutations