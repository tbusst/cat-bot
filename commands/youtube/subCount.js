const fetch = require("node-fetch");
let { youtubeKey, channelID, channelName } = require('../../config.json').youtube;

module.exports = {
    name: 'subscribers',
    description: 'Gets the current subscriber count',
    args: false,
    aliases: ['subcount'],
    execute(message) {
        let subCount;

        console.log(channelID);

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}&key=${youtubeKey}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            subCount = data['items'][0].statistics.subscriberCount;
            message.channel.send(`${channelName} has ${subCount} subscribers!`);
        })
    }
}