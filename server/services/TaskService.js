import mongoose from 'mongoose'
import CommentService from './CommentService'
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  content: { type: String, required: true },
  boardId: { type: ObjectId, ref: 'Board', required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  listId: { type: ObjectId, ref: 'List', required: true },

}, { timestamps: true })

//CASCADE ON DELETE
_schema.pre('deleteMany', function (next) {
  //lets find all the lists and remove them
  Promise.all([
    CommentService.deleteMany({ listId: this._conditions._id }),
  ])
    .then(() => next())
    .catch(err => next(err))
})

export default mongoose.model('Task', _schema)