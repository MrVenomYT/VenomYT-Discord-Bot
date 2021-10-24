const axios = require("axios");
const Discord = require('discord.js');
//creating the client
const client = new Discord.Client();
module.exports = {
    config: {
        name: "banner",
        aliases: ['sbanner', 'sb'],
        category: "owner",
        description: "auto del msgs.",
        usage: "[ID | name]",
        accessableby: "Owner"
    }, run: async (bot, message, args) => {
  const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(err => undefined);
    if (!user) return message.reply('You must mention someone to get there banner').catch(console.error);
        axios.get(`https://cryptons.ga/api/v1/userbanner?id=${user.id}`)
        .then(function(response) {
        if(response.data.url === "null") return message.reply({ content: 'User doesnt have a banner' })
            const embed = new MessageEmbed()
                .setTitle(`Banner`)
                .setImage(response.data.url)
                .setColor('RANDOM')
            message.channel.send({ embeds: [embed]} );
        });
    }
}