import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    tasks: {},
    lists: [],
    comments: {}


  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, activeBoard) {
      state.activeBoard = activeBoard
    },
    setLists(state, lists) {
      state.lists = lists
    },
    setTasks(state, taskData) {
      Vue.set(state.tasks, taskData.listId, taskData.data || [])
    },
    setComments(state, commentData) {
      Vue.set(state.comments, commentData.taskId, commentData.data)
    },
    resetState(state, ) {
      state.user = {}
    }

  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "boards" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "boards" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion

    //#region -- BOARDS --
    async getBoards({ commit, dispatch }) {
      try {
        let res = await api.get('boards')
        commit('setBoards', res.data)
      } catch (error) { console.error(error) }
    },

    async getBoardById({ commit, dispatch }, payload) {
      try {
        let res = await api.get('boards/' + payload.boardId)
        commit('setActiveBoard', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async addBoard({ commit, dispatch }, boardData) {
      try {
        let res = await api.post('boards', boardData)
        dispatch('getBoards')
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBoard({ dispatch, commit }, payload) {
      try {
        let res = await api.delete('boards/' + payload)
        router.push({ name: 'boards' })
        console.log(res)
      } catch (error) { console.error(error) }
    },

    //#endregion

    //#region -- LISTS --
    async createList({ dispatch, commit }, listData) {
      try {
        let res = await api.post('lists/', listData)
        dispatch('getListsByBoardId', listData.boardId)
      } catch (error) {
        console.error(error)
      }
    },

    async getListsByBoardId({ dispatch, commit }, payload) {
      try {
        let res = await api.get('boards/' + payload + '/lists')
        commit('setLists', res.data)

      } catch (error) {
        console.error(error)
      }
    },

    async deleteList({ dispatch, commit }, payload) {
      try {
        let res = await api.delete('lists/' + payload._id)
        dispatch('getListsByBoardId', payload.boardId)
        console.log(res)
      } catch (error) { console.error(error) }
    },
    //#endregion

    //#region --Tasks--

    async createTask({ dispatch, commit }, task) {
      try {
        let res = await api.post('tasks/', task)
        dispatch('getTasksByListId', task.listId)
        console.log(res)
      } catch (error) { console.error(error) }
    },

    async getTasksByListId({ dispatch, commit }, payload) {
      try {
        let res = await api.get('lists/' + payload + '/tasks')
        commit('setTasks', { listId: payload, data: res.data })
      } catch (error) { console.error(error) }
    },

    async deleteTask({ dispatch, commit }, payload) {
      try {

        let res = await api.delete('tasks/' + payload._id)
        dispatch('getTasksByListId', payload.listId)
      } catch (error) { console.error(error) }
    },
    async moveTask({ dispatch, commit }, taskData) {
      try {
        let res = await api.put('tasks/' + taskData.taskData._id, taskData.taskData)
        dispatch('getTasksByListId', taskData.taskData.listId)
        dispatch('getTasksByListId', taskData.oldListId)
      } catch (error) { console.error(error) }
    },

    //#endregion

    //#region --comments--

    async createComment({ dispatch, commit }, commentData) {

      try {
        let res = await api.post('comments/', commentData)
        dispatch('getCommentsByTaskId', commentData.taskId)
      } catch (error) { console.error(error) }
    },

    async getCommentsByTaskId({ commit, dispatch }, taskId) {
      try {

        let res = await api.get('tasks/' + taskId + '/comments')
        commit('setComments', { taskId, data: res.data })
      } catch (error) { console.error(error) }
    },
    async deleteComment({ dispatch, commit }, payload) {
      try {
        let res = await api.delete('comments/' + payload._id)
        dispatch('getCommentsByTaskId', payload.taskId)
      } catch (error) { console.error(error) }
    }
    //#endregion

    //NOTE this is the end of actions
  }

})

