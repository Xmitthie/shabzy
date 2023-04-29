const { Schema, model, types } = require('mongoose')

const OwnerSchema = new Schema({
    userId: String,
    username: String,
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Owner', OwnerSchema)