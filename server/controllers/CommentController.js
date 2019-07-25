//NOTE use populate here
import express from 'express'
import _commentService from '../services/CommentService.js'



export default class CommentController {
  async createComment(req, res, next) {
    try {
      let newComment = await _commentService.create(req.body)
      res.send(newComment)
    } catch (error) { next(error) }
  }
  async getCommentsById(req, res, next) {
    try {
      let commentById = await _commentService.findById(req.params.commentId)
      res.send(commentById)
    } catch (error) { next(error) }
  }
  async deleteComment(req, res, next) {
    try {
      let deletedComment = await _commentService.findByIdAndDelete(req.params.commentId)
      res.send('comment deleted')
    } catch (error) {
      next(error)
    }
  }

  constructor() {
    this.router = express.Router()
      .post('', this.createComment)
      .get('/:commentId', this.getCommentsById)
      .delete('/:commentId', this.deleteComment)
  }




}