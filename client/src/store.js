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
    tasks: [],
    activeTask: {},
    lists: [],


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
    setTask(state, tasks) {
      state.tasks = tasks
    },
    setActiveTask(state, activeTask) {
      state.activeTask = activeTask
    },
    setLists(state, lists) {
      state.lists = lists
    },

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

    //#endregion


    //#region -- LISTS --
    async createList({ dispatch, commit }, listData) {
      try {
        let res = await api.post('lists/', listData)
        dispatch('getLists')
      } catch (error) {
        console.error(error)
      }
    },
    async getLists({ dispatch, commit }, payload) {
      try {
        let res = await api.get('lists')
        commit('setLists', res.data)
      } catch (error) { console.log(error) }
    },

    async getListsByBoardId({ dispatch, commit }, payload) {
      try {
        let res = await api.get('boards/' + payload + '/lists')
        commit('setLists', res.data)

      } catch (error) {
        console.error(error)
      }
    }
  },
})

  //#endregion
