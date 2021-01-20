const mongoose = require('mongoose')

const { Schema, model } = mongoose

const questionSchema = new Schema({
  __v: { type: Number, select: false },
  guestName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  personNum: { type: String, required: true },
  visitTime: { type: String, required: true },
  siteName: { type: String, required: true }
})

module.exports = model('visitor', questionSchema)
