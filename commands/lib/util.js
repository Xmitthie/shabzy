const { EmbedBuilder } = require("discord.js")

const error = (message, msg) => {
    message.reply({ embeds:[
        new EmbedBuilder()
        .setDescription(msg)
        .setColor("FF0000")
    ]
    });
};

const success = (message, msg) => {
    message.reply({ embeds:[
        new EmbedBuilder()
        .setDescription(msg)
    ]});
};

const hershell = "793161028988960798";
module.exports = { hershell, error, success };