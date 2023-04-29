const { Schema, model, types } = require('mongoose')

const BlacklistSchema = new Schema({
    userId: String,
    username: String,
    reason: String,
    author: String,
    authorId: String,
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Blacklist', BlacklistSchema)