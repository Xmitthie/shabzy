const { Schema, model, types } = require('mongoose')

const GuildSchema = new Schema({
    guildId: String,
    guildName: String,
})

module.exports = model('Guild', GuildSchema)