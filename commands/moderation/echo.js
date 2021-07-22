const Discord = require('discord.js');

module.exports = {
    name: 'echo',
    description: 'Alows you to embed a message.',
    args: true,
    usage: '<title> <message>',
    permissions: 'MANAGE_MESSAGES',
    execute(message, args) {
        const echoEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setFooter('Catbot', process.env.icon)

        switch (args.length) {
            case 1:
                echoEmbed.setDescription(args[0])
                
                message.channel.send(echoEmbed);
                break;
            
            default:
                echoEmbed.setTitle(args[0])
                echoEmbed.setDescription(args.slice(1, args.length).join(' '))

                message.channel.send(echoEmbed);
                break;
        }
    }
}