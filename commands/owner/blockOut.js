const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const Blacklist = require("../../models/blacklist")
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "blockOut",
  description: "asd",
  owner: true,
  run: async (client, message, args) => {

    const id = args[0]
    if(!id) return error(message, 'No user specified!')
    if(isNaN(id)) return error(message, 'That ID is not a válid!')

    const user = await client.users.fetch(id)

    const data = await Blacklist.findOne({ userId: id })
    if(!data) return error(message, 'This user is already user block!')

    await Blacklist.deleteOne({ userId: id })

      return success(message, `**${user.username}** has been removed to the blacklist!`)
  },
};