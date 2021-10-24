const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const db = require('quick.db');
const { stripIndents } = require("common-tags");
const { cyan } = require("../../JSON/colours.json");
const { PREFIX } = require('../../config');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");



module.exports = {
    config: {
        name: "menu",
         aliases: ['mn', 'men', 'm'],
        description: "Displays help menu of the bot",
        category: "info",
        accessableby: "ADMINISTRATOR"
    },
  run: async (bot, message, args ) => {
     if(message.member.hasPermission('ADMINISTRATOR')) {
    


        const embed = new MessageEmbed()
            .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
            
            .setDescription(`**These Are the Available Commands For ${message.guild.me.displayName}\nBot's Global Prefix Is \`${PREFIX}\`\n\nFor Help Related To A Particular Command Type -\n\`${PREFIX}help [command name | alias]\`**`)
           .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL())
          
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Moderation 🛡')
        .setDescription('All Moderation Commands')
        .addField("ㅤ⠀⠀⠀ \n **Moderation** |  **ENABLED** ","`addrole`  `ban` `disablemodlogchannel` `disablemuterole` `disableverification` `disablewelcomechannel` `disablexp` ` kick` `mute` `purge` `removerole` `setmodlogchannel` `setmuterole` `setnick` `setprefix` `setverification`   `setwelcomechannel` `setxp` `unban` `unmute` `verify` `warn`"
        )
          .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );

        const embed2 = new Discord.MessageEmbed()
        .setTitle('🎩 Admin 🎩')
        .addField("ㅤ⠀⠀⠀ \n **Admin** |  **ENABLED**",
          "`addrole` `auditlog` `ban` `dm` `embed` `hackban` `kick` `lock` `nuke` `removerole` `addemoji` `unban` `unlock` "
        )
         
         .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );

          const embed3 = new Discord.MessageEmbed()
        .setTitle('♟️ Automod ♟️')
        .addField("\n**AutoModeration** |  **ENABLED**" , " `anti-alt` `antilink` `autonick` `autoofficial` `autoofficiald` `autorole` `roleall`"
        )
            .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );
      

        const embed4 = new Discord.MessageEmbed()
      .setTitle(' Info ')
      .addField("⠀⠀⠀ \n  **Info** |  **ENABLED**",
        "`botinfo` `botinvite` `report-bug` `commandscount` `developer` `djs` `feedback` `github` `help` `info` `roleinfo` `serverinfo` `userinfo`"
      )
       
         .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );

          const embed5 = new Discord.MessageEmbed()
      .setTitle('Aura')
      .addField(" \n **Aura** |  **ENABLED**" ," `addword` `blacklist-server` `blacklist-user` `delword` `whitelist-add` `whitelist-delete` `whitelist` `wordlist`"
      )
      
         .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );

    const embed6 = new Discord.MessageEmbed()
      .setTitle('General ')
      .addField(" \n **General** |  **ENABLED**" ,"`channelinfo`, `help`, `instasearch`, `invitations`, `level`, `news`, `ping` , `poll`, `roleinfo`, `rolememberinfo`, `serverinfo` , `uptime`, `weather`, `whois`, `wikipedia`"
      )
          .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );

        const embed7 = new Discord.MessageEmbed()
      .setTitle('Fun')
      .addField("**Fun** | **ENABLED**",
      "`deepfry` `coinflip` `corona` `drake` `eightball` `flipcoin` `google` `hack` `hangman` `hug` `joke` `meme` `ship` `slap` `snake` `snipe` `sudo` `tictactoe` `triggered` `trivia` `tictactoe` `youtube`",)
      
         .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );

   const embed8 = new Discord.MessageEmbed()
      .setTitle('Images')
      .addField("**Image** |  **ENABLED** \n`3000years` `affect` `beautiful` `dog` `facepalm` `fire` `fox` `gay` `glass` `jail` `kangaroo` `shit` `tweet`")
         .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );
      

         const embed9 = new Discord.MessageEmbed()
      .setTitle(' Nsfw')
      .addField(" **Nsfw** | **ENABLED** \n `4k` `anal` `ass` `boobs` `pussy` `erokemo` `gonewild` `hentai` `hentai-ass` `hentai-midriff` `kitsune` `lewd` `pussy` `solo` `Thigh`",)
         .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );
      

       const embed10 = new Discord.MessageEmbed()
      .setTitle('Owner')
      .addField("**Owner** |  **ENABLED**",
        "`bot-token` `eval-test` `eval` `getinvite` `reload` `serverlist`"
      )
      
        .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );
      

       const embed11 = new Discord.MessageEmbed()
      .setTitle('ChatBot ')
      .addField("\n ChatBot |  **ENABLED**" , "`chatbot-disable` `chatbot-set` "
      )
      
        .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );

     const embed12 = new Discord.MessageEmbed()
      .setTitle('Ultility')
      .addField("**Ultility** |**ENABLED** " ,"`advice` `announce` `binary` `members` `membercount` `minecraft` `poll` `prefix` `rank` `serverinfo` `shortener` `whatsapp` `worldclock` `yt`"
      )
        .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );
      

       const embed13 = new Discord.MessageEmbed()
      .setTitle(`Ticket `)
      .addField("**Ticket** |  **ENABLED**",
        "`tadd`, `tclose`,`tdelete`, `tnew`,`topen`, `tremove`")
        .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );
      

     const embed14 = new Discord.MessageEmbed()
      .setTitle(`Giveaways `)
      .addField(" **Giveaways** |  **ENABLED**" ,"`start [channel] [time] [winner] [prize]`, `end [giveaway id]` , `recoll [giveaway id]` ")
      
        .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );

       const embed15 = new Discord.MessageEmbed()
      .setTitle(`Economy `)
      .addField(" \n **Economy** |  **ENABLED**" ," `addmoney`, `balance`, `beg` , `buy`,   `daily` , `deposit` , `fish` , `leaderboard` , `pay` , `profile`, `removemoney` , `rob` , `roul` , `ette` ,`sell` , `setbackground`  , `setinfo` , `slots` , `store` , `weekly` , `withdraw` , `work`")
        .setFooter(`${message.guild.me.displayName} | Total Commands - ${bot.commands.size - 1}`, bot.user.displayAvatarURL(),
            );
      
        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Moderation')
        .setEmoji('891453066501587005')
        .setValue('option1')
        .setDescription('All Moderation Commands Take Place here')

        let option2 = new MessageMenuOption()
        .setLabel('Admin')
        .setEmoji('892078131765190686')
        .setValue('option2')
        .setDescription('Click me to see admin Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Automod')
        .setEmoji('891453230561779772')
        .setValue('option3')
        .setDescription('Click me to see Automod Commands')

        let option4 = new MessageMenuOption()
        .setLabel('Info')
        .setEmoji('891215371699376168')
        .setValue('option4')
        .setDescription('By click on me you can see Info commands')

        let option5 = new MessageMenuOption()
        .setLabel('Games')
        .setEmoji('891215368562040842')
        .setValue('option5')
        .setDescription('Select me for Aura commands')

        let option6 = new MessageMenuOption()
        .setLabel('General')
        .setEmoji('892889434654113863')
        .setValue('option6')
        .setDescription('If you select me i will show you all General commands')
        
               let option7 = new MessageMenuOption()
        .setLabel('Fun')
        .setEmoji('892889434729623633')
        .setValue('option7')
        .setDescription('Click on me and get Fun commands')

        let option8 = new MessageMenuOption()
        .setLabel('Image')
        .setEmoji('894930759901675550')
        .setValue('option8')
        .setDescription('Click me to see Image commands')

        let option9 = new MessageMenuOption()
        .setLabel('Nsfw')
        .setEmoji('891461376277618739')
        .setValue('option9')
        .setDescription('Click me to see NsFw commands')

        let option10 = new MessageMenuOption()
        .setLabel('Owner')
        .setEmoji('891453513316565052')
        .setValue('option10')
        .setDescription('All commands for Owner take place here')

        let option11 = new MessageMenuOption()
        .setLabel('ChatBot')
        .setEmoji('891241010695401552')
        .setValue('option11')
        .setDescription('I have all ChatBot commands')

        let option12 = new MessageMenuOption()
        .setLabel('Ultility')
        .setEmoji('892889434805121024')
        .setValue('option12')
        .setDescription('Click me to see Ultility commands')

        let option13 = new MessageMenuOption()
        .setLabel('Ticket')
        .setEmoji('891421982309089290')
        .setValue('option13')
        .setDescription('Click me to see Ticket commands')

        let option14 = new MessageMenuOption()
        .setLabel('Giveaways')
        .setEmoji('891240973009580053')
        .setValue('option14')
        .setDescription('Click me to see GiveAways commands')

        let option15 = new MessageMenuOption()
        .setLabel('Economy')
        .setEmoji('💸')
        .setValue('option15')
        .setDescription('Click me to see Economy commands')
        

    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Click here to view the help menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, option14, option15)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        if(b.values[0] == "option6") {
            Sendmenu.edit(embed6, select)
        }

        if(b.values[0] == "option7") {
            Sendmenu.edit(embed7, select)
        }

        if(b.values[0] == "option8") {
            Sendmenu.edit(embed8, select)
        }

        if(b.values[0] == "option9") {
            Sendmenu.edit(embed9, select)
        }

        if(b.values[0] == "option10") {
            Sendmenu.edit(embed10, select)
        }

        if(b.values[0] == "option11") {
            Sendmenu.edit(embed11, select)
        }

        if(b.values[0] == "option12") {
            Sendmenu.edit(embed12, select)
        }
      
        if(b.values[0] == "option13") {
            Sendmenu.edit(embed13, select)
        }

        if(b.values[0] == "option14") {
            Sendmenu.edit(embed14, select)
        }

        if(b.values[0] == "option15") {
            Sendmenu.edit(embed15, select)
        }

      
        b.reply.defer();
    })

       collector.on("end", (b) => {
        Sendmenu.edit("This help menu is expired! Please retype the command to view again.")
    })
  }else{
    message.channel.send('You do not have permission to use this command')
  }
    }
  };


