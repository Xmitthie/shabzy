const { Schema, model, types } = require('mongoose')

const MemberSchema = new Schema({
    userId: String,
    username: String,
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Member', MemberSchema)