import mongoose, { Schema } from 'mongoose'

const keySchema = new Schema({
  authId: String,
  key: String,
  secret: String,
  type: String,
  description: String,
  exchange: String,
  validFrom: String,
  validTo: String,
  active: Boolean,
  botId: String
})

export default mongoose.model('Key', keySchema)
