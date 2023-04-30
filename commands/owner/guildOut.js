const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const Owner = require("../../models/owner")
const Guilds = require("../../models/guilds")
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "guildOut",
  description: "asd",
  owner: true,
  run: async (client, message, args) => {

    let id = await client.guilds.cache.get(args[0])
    if(!id) return error(message, "I'm not on that server!")

    let guildPriv = await Guilds.findOne({ guildId: id })
    if(!guildPriv) return error(message, 'That server was never one of the servers privated!')
    
    await Guilds.deleteMany({ guildId: id});

    return success(message, `**${id.name}** has been removed to the guilds privates!`)
  },
};