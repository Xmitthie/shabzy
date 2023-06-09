const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "memberAdd",
  description: "asd",
  owner: true,
  run: async (client, message, args) => {

    if(message.author.id !== hershell) return;

    const id = args[0]
    if(!id) return error(message, 'No user specified!')
    if(isNaN(id)) return error(message, 'That ID is not a válid!')

    const user = await client.users.fetch(id)

    const data = await Member.findOne({ userId: id })
    if(data) return error(message, 'This user is already member!')
    if(!data){
      const nuevo = new Member({
        userId: user.id,
        username: user.username,
        date: new Date()
      });
      await nuevo.save();
      return success(message, `**${user.username} now has member permissions!`)
    };
  },
};