module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
        message.channel.send(`Pong! ${message.client.ws.ping}ms`);
    }
}