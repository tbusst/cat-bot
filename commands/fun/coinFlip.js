const Discord = require('discord.js');

module.exports = {
    name: 'coinflip',
    description: 'Flips a coin.',
    aliases: ['coin', 'flip'],
    args: false,
    execute(message) {
        let side;
        let coinImg;
        const flipEmbed = new Discord.MessageEmbed();

        if (Math.random() > 0.5) {
            side = 'Heads';
            coinImg = 'https://i.imgur.com/7f41vEK.png';
        } else {
            side = 'Tails';
            coinImg = 'https://i.imgur.com/6t7JamY.png';
        }

        flipEmbed
            .setTitle('Coin Flip')
            .setDescription(`${message.author} Fliped a coin and got ${side}!`)
            .setImage(coinImg)
            .setTimestamp()
            .setFooter('Catbot', process.env.icon)

        message.channel.send(flipEmbed);
    }
}