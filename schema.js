const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    id: Number,
    name: String
})

//스키마를 가지고 모델을 만든다.
module.exports = mongoose.model('member', memberSchema, 'member')