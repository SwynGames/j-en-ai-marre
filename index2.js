var PREFIX = ("*") 

bot.on ('message', message => {
    if (message.content === PREFIX + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#4403A3')
        .addField("Commande du Bot !!", "   *help : Affiche les commandes du Bot")
        message.channel.sendEmbed(help_embed);
        console.log("Commande help demandée");
    }
})