const Discord = require('discord.js');
//const { icon } = require('../../config.json').bot;

module.exports = {
    name: 'avatar',
    description: 'Shows a photo of your avatar.',
    aliases: ['mirror', 'icon'],
    execute(message, args) {
        const mentions = message.mentions.users;
        const avatarEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setFooter('Catbot', process.env.icon)

        if (!mentions.size) {
            avatarEmbed.setImage(message.author.displayAvatarURL({dynamic: true}));
        } else {
            avatarEmbed.setImage(mentions.first().displayAvatarURL({dynamic: true}));
        }

        message.channel.send(avatarEmbed);
    }
}