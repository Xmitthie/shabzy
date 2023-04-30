const { EmbedBuilder } = require("discord.js");
const dayjs = require('dayjs')
const { error, hershell, success } = require("../lib/util");
const Owner = require("../../models/owner");
module.exports = {
  name: "ownerList",
  description: "asd",
  owner: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    let data = await Owner.find();
    data = data.slice(0, 10)
    
    const owners = data.map(x => `**User:** ${x.username} | **userId:** ${x.userId}`).join("\n") || "No owners :D"

    success(message, `${owners}`)
  },
};      