const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping recebido");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require("fs");
console.log("♨️ Ligando bot de div...")
const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true,
    messageCacheMaxSize: 2024,
    fetchAllMembers: true,
    disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
    messageCacheLifetime: 1680,
    messageSweepInterval: 1680
});
const config = require("./config.json")
const { Client, Util } = require('discord.js');
var token = config.token
var prefix = config.prefix
var dono = config.dono

client.login(token)

client.on("message", (message) => {

    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    }   

     catch (e) {
        console.log(e.stack);
         message.reply("**Esse comando não existe ou foi ultilizado de maneira incorreta! **");
    }
    
let convite = /(discord.gg|discordapp.com\/invite\/)\/(invite)?/ig.test(message.content)
if(convite === true) {
if(!message.member.hasPermission("ADMINISTRATOR")) return;
  
  
let embed = new Discord.RichEmbed()
.setAuthor("Anti Invite!")
.setDescription("**Foi detectado que 1 usuário acaba de mandar 1 convite em seu servidor!**")
.addField("Nick:", message.author.tag)
.addField("ID:", message.author.id)
.addField("Canal:", message.channel)
.setColor("RED")
message.guild.owner.send(embed)
          
}})

client.on('message', message => {
    if(message.content.startsWith(`<@${client.user.id}>`)) {
        const embed = new Discord.RichEmbed()
        
        .setTitle(`Olá ${message.author.tag}, está perdido?`)
        .setDescription(`Se você se encontra com dúvidas do que eu posso fazer dirija-se rapidamente a um chat de comandos e digite: ${prefix}ajuda\n\n` +
                        `<a:sirenevermelha:703882054366134344> Suporte: [Clique aqui](https://discord.gg/Kss8XMr)`)
        .setThumbnail(client.user.avatarURL)
        .setColor("#ff47ec")

        message.channel.send(embed);
    }
});


client.on('guildCreate', guild => {
   const moment = require('moment')
    let canal = client.channels.get('747265517693304963')
    let icon = guild.iconURL || "https://loritta.website/assets/img/unknown.png"
    let embedentrada = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail(icon)
    .setTitle(`**Entrei em um servidor novo** \`${guild.name}\``, true)
    .addField(`**Nome do servidor**`, `\`${guild.name}\``, true)
    .addField(`**Id do servidor**`, `\`${guild.id}\``, true)
    .addField('**Membros:**', `\`${guild.memberCount}\``, true)
    .addField('**Região do servidor:**', `\`${guild.region}\``, true)
    .addField('**Dono**', `${guild.owner}`, true)
    .addField('**Id do dono**', `\`${guild.ownerID}\``, true)
    .addField('**Criado em**', `\`${moment.utc(guild.createdAt).format('lll')}\``, true)
    .setColor('PURPLE')

    canal.send(embedentrada)
});

client.on('guildDelete', guild => {
   const moment = require('moment')
    let canal = client.channels.get('747265569077854248')
    let icon = guild.iconURL || "https://loritta.website/assets/img/unknown.png"
    let embedsaida = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail(icon)
    .setTitle(`**Acabei de sair de um servidor <a:tristeamora:692798031313240176>** \`${guild.name}\``, true)
    .addField(`**Nome do servidor**`, `\`${guild.name}\``, true)
    .addField(`**Id do servidor**`, `\`${guild.id}\``, true)
    .addField('**Membros:**', `\`${guild.memberCount}\``, true)
    .addField('**Região do servidor:**', `\`${guild.region}\``, true)
    .addField('**Dono**', `${guild.owner}`, true)
    .addField('**Id do dono**', `\`${guild.ownerID}\``, true)
    .setColor('PURPLE')

    canal.send(embedsaida)
});

client.on("guildCreate", async guild => {
  guild.createRole({
  name: `Perm da ${client.user.username}`,
  color: '#ff5c8e',
})});


client.on("ready", () => {
      let logs = client.channels.get('753411503620882493')
      logs.send(`Bot \`${client.user.username}\` foi iniciado, com ${client.users.size} usuários, em ${client.guilds.size} servidores.`);
});

client.on("ready", () => {
    console.log(`${client.user.username} foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores. \nhttps://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
    client.user.setPresence({ game: { name: config.Status, type: 'STREAMING', url: 'https://discord.gg/Kss8XMr'}});

let status = [
  { name: `${prefix}ajuda`, type: 'STREAMING', url: 'https://twitch.tv/vdc'},
  { name: `Para ${client.users.size} Usuários`, type: 'STREAMING', url: 'https://twitch.tv/abdieel404'},
  { name: `Realese fofozap`, type: 'STREAMING', url: 'https://twitch.tv/abdiel404'},
  { name: `Meu prefixo é: ${prefix}`, type: 'STREAMING', url: 'https://twitch.tv/abdiel404'},
  { name: `Em ${client.guilds.size} servidores`, type: 'STREAMING', url: 'https://twitch.tv/abdiel404'},
  { name: `Realese no Topo`, type: 'STREAMING', url: 'https://twitch.tv/abdiel404'}
]

  function st() {
            let rs = status[Math.floor(Math.random() * status.length)];
            client.user.setPresence({ game: rs });
        }
        st();
        setInterval(() => st(), 7000);  //10000 = 10Ms = 10 segundos
    });


client.on('guildCreate', guild => {

const mensagem = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setDescription('> <a:olaamora:688282988785827861> **Olá, eu sou a ' + client.user.username + ', um bot de anúncios DM, divulgação, moderação, nsfw, etc...**')
.setThumbnail(client.user.avatarURL)
.addField('<:porco:703876488797093921> Me adicione em seu servidor:', `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=2146958847&scope=bot)**`)
.addField('<a:sirenevermelha:703882054366134344> Caso você esteja pensando:', `> **"Nossa ela tem permissão de adm ela vai derrubar meu servidor."**\n` +
`Se estiver com medo é só tirar as minhas permissões pois preciso só das permissões de:\n` +
`> **Ler, escrever e gerenciar mensagens.**`)
.addField(`<a:partner2:703884829615194112> Use ${prefix}ajuda para saber mais.`, `**[Entre em meu servidor ](https://discord.gg/3Ggv73r)**`)
.setColor('#ff47ec')
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
  

let ons = guild.members.filter(m => m.presence.status !== 'offline')
      
ons.forEach(f1 => {f1.send(mensagem)});       


});