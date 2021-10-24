const Discord = require("discord.js") 
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
// const colors = require('../../colours.json')
module.exports = {
    config: {
        name: "autonick",
        aliases: ['auton', 'ank', 'an'],
        category: "automod",
        description: "enable autonick in channel",
        usage: "[prefix <autonick> ]",
        accessableby: "ADMINISTRATOR"
    },
    run: async (bot, message, args) => {
   
    if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "You need `MANAGE GUILD` to configure the auto nick settings!"
      );
      return;
}
if(!args[0]){
  return message.reply(" pls enter a nickname like : LGT -username- OP (Username means the joiner username)")
}
    let message1 = args.join(" ");
    if(message1 !== "disable")
{
  db.set(`nickm_${message.guild.id}`, message1);
  message.channel.send(`Done Your Message Has been set n Database`);
}
if(args[0] == "disable" || args[0] == "off")
{
 db.delete(`nickm_${message.guild.id}`);
 return message.reply("done deleted the autonick feature");
}
 
}
}