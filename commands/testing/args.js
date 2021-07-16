module.exports = {
    name: 'args',
    description: 'Args test command.',
    args: true,
    usage: "<args>",
    execute(message, args) {
        message.channel.send(`Your arguments are: ${args}`);
    }
}