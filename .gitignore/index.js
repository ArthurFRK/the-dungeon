const Discord = require('discord.js');
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function(){
  console.log(`Bot en fonctionnement sur le port ${app.get('port')}`);
})

var bot = new Discord.Client();
var prefix = ("?");
var randnum = 0

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Command = ?help', type: 0}})                  //Pour modifier "le jeu du bot"
    console.log("Bot Ready !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {                                                          //Début du ping
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');                                                       //Fin du ping
    }

    if(message.content === prefix + "help"){                                                                //Début du EMBED
        var help_embed = new Discord.RichEmbed()
        .setColor('#F3FF00')
        .addField("Commande du bot !", "/help: Affiche les commandes du bot !")
        .addField("interaction", "ping: Le bot répond pong !")
        .setFooter("C'est tout pour ce embed !")
    message.channel.sendEmbed(help_embed)
        //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes")
        console.log("Commande Help demandée !")
    }                                                                                                       //Fin du EMBED

    if (message.content === prefix + "Random"){                                                             //Début Réponse Aléatoire
        random();
        
        if (randnum == 1){
            message.reply("1");
            console.log(randnum);
        }
    
        if (randnum == 2){
            message.reply("2");
            console.log(randnum);
        }
        if (randnum == 3){
            message.reply("3");
            console.log(randnum);
        }                                                                                                      //Fin Réponse Aléatoire
    }
});

function random(min, max) {                                                                                 //Fonction pour la réponse aléatoire
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}                                                                                                           //Fonction pour la réponse aléatoire
