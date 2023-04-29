const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const Blacklist = require("../../models/blacklist")
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "blockAdd",
  description: "asd",
  owner: true,
  run: async (client, message, args) => {

    const id = args[0]
    if(!id) return error(message, 'No user specified!')
    if(isNaN(id)) return error(message, 'That ID is not a válid!')

    const user = await client.users.fetch(id)

    const razon = args.slice(1).join(' ')
    if(!razon) return error(message, 'You forgot put a reason!')

    const data = await Blacklist.findOne({ userId: id })
    if(data) return error(message, 'This user is already user block!')
    if(!data){
      const nuevo = new Blacklist({
        userId: user.id,
        username: user.username,
        reason: razon,
        author: message.author.username,
        authorId: message.author.id
      });
      await nuevo.save();
      return success(message, `**${user.username}** has been added to the blacklist!`)
    };
  },
};