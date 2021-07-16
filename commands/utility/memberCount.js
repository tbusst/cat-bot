module.exports = {
    name: 'membercount',
    description: 'Shows the server\'s member count.',
    guildOnly: true, 
    execute(message, args) {
        message.channel.send(`This server has ${message.guild.memberCount} members.`);
    }
}