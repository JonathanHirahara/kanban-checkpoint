import mongoose from 'mongoose'

let _schema = new mongoose.Schema({
  task: { type: String, required: true }
}, { timestamps: true })

export default mongoose.model('Task', _schema)