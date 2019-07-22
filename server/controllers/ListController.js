import express from 'express'
import _listService from '../services/ListService.js'



export default class ListController {
  async createList(req, res, next) {
    try {
      let newList = await _listService.create(req.body)
      res.send(newList)
    } catch (error) { next(error) }
  }

  async getAllLists(req, res, next) {
    try {
      let allLists = await _listService.find()
      res.send(allLists)
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


  constructor() {
    this.router = express.Router()
      .post('', this.createList)
      .get('/:listId', this.getListById)
      .put('/:listId', this.editList)
      .delete('/:listId', this.deleteList)
      .get('', this.getAllLists)
  }
}