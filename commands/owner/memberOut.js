const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "memberOut",
  description: "asd",
  owner: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    const id = args[0]
    if(!id) return error(message, 'No user specified!')
    if(isNaN(id)) return error(message, 'That ID is not a válid!')

    const user = await client.users.fetch(id)

    const data = await Member.findOne({ userId: id })
    if(!data) return error(message, 'This user was never a member!')

    await Member.deleteOne({ userId: id })

      return success(message, `**${user.username}** no longer has member permissions`)
  },
};