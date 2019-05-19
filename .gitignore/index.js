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
    bot.user.setPresence({ game: { name: 'Command = ?help', type: 0}}) //Pour modifier "le jeu du bot"
    console.log("Bot Ready !");
});

bot.login("NTY1MjU5NDc4NzYxNjAzMDkw.XLDL3A.K7zP93xPGWJozzeRFxl0h5-2iXY"); //TOKEN

//TEST PING PONG
bot.on('message', message => {                                                          
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');                                                       
    }



//ROLL
if (message.content.startsWith(prefix + "Roll")) {
    var x = parseInt(100)
    var x0 = parseInt(0)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    if (résultat < 50) {
      message.channel.send({embed: {
        title: `${résultat}`,
        color: 16711680,
      }})
    } else if (résultat > 50) {
      message.channel.send({embed: {
        title: `${résultat}`,
        color: 65280,
      }})
    } else if (résultat > 50) {
      message.channel.send({embed: {
        title: `${résultat}`,
        color: 65280,
      }})
    } else {
      message.channel.send({embed: {
          title: `50`,
          color: 0,
      }})
    }        
}



//HELP
if (message.content.startsWith(prefix + "Help")) {                                  
    var x = parseInt(100)
    var x0 = parseInt(1)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    message.channel.send({embed: {
        color: 16776960,
        title: "Commande HELP",
        footer: {
            text: "Menu de base"
          },
        fields: [{
            name: "Univers",
            value: "Résumé du monde"
          },
          {
            name: "Fiche Personnage",
            value: "Ce qui permet d'avoir son personnage"
          },
          {
            name: "Races",
            value: "Les 6 races"
          },
          {
            name: "Classes",
            value: "Ce qui défini votre façon de combattre"
          },
          {
            name: "Métiers",
            value: "Comment gagner de l'argent"
          },
          {
            name: "Guildes",
            value: "Créer une famille"
          },
          {
            name: "La Tour",
            value: "Votre objectif principale"
          },
          {
            name: "Monstres",
            value: "Ce contre quoi vous allez vous battre"
          },
    ],
    }})
}



//CLASSE
    if(message.content === prefix + "Classe"){
        var embed1 = new Discord.RichEmbed()
        .setTitle("**Les classes :**")
        .addField("Combattant", "*Classe Tank*")
        .addField("Prêtre", "*Classe Support*")
        .addField("Mage", "*Classe Dégâts*")
        .addField("Tireur", "*Classe Dégâts*")
    message.channel.send(embed1)
    }



//AURA MEURTRIÈRE 
if (message.content.startsWith(prefix + "Aura meurtrière")) {
  var x = parseInt(100)
  var x0 = parseInt(0)
  var x1 = Math.floor(x - x0)
  var x2 = Math.floor(Math.random() * x1)
  var x3 = parseInt(x2)
  var résultat = Math.floor(x3 + x0)
  if (résultat < 33) {
    message.channel.send({embed: {
      title: `AURA MEURTRIÈRE`,
      color: 0,
      image: {
          url: "https://media.giphy.com/media/12IS8ZMgRw2aLC/giphy.gif",
      }
    }})
  } else if (résultat > 66) {
    message.channel.send({embed: {
        title: `AURA MEURTRIÈRE`,
        color: 0,
        image: {
          url: "https://i.skyrock.net/7297/93457297/pics/3282474182_1_3_5CYfR6DJ.gif",
      }
    }})
  } else {
    message.channel.send({embed: {
        title: `AURA MEURTRIÈRE`,
        color: 0,
        image: {
          url: "https://media3.giphy.com/media/uB2uhNw8A7UiY/giphy.gif",
      }
    }})
  }       
  }     

  

//ATTAQUE COMBATTANT
    if(message.content === prefix + "Attaque Combattant"){
        var embed1 = new Discord.RichEmbed()
        .setTitle("**COMBATTANT :**")
        .addField("Coup d'épée", "Inflige des dégâts")
        .addField("Simple blocage", "Réduit les dégâts subis")
        .addField("Attaque perçante", "Inflige des dégâts en dépensant du mana")
        .addField("Bouclier Humain", "Réduit les dégâts subis en dépensant du mana")
        .addField("Carnage", "Inflige des dégâts")
    message.channel.send(embed1)
    }
//COUP D'EPEE
    if(message.content === prefix + "Coup d'épée"){                                                                
        var x = parseInt(10)
        var x0 = parseInt(20)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous infligez', `:crossed_swords:${résultat}`) //TEXTE
        .setImage('https://media.giphy.com/media/10QC9oDFaLA0rC/giphy.gif') //Image
    message.channel.send(embed1)
    }
//ATTAQUE PERCANTE
if(message.content === prefix + "Attaque perçante"){                                                                
    var x = parseInt(20)
    var x0 = parseInt(30)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-20 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/o8NqgWf0pt46k/giphy.gif') //Image
message.channel.send(embed1)
}
//BOUCLIER HUMAIN
if(message.content === prefix + "Bouclier humain"){
    var x = parseInt(15)
    var x0 = parseInt(25)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous réduisez les dégâts (-50 Mana)', `:shield: ${résultat}`) //TEXTE
    .setImage('https://66.media.tumblr.com/164109315faa6099d923173aff36f6fd/tumblr_osheoajJfU1tnk2buo9_500.gif') //Image
message.channel.send(embed1)
}
//CARNAGE
if(message.content === prefix + "Carnage"){                                                                
    var x = parseInt(20)
    var x0 = parseInt(30)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/2Pk9newN8fkbu/giphy.gif') //Image
message.channel.send(embed1)
}

//ATTAQUE CHEVALIER
if(message.content === prefix + "Attaque Chevalier"){
    var embed1 = new Discord.RichEmbed()
    .setTitle("**CHEVALIER :**")
    .addField("Sol fissuré", "Inflige des dégâts")
    .addField("Dance mortelle", "Inflige des dégâts en dépensant du mana")
    .addField("Frappe tellurique", "Inflige des dégâts")
    .addField("Bouclier intensif", "Réduit les dégâts subis en dépensant du mana")
    .addField("Gardien suprême", "Inflige des dégâts et étourdit l'ennemi en dépensant du mana")
message.channel.send(embed1)
}
//SOL FISSURE
if(message.content === prefix + "Sol fissuré"){                                                                
    var x = parseInt(25)
    var x0 = parseInt(35)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/VPQzACQ9WTeNy/giphy.gif') //Image
message.channel.send(embed1)
}
//DANCE MORTELLE
if(message.content === prefix + "Dance mortelle"){                                                                
    var x = parseInt(30)
    var x0 = parseInt(40)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts et pendant 3 tours infligez 10 de dégâts en plus par tour (-75 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/MISaOTDuAlTkQ/giphy.gif') //Image
message.channel.send(embed1)
}
//FRAPPE TELLURIQUE
if(message.content === prefix + "Frappe tellurique"){                                                                
    var x = parseInt(35)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-50 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/uxb2ceL0KUcow/giphy.gif') //Image
message.channel.send(embed1)
}
//BOUCLIER INTENSIF
if(message.content === prefix + "Bouclier intensif"){
    var x = parseInt(30)
    var x0 = parseInt(40)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous réduisez les dégâts (-50 Mana)', `:shield: ${résultat}`) //TEXTE
    .setImage('https://66.media.tumblr.com/724e62a042501c291b9f925db0a836e8/tumblr_osheoajJfU1tnk2buo10_500.gif') //Image
message.channel.send(embed1)
}
//GARDIEN SUPRÊME
if(message.content === prefix + "Gardien suprême"){                                                                
    var x = parseInt(35)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField("Vous infligez des dégâts et étourdissez l'ennemie (-75 Mana et l'ennemi ne peut ni attaquer, ni se défendre au prochain tour)", `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/NV7hWZJZolaY7Phs9W/giphy.gif') //Image
message.channel.send(embed1)
}
//ATTAQUE CHAMPION
if(message.content === prefix + "Attaque Champion"){
    var embed1 = new Discord.RichEmbed()
    .setTitle("**CHAMPION :**")
    .addField("Transcendance", "Reprends tous ses points de vie mais double les dégâts subis par la suite")
    .addField("Attaque lourde", "Inflige des dégâts")
    .addField("Protection majeur", "Réduit les dégâts en dépensant du mana")
    .addField("Enchainement", "Inflige des dégâts en dépensant du mana")
    .addField("Champion suprême", "Inflige des dégâts en dépensant du mana")
message.channel.send(embed1)
}
//TRANSCENDANCE
if(message.content === prefix + "Transcendance"){                                                                
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle("Reprends tous ses points de vie mais double les dégâts subis par la suite (-100 Mana)") //TEXTE
    .setImage('http://images6.fanpop.com/image/photos/40600000/-All-Might-s-Rage-all-might-hero-number-1-40670644-500-240.gif') //Image
message.channel.send(embed1)
}
//ATTAQUE LOURDE
if(message.content === prefix + "Attaque lourde"){                                                                
    var x = parseInt(40)
    var x0 = parseInt(55)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-50 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/uxb2ceL0KUcow/giphy.gif') //Image
message.channel.send(embed1)
}
//PROTECTION MAJEUR
if(message.content === prefix + "Protection majeur"){
    var x = parseInt(40)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous réduisez les dégâts (-50 Mana)', `:shield: ${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/3kFq2t94JawHwllO6o/giphy.gif') //Image
message.channel.send(embed1)
}
//ENCHAINEMENT
if(message.content === prefix + "Enchainement"){                                                                
    var x = parseInt(50)
    var x0 = parseInt(60)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var x = parseInt(80)
    var x0 = parseInt(100)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat2 = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous effetuez un enchainement de coup et infligez des dégâts (-150 Mana)', `:crossed_swords: ${résultat} puis ${résultat2}`) //TEXTE
    .setImage('https://media.giphy.com/media/o8NqgWf0pt46k/giphy.gif') //Image
message.channel.send(embed1)
}
//CHAMPION SUPREME
if(message.content === prefix + "Champion suprême"){                                                                
    var x = parseInt(150)
    var x0 = parseInt(200)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-200 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/LFIgnWKgk3zjO/giphy.gif') //Image
message.channel.send(embed1)
}
//ATTAQUE PALADIN
if(message.content === prefix + "Attaque Paladin"){
    var embed1 = new Discord.RichEmbed()
    .setTitle("**PALADIN :**")
    .addField("Transcendance", "Reprends tous ses points de vie mais double les dégâts subis par la suite")
    .addField("Bouclier protecteur", "Annule les dégats pour 2 tours en dépensant du mana")
    .addField("Attaque lourde", "Inflige des dégâts en dépensant du mana")
    .addField("Bouclier colossal", "Réduit des dégâts en dépensant du mana")
    .addField("Paladin suprême", "Inflige des dégâts en dépensant du mana")
message.channel.send(embed1)
}
//TRANSCENDANCE
    //Existe déjà pour la classe Champion 
//BOUCLIER IMPENETRABLE
if(message.content === prefix + "Bouclier impénétrable"){
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle("Bloque les 2 prochaines attaques ennemies à 100% (-50 Mana)") //TEXTE
    .setImage('https://media.giphy.com/media/11Uq7X0vmxGEeDvwKc/giphy.gif') //Image
message.channel.send(embed1)
}
//ATTAQUE LOURDE
if(message.content === prefix + "Attaque lourde"){                                                                
    var x = parseInt(50)
    var x0 = parseInt(60)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-50 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/uxb2ceL0KUcow/giphy.gif') //Image
message.channel.send(embed1)
}
//BOUCLIER COLOSSAL
if(message.content === prefix + "Bouclier colossal"){
    var x = parseInt(30)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous réduisez les dégâts', `:shield: ${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/P4E6hPfaxxk6Q/giphy.gif') //Image
message.channel.send(embed1)
}
//PALADIN SUPREME
if(message.content === prefix + "Paladin suprême"){                                                                
    var x = parseInt(125)
    var x0 = parseInt(175)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField("Vous infligez des dégâts et empêchez l'ennemie de se défendre au prochain tour (-150 Mana)", `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/3ojiRAY8vfoWWYRsYL/giphy.gif') //Image
message.channel.send(embed1)
}
//ATTAQUE PRETRE
    if(message.content === prefix + "Attaque Prêtre"){
        var embed1 = new Discord.RichEmbed()
        .setTitle("**PRÊTRE :**")
        .addField("Sort magique", "Rend de la vie à un allié")
        .addField("Faible blocage", "Réduit les dégâts subis")
        .addField("Soins rapide", "Rend de la vie à un allié")
        .addField("Régénération de mana", "Rend du mana")
        .addField("Soins de prêtre", "Soigne une partie de la vie d'une personne")
    message.channel.send(embed1)
    }
//SORT MAGIQUE
    if(message.content === prefix + "Sort magique"){                                                                
        var x = parseInt(5)
        var x0 = parseInt(15)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous infligez des dégâts', `:sparkles: ${résultat}`) //TEXTE
        .setImage(`https://media.giphy.com/media/xT1R9OrMvjQIrRIlxu/giphy.gif`) //Image
    message.channel.send(embed1)
    }
//SOINS RAPIDE
    if(message.content === prefix + "Soins rapide"){                                                                
        var x = parseInt(1)
        var x0 = parseInt(5)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous soignez une cible', `:heart: ${résultat}`) //TEXTE
        .setImage(`https://i.pinimg.com/originals/c8/15/2a/c8152a511933880916ba33feb5e45525.gif`) //Image
    message.channel.send(embed1)
    } 
//SOIN SUPERIEUR
    if(message.content === prefix + "Soins supérieur"){                                                                
        var x = parseInt(5)
        var x0 = parseInt(10)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous soignez une cible (-20 Mana)', `:heart: ${résultat}`) //TEXTE
        .setImage(`https://sm.ign.com/ign_fr/screenshot/b/berserk-ma/berserk-magiegif_rmd7.gif`) //Image
    message.channel.send(embed1)
    } 
//SOIN DE PRETRE
if(message.content === prefix + "Soins de prêtre"){                                                                
    var x = parseInt(10)
    var x0 = parseInt(15)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous soignez une cible (-100 Mana)', `:heart: ${résultat}%`) //TEXTE
    .setImage(`http://ekladata.com/3PqxjpgzJ7bqgJk_GUrPDaQpL8I.gif`) //Image
message.channel.send(embed1)
} 
//ATTAQUE D'EVEQUE
if(message.content === prefix + "Attaque Evêque"){
    var embed1 = new Discord.RichEmbed()
    .setTitle("**EVÊQUE :**")
    .addField("Soins naturel", "Rend de la vie à un allié")
    .addField("Régénération de mana ", "Rend du mana")
    .addField("Eclosion médical", "Rend de la vie à plusieurs alliés")
    .addField("Poing divin", "Inflige des dégâts")
    .addField("Soins d'êveque", "Soigne une partie de la vie d'une personne")
message.channel.send(embed1)
}
//SOIN NATUREL
if(message.content === prefix + "Soins naturel"){                                                                
    var x = parseInt(10)
    var x0 = parseInt(15)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous soignez une cible (-50 Mana)', `:heart: ${résultat}`) //TEXTE
    .setImage(`http://ekladata.com/kTnaL2Ma7ik_5Ft9fkBbzb-q4d0.gif `) //Image
message.channel.send(embed1)
} 
//REGENERATION DE MANA
if(message.content === prefix + "Régénération de mana"){                                                                
    var x = parseInt(10)
    var x0 = parseInt(15)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle(`Vous récupérez la moitié de votre mana :sparkles:`) //TEXTE
    .setImage(`https://steamuserimages-a.akamaihd.net/ugc/910158001860776957/D8BD07B5596C5A8F084ADC621BA051FE00A89CE1/`) //Image
message.channel.send(embed1)
} 
//ECLOSION MEDICAL
if(message.content === prefix + "Eclosion médical"){                                                                
    var x = parseInt(10)
    var x0 = parseInt(20)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous soignez 2 cibles (-100 Mana)', `:heart: ${résultat}`) //TEXTE
    .setImage(`https://vignette.wikia.nocookie.net/blackclover/images/9/97/Mimosa_healing_Noelle_injuries.png/revision/latest?cb=20180808195359`) //Image
message.channel.send(embed1)
} 
//POING DIVIN
if(message.content === prefix + "Poing divin"){                                                                
    var x = parseInt(25)
    var x0 = parseInt(35)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-50 Mana)', `:sparkles: ${résultat}`) //TEXTE
    .setImage('https://i.pinimg.com/originals/b4/dc/73/b4dc7350ecc9460b60997e1223c8558a.gif') //Image
message.channel.send(embed1)
}
//SOIN D'EVEQUE
if(message.content === prefix + "Soins d'êveque"){                                                                
    var x = parseInt(30)
    var x0 = parseInt(45)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous soignez une cible (-300 Mana)', `:heart: ${résultat}%`) //TEXTE
    .setImage(`https://steamuserimages-a.akamaihd.net/ugc/910158001860776957/D8BD07B5596C5A8F084ADC621BA051FE00A89CE1/`) //Image
message.channel.send(embed1)
} 
//ATTAQUE DE CARDINAL
if(message.content === prefix + "Attaque Cardinal"){
    var embed1 = new Discord.RichEmbed()
    .setTitle("**CARDINAL :**")
    .addField("Dôme de soins", "Rend de la vie à plusieur allié")
    .addField("Jugement de dieu", "Inflige des dégâts")
    .addField("Dons de vie", "Sacrifie sa vie pour la donner")
    .addField("Drapeau de soins", "Rends de la vie sur plusieurs tour")
    .addField("Soins de cardinal", "Soigne une partie de la vie d'une personne")
message.channel.send(embed1)
}
//DOME DE SOINS
if(message.content === prefix + "Dôme de soins"){                                                                
    var x = parseInt(20)
    var x0 = parseInt(30)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous soignez 3 cibles (-200 Mana)', `:heart: ${résultat}`) //TEXTE
    .setImage(`https://gamewave.fr/static/images/news/headers/adf23-5799f2845b103492962815a1df02fad6.jpeg`) //Image
message.channel.send(embed1)
} 
//JUGEMENT DE DIEU
if(message.content === prefix + "Jugement de dieu"){                                                                
    var x = parseInt(40)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-50 Mana)', `:sparkles: ${résultat}`) //TEXTE
    .setImage('https://www.kana.fr/assets/uploads/2017/03/Kurapika-hunterxhunter.gif') //Image
message.channel.send(embed1)
}
//DONS DE VIE
if(message.content === prefix + "Dons de vie"){                                                                
    var x = parseInt(30)
    var x0 = parseInt(45)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous soignez une cible (-200 Mana)', `:heart: Vous lui transférez de votre vie`) //TEXTE
    .setImage(`https://vignette4.wikia.nocookie.net/fairytailfanon/images/d/d1/Wendy_Marvell_Magical_Power.gif/revision/latest?cb=20150807070001`) //Image
message.channel.send(embed1)
} 
//DRAPEAU DE SOINS
if(message.content === prefix + "Drapeau de soins"){                                                                
    var x = parseInt(25)
    var x0 = parseInt(35)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous soignez sur 3 tours (-400 Mana)', `:heart: ${résultat}`) //TEXTE
    .setImage(`https://thumbs.gfycat.com/IncompleteJaggedGallinule-size_restricted.gif `) //Image
message.channel.send(embed1)
} 
//SOIN DE CARDINAL
if(message.content === prefix + "Soins de cardinal"){                                                                
    var x = parseInt(60)
    var x0 = parseInt(75)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous soignez une cible (-500 Mana)', `:heart: ${résultat}%`) //TEXTE
    .setImage(`https://steamuserimages-a.akamaihd.net/ugc/910158001860776957/D8BD07B5596C5A8F084ADC621BA051FE00A89CE1/`) //Image
message.channel.send(embed1)
} 
//ATTAQUE TIREUR
if(message.content === prefix + "Attaque Tireur"){
    var embed1 = new Discord.RichEmbed()
    .setTitle("**TIREUR :**")
    .addField("Tir à l'arc", "Inflige des dégâts")
    .addField("Faible blocage", "Réduit les dégâts subis")
    .addField("Flèche chargée", "Inflige des dégâts en dépensant du mana")
    .addField("Flèche magique", "Inflige des dégâts en dépensant du mana")
    .addField("Maitrise de l'arc", "Inflige des dégâts en dépensant du mana")
message.channel.send(embed1)
}
//TIR A L'ARC
if(message.content === prefix + "Tir à l'arc"){                                                                
    var x = parseInt(20)
    var x0 = parseInt(30)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('http://66.media.tumblr.com/6eba9f5b5fa490dcaf878451dc69273c/tumblr_nxgk73Mb411qam6y9o3_500.gif') //Image
message.channel.send(embed1)
}
//FLECHE CHARGEE
if(message.content === prefix + "Flèche chargée"){                                                                
    var x = parseInt(25)
    var x0 = parseInt(40)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-20 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media.giphy.com/media/psqqazmAKeeMU/giphy.gif') //Image
message.channel.send(embed1)
}
//FLECHE MAGIQUE
if(message.content === prefix + "Flèche magique"){                                                                
    var x = parseInt(30)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-35 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://i.gifer.com/StaW.gif') //Image
message.channel.send(embed1)
}
//MAITRISE DE L'ARC
if(message.content === prefix + "Maitrise de l'arc"){                                                                
    var x = parseInt(30)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Double les dégâts de la prochaine attaque (-50 Mana)') //TEXTE
    .setImage('https://data.whicdn.com/images/268787810/original.gif') //Image
message.channel.send(embed1)
}
//ATTAQUE ARCHER
if(message.content === prefix + "Attaque Archer"){
    var embed1 = new Discord.RichEmbed()
    .setTitle("**ARCHER :**")
    .addField("Volée de flèche", "Inflige des dégâts")
    .addField("Flèche absorbante", "Inflige des dégâts subis et se vol de la vie")
    .addField("Tir puissant", "Assure un coup critique à la prochaine attaque")
    .addField("Flèche empoisonnée", "Inflige des dégâts et empoisonne la cible en dépensant du mana")
    .addField("Archer suprême", "Inflige des dégâts en dépensant du mana")
message.channel.send(embed1)
}
//VOLEE DE FLECHE
if(message.content === prefix + "Volée de flèche"){                                                                
    var x = parseInt(35)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://thumbs.gfycat.com/PessimisticCaringJackal-size_restricted.gif ') //Image
message.channel.send(embed1)
}
//FLECHE ABSORBANTE
if(message.content === prefix + "Volée de flèche"){                                                                
    var x = parseInt(60)
    var x0 = parseInt(75)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts et en récuperez la moitié sous forme de vie (-75 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media1.tenor.com/images/76d8de96096214967284b8d2ceebf656/tenor.gif?itemid=11682627 ') //Image
message.channel.send(embed1)
}
//TIR PUISSANT
if(message.content === prefix + "Tir puissant"){                                                                
    var x = parseInt(35)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('La prochaine attaque est un coup critique assuré (-50 Mana)') //TEXTE
    .setImage('https://i.gifer.com/StaW.gif ') //Image
message.channel.send(embed1)
}
//FLECHE EMPOISONNEE
if(message.content === prefix + "Flèche empoisonnée"){                                                                
    var x = parseInt(50)
    var x0 = parseInt(70)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts plus 10 dégâts de poison pendant 2 tours (-100 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://media1.tenor.com/images/24f3fdf994f0c744f4dc9d5978149e68/tenor.gif?itemid=9181557  ') //Image
message.channel.send(embed1)
}
//ARCHER SUPREME
if(message.content === prefix + "Archer suprême"){                                                                
    var x = parseInt(100)
    var x0 = parseInt(120)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-120 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://i.imgur.com/ZNugrI9.gif') //Image
message.channel.send(embed1)
}
//ATTAQUE RODEUR
if(message.content === prefix + "Attaque Rodeur"){
    var embed1 = new Discord.RichEmbed()
    .setTitle("**RODEUR :**")
    .addField("Flèche déchue", "Inflige des dégâts")
    .addField("Riposte", "Renvoie les dégâts qui lui sont destinés")
    .addField("Flèche d'absorption", "Inflige des dégâts en dépensant du mana")
    .addField("Flèche explosive", "Inflige des dégâts en dépensant du mana")
    .addField("Rodeur suprême", "Inflige des dégâts en dépensant du mana")
message.channel.send(embed1)
}
//FLECHE DECHUE
if(message.content === prefix + "Flèche déchue"){                                                                
    var x = parseInt(50)
    var x0 = parseInt(80)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://vignette.wikia.nocookie.net/fairytailfanon/images/7/77/Fl%C3%A8che_de_la_Noirceur.gif/revision/latest?cb=20150721223005&path-prefix=fr ') //Image
message.channel.send(embed1)
}
//RIPOSTE
if(message.content === prefix + "Riposte"){                                                                
    var x = parseInt(50)
    var x0 = parseInt(80)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Renvoie les dégâts qui lui sont destinés (-200 Mana)') //TEXTE
    .setImage('https://i.pinimg.com/originals/e2/34/8f/e2348f8b823ed24a30c3bba77911ca09.gif') //Image
message.channel.send(embed1)
}
//FLECHE D'ABSORPTION
if(message.content === prefix + "Flèche d'absorption"){                                                                
    var x = parseInt(120)
    var x0 = parseInt(180)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-150 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('http://media.tumblr.com/tumblr_m7q233YV3R1qdy4wk.gif ') //Image
message.channel.send(embed1)
}
//FLECHE EXPLOSIVE
if(message.content === prefix + "Flèche explosive"){                                                                
    var x = parseInt(150)
    var x0 = parseInt(200)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-175 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://static.comicvine.com/uploads/original/11117/111173561/5397250-7318678768-giphy.gif ') //Image
message.channel.send(embed1)
}
//RODEUR SUPREME
if(message.content === prefix + "Rodeur suprême"){                                                                
    var x = parseInt(200)
    var x0 = parseInt(250)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-200 Mana)', `:crossed_swords:${résultat}`) //TEXTE
    .setImage('https://thumbs.gfycat.com/BraveRigidAustralianshelduck-small.gif') //Image
message.channel.send(embed1)
}
//ATTAQUE MAGE
    if(message.content === prefix + "Attaque Mage"){
        var embed1 = new Discord.RichEmbed()
        .setTitle("**MAGE :**")
        .addField("Flamiche", "Inflige des dégâts")
        .addField("Faible blocage", "Réduit les dégâts subis")
        .addField("Puit de mana", "Rend du mana")
        .addField("Flamme bleu", "Inflige des dégâts en dépensant du mana")
        .addField("Déflagration", "Inflige des dégâts en dépensant du mana")
    message.channel.send(embed1)
    }
//FLAMICHE
    if(message.content === prefix + "Flamiche"){                                                                
        var x = parseInt(15)
        var x0 = parseInt(30)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous infligez des dégâts', `:sparkles: ${résultat}`) //TEXTE
        .setImage(`https://media1.tenor.com/images/358ad7f38931ae68bcd6068c9d973d42/tenor.gif?itemid=9983852 `) //Image
    message.channel.send(embed1)
    } 
//PUIT DE MANA
if(message.content === prefix + "Flamiche"){                                                                
    var x = parseInt(200)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle("Vous récuperez du mana :sparkles:")
    .setImage(``) //Image
message.channel.send(embed1)
} 
//FLAMME ROUGE
if(message.content === prefix + "Flamme rouge"){                                                                
    var x = parseInt(20)
    var x0 = parseInt(40)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-20 Mana)', `:sparkles: ${résultat}`) //TEXTE
    .setImage(`https://media1.tenor.com/images/10e4a176fee41cc261ea480decae179b/tenor.gif?itemid=11504607 `) //Image
message.channel.send(embed1)
} 
//DEFLAGRATION
if(message.content === prefix + "Déflaration"){                                                                
    var x = parseInt(30)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-30 Mana)', `:sparkles: ${résultat}`) //TEXTE
    .setImage(`https://thumbs.gfycat.com/HospitableGlassFoxhound-size_restricted.gif `) //Image
message.channel.send(embed1)
} 
//ATTAQUE SORCIER
if(message.content === prefix + "Attaque Sorcier"){
    var embed1 = new Discord.RichEmbed()
    .setTitle("**SORCIER :**")
    .addField("Flamme bleu", "Inflige des dégâts en dépensant du mana")
    .addField("Blocage magique", "Réduit les dégâts subis")
    .addField("Maitrise des éléments/Flamme noir", "Infligedes dégâts en dépensant du mana")
    .addField("Régénération de mana", "Rend du mana")
    .addField("Sorcier suprême", "Inflige des dégâts en dépensant du mana")
message.channel.send(embed1)
}
//FLAMME BLEU
if(message.content === prefix + "Flamme bleu"){                                                                
    var x = parseInt(40)
    var x0 = parseInt(55)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-40 Mana)', `:sparkles: ${résultat}`) //TEXTE
    .setImage(`https://media1.tenor.com/images/10e4a176fee41cc261ea480decae179b/tenor.gif?itemid=11504607 `) //Image
message.channel.send(embed1)
} 
//BLOCAGE MAGIQUE
if(message.content === prefix + "Blocage magique"){                                                                
    var x = parseInt(15)
    var x0 = parseInt(30)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous réduisez les dégâts de (-20 Mana)', `:shield: ${résultat}`) //TEXTE
    .setImage(`https://pa1.narvii.com/5760/6009230b6cfa24dc1296e83514ed9ad1304caf1f_hq.gif`) //Image
message.channel.send(embed1)
} 
//FLAMME NOIR
if(message.content === prefix + "Flamme noir"){                                                                
    var x = parseInt(60)
    var x0 = parseInt(80)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-50 Mana)', `:sparkles: ${résultat}`) //TEXTE
    .setImage(`https://vignette.wikia.nocookie.net/my-hero-academia-fanon/images/4/47/Tumblr_mjtfosOEgA1ryiagzo1_500.gif/revision/latest?cb=20190219143210 `) //Image
message.channel.send(embed1)
} 
//MAITRISE DES ELEMENTS
if(message.content === prefix + "Maitrise des éléments"){                                                                
    var x = parseInt(60)
    var x0 = parseInt(80)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-50 Mana)', `:sparkles: ${résultat}`) //TEXTE
    .setImage(`https://usuldeath.files.wordpress.com/2012/10/1965848935_4.jpg `) //Image
message.channel.send(embed1)
} 
//SORCIER SUPREME
if(message.content === prefix + "Sorcier suprême"){                                                                
    var x = parseInt(60)
    var x0 = parseInt(80)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-50 Mana)', `:sparkles: ${résultat}`) //TEXTE
    .setImage(`https://i.pinimg.com/originals/21/13/84/211384b9643d7b9f9fda62d68646662b.gif`) //Image
message.channel.send(embed1)
} 
//ATTAQUE ARCHIMAGE
if(message.content === prefix + "Attaque Archimage"){
    var embed1 = new Discord.RichEmbed()
    .setTitle("**ARCHIMAGE :**")
    .addField("Magie céleste", "Inflige des dégâts en dépensant du mana")
    .addField("Courant d'air", "Réduit les dégâts subis")
    .addField("Contrôle du son", "Renvoie les dégâts subis")
    .addField("Arrêt du temps", "Inflige des dégâts en dépensant du mana")
    .addField("Archimage suprême", "Inflige des dégâts en dépensant du mana")
message.channel.send(embed1)
}
//MAGIE CELESTE
if(message.content === prefix + "Magie céleste"){                                                                
    var x = parseInt(120)
    var x0 = parseInt(150)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-100 Mana)', `:sparkles: ${résultat}`) //TEXTE
    .setImage(`https://pa1.narvii.com/5971/d29152cb64d977625ae6da02637fcad6c4f02130_hq.gif`) //Image
message.channel.send(embed1)
} 
//COURANT D'AIR
if(message.content === prefix + "Courant d'air"){                                                                
    var x = parseInt(20)
    var x0 = parseInt(40)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous réduisez les dégâts de (-200 Mana)', `:shield: ${résultat}`) //TEXTE
    .setImage(`https://steamuserimages-a.akamaihd.net/ugc/392175615059910322/B84923325E759A27AB9CE4C6CCB5F82CEDFDCBD3/`) //Image
message.channel.send(embed1)
} 
//CONTROLE DU SON
if(message.content === prefix + "Contrôle du son"){                                                                
    var x = parseInt(50)
    var x0 = parseInt(80)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Renvoie les dégâts qui lui sont destinés (-150 Mana)') //TEXTE
    .setImage('https://i.pinimg.com/originals/e2/34/8f/e2348f8b823ed24a30c3bba77911ca09.gif') //Image
message.channel.send(embed1)
}
//ARRET DU TEMPS
if(message.content === prefix + "Arrêt du temps"){                                                                
    var x = parseInt(150)
    var x0 = parseInt(200)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-150 Mana)', `:sparkles: ${résultat}`) //TEXTE
    .setImage(`http://ekladata.com/SKybj42zYJ4saySOYfaKzz4HQ3g.gif`) //Image
message.channel.send(embed1)
} 
//ARCHIMAGE SUPREME
if(message.content === prefix + "Archimage suprême"){                                                                
    var x = parseInt(200)
    var x0 = parseInt(250)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous infligez des dégâts (-200 Mana)', `:sparkles: ${résultat}`) //TEXTE
    .setImage(`https://i.pinimg.com/originals/29/b1/e4/29b1e44c8ce76f0e0140f75057dabf99.gif`) //Image
message.channel.send(embed1)
} 
//ATTAQUE NECROMANCIEN
if(message.content === prefix + "Attaque Nécromancien"){
    var embed1 = new Discord.RichEmbed()
    .setTitle("**NECROMANCIEN :**")
    .addField("Image de mort", "Effraye l'ennemie durant 3 tours")
    .addField("Flamme purgatrice", "Inflige des dégâts en dépensant du mana")
    .addField("Drain de vie", "")
    .addField("Invocation d'ombre", "")
    .addField("Nécromancien suprême", "")
message.channel.send(embed1)
}
//SIMPLE BLOCAGE
    if(message.content === prefix + "Simple blocage"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`https://media2.giphy.com/media/ouATgQU6FnpPG/source.gif`) //Image
    message.channel.send(embed1)
    } 
//FAIBLE BLOCAGE
    if(message.content === prefix + "Faible blocage"){                                                                
        var x = parseInt(5)
        var x0 = parseInt(15)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`https://i.gifer.com/LAfM.gif`) //Image
    message.channel.send(embed1)
    }   
});
