import Vuex from 'vuex'
import mutations from '../mutations/mutations'
import sampleState from './sample-state'

/////////////////////////////////////////////////////////////////////////
///////// switch sampleState with initState once API is connected //////
// const initState = {
//   users: [],
//   ui: {
//     mode: 'view'
//   }
// }
/////////////////////////////////////////////////////////////////////////

const createStore = () => new Vuex.Store({
  state: {
    ...sampleState,
  },
  getters: {
    getUsers: state => state.users,
    getMode: state => state.ui.mode,
    getSelected: state => state.ui.selected,
  },
  mutations,
})

export default createStore