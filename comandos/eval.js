exports.run = async (client, message, args, color, prefix) => {

    const Discord = require('discord.js')

    if (message.author.id !== '466679263127404554' && message.author.id !== '586396271431122976' && message.author.id !== '643499869612277782') return message.reply(":7775: | você não possui permissão para usar esse comando.")
    try {
        let abdiellindao = args.join(" ");
        let abdieltotoso = eval(abdiellindao);

        if (typeof abdieltotoso !== 'string')
            abdieltotoso = require('util').inspect(abdieltotoso, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Eval')
        .setDescription('⊹⊱•••《 ✮ ✮ ✮ 》•••⊰⊹')
        .setColor('#ff47ec')
        .addField('Entrada', abdiellindao)
        .addField(' Saida',  abdieltotoso)

  message.channel.send(embed)
    } catch(e) {
        message.channel.send(e);
    }
}

exports.help = { 
    name: 'eval',
}