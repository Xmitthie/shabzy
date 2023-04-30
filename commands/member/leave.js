const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const Guilds = require("../../models/guilds")
const dayjs = require('dayjs')
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "leave",
  description: "asd",
  auth: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    let id = await client.guilds.cache.get(args[0])
    if(!id) return error(message, "I'm not on that server!")

    let guildPriv = await Guilds.findOne({ guildId: id })
    if(guildPriv) return error(message, 'That server is one of the servers privated!')

    id.leave();
    success(message, `**${client.user.username}** has leave the server **${id.name}**!`)
  },
};