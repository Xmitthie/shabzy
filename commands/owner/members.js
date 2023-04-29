const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const dayjs = require('dayjs')
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "members",
  description: "asd",
  owner: true,
  run: async (client, message, args, usMember, usOwner, usBlock) => {

    const data = await Member.find();
    
    const miembros = data.map(x => `**User:** ${x.username} | **userId:** ${x.userId}\n **Member since:** ${dayjs(x.date).format("D/M/YY - h:mm a")}`).join("\n\n") || "No members"

    success(message, miembros)
  },
};          