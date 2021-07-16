const fetch = require("node-fetch");
//const { youtubeKey, channelID, channelName } = require('../../config.json').youtube;

module.exports = {
    name: 'subscribers',
    description: 'Gets the current subscriber count',
    args: false,
    aliases: ['subcount'],
    execute(message) {
        let subCount;

        console.log(process.env.channelID);

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.channelID}&key=${process.env.youtubeKey}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            subCount = data['items'][0].statistics.subscriberCount;
            message.channel.send(`${process.env.channelName} has ${process.env.subCount} subscribers!`);
        })
    }
}