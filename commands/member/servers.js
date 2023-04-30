const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const Guilds = require("../../models/guilds")
const dayjs = require('dayjs')
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "guildList",
  description: "asd",
  auth: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    const guilds = await Guilds.find();
    let data = client.guilds.cache.sort()
    
    let guild = data.map(x => `**Name:** ${x.name} | **ID:** ${x.id} | **Users:** ${x.memberCount}`)
    guild = guild.slice(0, 10).join('\n')

    success(message, `${guild}`)
  },
};