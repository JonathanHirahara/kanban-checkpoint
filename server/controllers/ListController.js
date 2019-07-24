import express from 'express'
import _listService from '../services/ListService.js'
import _taskService from '../services/TaskService.js'


export default class ListController {
  async createList(req, res, next) {
    try {
      let newList = await _listService.create(req.body)
      res.send(newList)
    } catch (error) { next(error) }
  }



  async getListById(req, res, next) {
    try {
      if (!req.params.listId) {
        return res.status(400).send('List not found')
      }
      let listById = await _listService.findById(req.params.listId)
      res.send(listById)
    } catch (error) { next(error) }
  }

  async deleteList(req, res, next) {
    try {
      let deleteList = await _listService.findByIdAndDelete(req.params.listId)
      res.send('List Deleted!')
    } catch (error) { next(error) }
  }

  async editList(req, res, next) {
    try {
      let editList = await _listService.findByIdAndUpdate(req.params.listId, req.body)
      res.send(editList)
    } catch (error) { next(error) }
  }

  async getTasksByListId(req, res, next) {
    try {
      let allTasks = await _taskService.find({ listId: req.params.id })
      res.send(allTasks)
    } catch (error) { next(error) }
  }

  constructor() {
    this.router = express.Router()
      .post('', this.createList)
      .get('/:listId', this.getListById)
      .get('/:id/tasks', this.getTasksByListId)
      .put('/:listId', this.editList)
      .delete('/:listId', this.deleteList)

  }
}