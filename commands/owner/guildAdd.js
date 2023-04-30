const { EmbedBuilder } = require("discord.js");
const Member = require("../../models/member");
const Owner = require("../../models/owner")
const Guilds = require("../../models/guilds")
const { error, hershell, success } = require("../lib/util");
module.exports = {
  name: "guildAdd",
  description: "asd",
  owner: true,
  run: async (client, message, args) => {

    let id = await client.guilds.cache.get(args[0])
    if(!id) return error(message, "I'm not on that server!")

    let guildPriv = await Guilds.findOne({ guildId: id })
    if(guildPriv) return error(message, 'That server is one of the servers privated!')
    if(!guildPriv) {
        const newGuild = new Guilds({
            guildId: id,
            guildName: id.name
        });
        await newGuild.save();
        return success(message, `**${id.name}** has been added to the guilds privates!`)
    };

  },
};