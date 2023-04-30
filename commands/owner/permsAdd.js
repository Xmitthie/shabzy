const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const Owner = require("../../models/owner")
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "permsAdd",
  description: "asd",
  run: async (client, message, args) => {

    if(message.author.id !== hershell) return;

    const id = args[0]
    if(!id) return error(message, 'No user specified!')
    if(isNaN(id)) return error(message, 'That ID is not a válid!')

    const user = await client.users.fetch(id)

    const data = await Owner.findOne({ userId: id })
    if(data) return error(message, 'This user is already user owner perms!')
    if(!data){
      const nuevo = new Owner({
        userId: user.id,
        username: user.username,
      });
      await nuevo.save();
      return success(message, `**${user.username}** has been added to the owners!`)
    };
  },
};