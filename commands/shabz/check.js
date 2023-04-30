const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "perms",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {
    
    const id = await client.guilds.cache.get(args[0]) || client.guilds.cache.get(message.guild.id);
    if(!id.members.me.permissions.has("Administrator")) return error(message, "No have perms in the server!")

    return success(message, "I have perms in the server")
  },
};