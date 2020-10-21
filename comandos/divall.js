const Discord = require("discord.js")
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

const a = client.emojis.find(emoji => emoji.name === "errorbot");
const b = client.emojis.find(emoji => emoji.name === "certoamora");

if (message.author.id !== config.dono && message.author.id !== "466679263127404554") return message.reply(a + " | você não possui permissão para usar esse comando.");
message.delete()
 
let mensagem = args.join(" ")
let servidores = client.guilds.size
let usuarios = client.users.size

let embed = new Discord.RichEmbed()
  .setTitle(b + " DIVULGAÇÃO")
  .addField("Servidores:", `${servidores}`)
  .addField("Membros totais:", `${usuarios}`)
  .addField("Sua mensagem:", `${mensagem}`)
 
client.users.forEach((f) => {f.send(mensagem) && console.log('Divulgado para ::: ' + f.tag)},
message.channel.send(embed)
)}