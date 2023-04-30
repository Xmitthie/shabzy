const { EmbedBuilder } = require("discord.js");
const dayjs = require('dayjs')
const { error, hershell, success } = require("../lib/util");
const Blacklist = require("../../models/blacklist");
module.exports = {
  name: "blockList",
  description: "asd",
  owner: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    let data = await Blacklist.find();
    data = data.slice(0, 10)
    
    const blocks = data.map(x => `**User:** ${x.username} | **userId:** ${x.userId}`).join("\n\n") || "No members :D"

    success(message, `${blocks}`)
  },
};      