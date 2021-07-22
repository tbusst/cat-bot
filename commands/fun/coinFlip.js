const Discord = require('discord.js');

module.exports = {
    name: 'coinflip',
    description: 'Flips a coin.',
    aliases: ['coin', 'flip'],
    args: false,
    execute(message) {
        let side;

        if (Math.random() > 0.5) side = 'Heads' 
        else side = 'Tails'

        message.channel.send(`${message.author} Fliped a coin and got ${side}!`);
    }
}