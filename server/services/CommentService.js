import mongoose from 'mongoose'
let Schema = mongoose.Schema
let ObjectId = mongoose.Schema.Types.ObjectId


let _schema = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  boardId: { type: ObjectId, ref: 'Board', required: true },
  listId: { type: ObjectId, ref: 'List', required: true },
  taskId: { tyoe: ObjectId, ref: 'Task', required: true }

})

export default mongoose.model('Comment', _schema)