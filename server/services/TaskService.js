import mongoose from 'mongoose'
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  task: { type: String, required: true },
  boardId: { type: ObjectId, ref: 'Board', required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  listId: { type: ObjectId, ref: 'List', required: true },

}, { timestamps: true })

export default mongoose.model('Task', _schema)