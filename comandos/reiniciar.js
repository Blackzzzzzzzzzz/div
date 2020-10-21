const Discord = require('discord.js')
const config = require("../config.json")

exports.run = (client, message, args) => {
if (message.author.id !== config.dono) message.reply("<a:errorbot:668159752777236549> | você não possui permissão para usar esse comando.");

    process.exit()
  
}