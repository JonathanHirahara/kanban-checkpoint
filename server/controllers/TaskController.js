import express from 'express'
import _taskService from '../services/TaskService.js'
import _commentService from '../services/CommentService.js'

export default class TaskController {

  async createTask(req, res, next) {
    try {
      let createTask = await _taskService.create(req.body)
      res.send(createTask)

    } catch (error) { next(error) }
  }

  async getTaskById(req, res, next) {
    try {
      let taskById = await _taskService.findById(req.params.taskId)
      res.send(taskById)
    } catch (error) { next(error) }
  }

  async deleteTask(req, res, next) {
    try {
      let deleteTask = await _taskService.findByIdAndDelete(req.params.taskId)
      res.send('Task Deleted!')
    } catch (error) { next(error) }
  }

  async getCommentsByTaskId(req, res, next) {
    try {
      let allComments = await _commentService.find({ taskId: req.params.id })
      res.send(allComments)
    } catch (error) { next(error) }
  }



  constructor() {
    this.router = express.Router()
      .post('', this.createTask)
      .get('', this.getTaskById)
      .get('/:id/comments', this.getCommentsByTaskId)
      .delete('/:taskId', this.deleteTask)

  }
}