const fs = require('fs');
const Discord = require('discord.js');
//const { token, prefix } = require('./config.json').bot;

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands');

for (const folder of commandFiles) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles){
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
} 

client.on('ready', () => {
    console.log('ready');
    client.user.setActivity('Catnip\'s Clan', { type: 'WATCHING' });
});

client.on('message', message => {
    // delete latter
    if (message.channel.id != process.env.id) return;

    //if (command.testing && message.channel.id != process.env.id) return;

    if (!message.content.startsWith(process.env.prefix) || message.author.bot) return;

    const args = message.content.slice(process.env.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions) || message.author.id != "338934124335202306") {
            return message.reply('you do not have the required permisions to perform this command.');
        }
    }

    if (command.args && !args.length) {
        let reply = ('you did not provide any arguments.');

        if (command.usage) {
            reply += `\n Usage: ${command.usage}`;
        }

        return message.reply(reply);
    }

    try {
        command.execute(message, args);
    } catch(error) {
        console.error(error);
        message.reply('There was an error executing that command.');
    }
});

client.login(process.env.token);