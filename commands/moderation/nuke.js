const Discord = require('discord.js');

module.exports = {
    name: 'nuke',
    description: 'Deletes an specified amount of messages.',
    args: true,
    usage: '<amount>',
    aliases: ['purge', 'bulkdelete'],
    permissions: 'MANAGE_MESSAGES',
    execute(message, args) {   
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('hmm, that seems to be invalid number.');
        } else if (amount < 2 || amount > 100) {
            return message.reply('please enter a number between 2 and 100.');
        }

        message.channel.bulkDelete(amount + 1, true).catch(error => {
            console.error(error);
            message.channel.send('there was an error trying to nuke messages in this channel.')
        })
    }
}