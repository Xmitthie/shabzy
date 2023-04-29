const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "clean",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    message.guild.channels.cache.forEach(channel => channel.delete());
    
  },
};