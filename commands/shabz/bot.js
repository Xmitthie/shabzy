const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "bot",
  description: "asd",
  block: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    if(!args[0]) return error(message, 'No user specified!')

    if(args[0].length !== 19|| isNaN(args[0])) {
        return error(message, `\`${args[0]}\` is not a válid id!`)  
    }

    message.reply({ embeds: [
        new EmbedBuilder()
        .setTitle('Your bot!')
        .setDescription(`[Link of your bot client](https://discord.com/api/oauth2/authorize?client_id=${args[0]}&permissions=8&scope=bot)`)
        .setFooter({
            iconURL: message.author.displayAvatarURL({ dynamic: true }),
            text: `Requested by: ${message.author.tag} 😄`
        })
        .setColor(7900386)
    ]});
  },
};