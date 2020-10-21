const Discord = require("discord.js")
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

const a = client.emojis.find(emoji => emoji.name === "errorbot");

if (message.author.id !== config.dono) return message.reply(a + " | você não possui permissão para usar esse comando.");
message.delete();
 
let on = client.users.filter(m => m.presence.status === 'online')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')
let todos = client.users.filter(m => m.presence.status === 'idle' || m.presence.status === 'dnd' || m.presence.status === 'online')
let off = client.users.filter(m => m.presence.status === 'offline')

let servidores = client.guilds.size
let usuarios = client.users.size

let mensagem = args.join(" ")
  let dev = client.users.get(config.dono)
      
message.channel.send(`<a:loadbot:683775351620632617>_** A mensagem está sendo enviada para:**_\n\n` +
`:green_circle:** ${on.size}** onlines\n` +
`:red_circle:** ${npertube.size}** ocupados\n` +
`:yellow_circle:** ${ausente.size}** ausentes\n\n` +
`:link:** Total de usuários:** ${todos.size}\n\n` +
`:black_circle:__** ${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)

on.forEach((f1) => {f1.send(mensagem)}); 
    
npertube.forEach((f2) => {f2.send(mensagem)});
    
ausente.forEach((f3) => {f3.send(mensagem)});

  dev.forEach((f4) => {
      message.channel.send(`<a:loadbot:683775351620632617>_** A mensagem está sendo enviada para:**_\n\n` +
`:green_circle:** ${on.size}** onlines\n` +
`:red_circle:** ${npertube.size}** ocupados\n` +
`:yellow_circle:** ${ausente.size}** ausentes\n\n` +
`:link:** Total de usuários:** ${todos.size}\n\n` +
`:black_circle:__** ${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)
    
  });
    
}