//const { prefix } = require('../../config.json').bot;

module.exports = {
    name: 'help',
    description: 'Shows a help menu.',
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Here\'s a list of my available commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`You can type \`${process.env.prefix}help [command name]\` to get more info on a certain command.`)

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all available commands.')
                })
                .catch(error => {
                    console.error(`Could not send a DM to ${message.author.tag}.\n,`, error);
                    message.reply('I couldn\'t send you a DM, do you have DMs disabled?');
                })  
        } 
        
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command.');
        }

        data.push(`**Name:** ${command.name}`);
        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${process.env.prefix}${command.name} ${command.usage}`);

        message.channel.send(data, { split:true });
    }
}