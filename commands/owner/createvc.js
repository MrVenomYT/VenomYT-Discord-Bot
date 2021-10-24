const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "createvc",
        aliases: ['cvc', 'crevc', 'cretvc'],
        category: "owner",
        description: "create a voice channel",
        usage: "[prefix <createvc> ]",
        accessableby: "ADMINISTRATOR"
    },
    run: async (bot, message, args) => {
      if(message.member.hasPermission('ADMINISTRATOR')) {
     if (!args[0]) {
      return message.channel.send("Please mention the name for the Channel")
  }
      message.guild.channels.create(args.slice(0).join(" "), {type: "voice"});
  
      const embed = new Discord.MessageEmbed()
      .setTitle("Channel Updates")
      .setDescription(`Channel has been created`)
      .setColor("RANDOM");
    message.channel.send(embed);
    }else{
      message.channel.send("You donot have permission to use this command")
    }
}
}