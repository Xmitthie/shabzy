const { Client, EmbedBuilder, Collection } = require('discord.js')

const { config } = require("dotenv");
const Discord = require("discord.js");
const client = new Client({ intents: [3276799] });
const fs = require("fs");
const ms = require("ms");

require("./conexion");

config();

const { error } = require('./commands/lib/util')
const Member = require("./models/member")
const Owner = require("./models/owner")
const Blacklist = require("./models/blacklist")

client.commands = new Collection();

const commandFolder = fs.readdirSync("./commands");

for (const folder of commandFolder) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`);

  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

client.on("ready", () => {
  console.log(`${client.user.tag} ready!`)
  client.user.setPresence({
    status: "dnd",
    game: {
      name: "discord.gg/peru",
    },
  });
});

client.on('messageCreate', async (message) => {
    const usMember = await Member.findOne({ userId: message.author.id })
    const usOwner = await Owner.findOne({ userId: message.author.id })
    const usBlock = await Blacklist.findOne({ userId: message.author.id })

    const prefix = '7';
    if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift();
  const cmd = client.commands.get(command);
  if(cmd) {
    if(cmd.auth && !usMember)
    return error(message, "You don't have permissions to execute this action!")
    if(cmd.block && usBlock)
    return error(message, "You don't have permissions to execute this action!")
    if(cmd.owner && !usOwner)
    return error(message, "You don't have permissions to execute this action!")
    return cmd.run(client, message, args, usMember, usOwner, usBlock)
  }
})

client.login(process.env.TOKEN)