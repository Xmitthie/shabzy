const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "invite",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

   if(!message.guild.members.me.permissions.has("AttachmentFiles")) return error(message, "I'm missing permissions!")

   const embed = new EmbedBuilder()

   .setTitle(`My invite link 😄`)
   .setDescription(`[Invite Client](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
   .addFields({ name: `My commands!`, value: `To see my commands use **7help** or use **7kawaii**!`})
   .setFooter({ 
    iconURL: message.author.displayAvatarURL({ dynamic: true }),
    text: `Solicited for: ${message.author.username} 😄`})
   .setColor(7900386)

   message.reply({ embeds: [embed] })
  },
};