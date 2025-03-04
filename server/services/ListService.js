import mongoose from "mongoose"
import TaskService from './TaskService'
import CommentService from './CommentService'
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId


let _schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  boardId: { type: ObjectId, ref: 'Board', required: true }
}, { timestamps: true })

//CASCADE ON DELETE
_schema.pre('deleteMany', function (next) {
  //lets find all the lists and remove them
  Promise.all([
    TaskService.deleteMany({ listId: this._conditions._id }),
    CommentService.deleteMany({ boardId: this._conditions._id })
  ])
    .then(() => next())
    .catch(err => next(err))
})

export default mongoose.model('List', _schema)