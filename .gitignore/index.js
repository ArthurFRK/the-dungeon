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



//TEST ROLL A 2 COULEURS
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
        .addField("Gardien", "*Classe Tank*")
        .addField("Prêtre", "*Classe Support*")
        .addField("Mage", "*Classe Dégâts*")
        .addField("Archer", "*Classe Dégâts*")
        .addField("Voleur", "*Classe Dégâts*")
        .addField("Chevalier", "*Classe Dégâts*")
    message.channel.send(embed1)
    }



//AURA MEURTRIÈRE 
if (message.content.startsWith(prefix + "Aura meurtrière 2")) {
  var x = parseInt(100)
  var x0 = parseInt(0)
  var x1 = Math.floor(x - x0)
  var x2 = Math.floor(Math.random() * x1)
  var x3 = parseInt(x2)
  var résultat = Math.floor(x3 + x0)
  if (résultat < 50) {
    message.channel.send({embed: {
      title: `AURA MEURTRIÈRE`,
      color: 0,
      image: {
          url: "https://media.giphy.com/media/12IS8ZMgRw2aLC/giphy.gif",
      }
    }})
  } else {
    message.channel.send({embed: {
        title: `AURA MEURTRIÈRE`,
        color: 0,
        image: {
          url: "https://thumbs.gfycat.com/BlindSnivelingCuttlefish-size_restricted.gif",
      }
    }})
  }        
  }     



//ATTAQUE GARDIEN
    if(message.content === prefix + "Attaque gardien"){
        var embed1 = new Discord.RichEmbed()
        .addField("**GARDIEN :**", "La classe qui a pour but d'encaisser les dégâts pour ses alliés")
        .addField("Coup de bouclier", "Inflige des dégâts")
        .addField("Provocation", "se fait focus")
        .addField("Bouclier Humain", "Réduit les dégâts subis")
    message.channel.send(embed1)
    }
//PROVOCATION
    if(message.content === prefix + "Provocation"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage('https://media.giphy.com/media/oOiiv7aXg5nAkNvfw9/giphy.gif') //Image
    message.channel.send(embed1)
    }
//COUP DE BOUCLIER
    if(message.content === prefix + "Coup de bouclier"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`https://data.whicdn.com/images/324850604/original.gif`) //Image
    message.channel.send(embed1)
    } 



//ATTAQUE PRETRE
    if(message.content === prefix + "Attaque prêtre"){
        var embed1 = new Discord.RichEmbed()
        .addField("**PRÊTRE :**", "La classe qui a pour but de soigner et protéger ses alliés")
        .addField("Soin rapide", "Soigne un allié")
        .addField("Bouclier protecteur", "Met un bouclier sur un allié réduisant de 100% les dégâts subis à la prochaine attaque")
        .addField("Faible Blocage", "Réduit les dégâts subis")
    message.channel.send(embed1)
    }
    //SOIN RAPIDE
    if(message.content === prefix + "Soin rapide"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`https://thumbs.gfycat.com/IncompleteJaggedGallinule-size_restricted.gif`) //Image
    message.channel.send(embed1)
    } 
//BOUCLIER PROTECTEUR
    if(message.content === prefix + "Bouclier protecteur"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`https://pa1.narvii.com/5760/6009230b6cfa24dc1296e83514ed9ad1304caf1f_hq.gif`) //Image
    message.channel.send(embed1)
    }



//ATTAQUE ARCHER
    if(message.content === prefix + "Attaque archer"){
        var embed1 = new Discord.RichEmbed()
        .addField("**ARCHER :**", "Une des classe qui a pour but d'infliger des dégâts à distance")
        .addField("Tir à l’arc", "Inflige des dégâts")
        .addField("Flèche chargée", "Tire une flèche et effectue un coup critique")
        .addField("Faible Blocage", "Réduit les dégâts subis")
    message.channel.send(embed1)
    }
//TIR A L'ARC
    if(message.content === prefix + "Tir à l'arc"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`http://66.media.tumblr.com/6eba9f5b5fa490dcaf878451dc69273c/tumblr_nxgk73Mb411qam6y9o3_500.gif`) //Image
    message.channel.send(embed1)
    }
//FLECHE CHARGE
    if(message.content === prefix + "Flèche chargée"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`https://media.giphy.com/media/psqqazmAKeeMU/giphy.gif`) //Image
    message.channel.send(embed1)
    }  



//ATTAQUE MAGE
    if(message.content === prefix + "Attaque mage"){
        var embed1 = new Discord.RichEmbed()
        .addField("**MAGE :**", "Une des classe qui a pour but d'infliger des dégâts à distance")
        .addField("Flamiche", "Inflige des dégâts")
        .addField("Fuite du combat ", "Permet de fuir un combat")
        .addField("Faible Blocage", "Réduit les dégâts subis")
    message.channel.send(embed1)
    }
//FLAMICHE
    if(message.content === prefix + "Flamiche"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`https://i.gifer.com/8oDd.gif`) //Image
    message.channel.send(embed1)
    } 
//FUITE DU COMBAT
    if(message.content === prefix + "Fuite du combat"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`https://media.giphy.com/media/1J2FKJ31JKn4I/giphy.gif`) //Image
    message.channel.send(embed1)
    }  



//ATTAQUE VOLEUR
    if(message.content === prefix + "Attaque voleur"){
        var embed1 = new Discord.RichEmbed()
        .addField("**VOLEUR :**", "Une des classe qui a pour but d'infliger des dégâts au corps à corps")
        .addField("Coup de dague", "Inflige des dégâts")
        .addField("Analyse instantanée ", "Permet d’esquiver à coup sûr")
        .addField("Simple Blocage", "Réduit les dégâts subis")
    message.channel.send(embed1)
    }
//COUP DE DAGUE
    if(message.content === prefix + "Coup de dague"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`https://pa1.narvii.com/6231/8a7bf702e838cde21aaf749fb963b684f144f835_hq.gif`) //Image
    message.channel.send(embed1)
    } 
//ANALYSE INSTANTANEE 
    if(message.content === prefix + "Analyse instantanée"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`https://media.giphy.com/media/ti6JIbzy21Edy/giphy.gif`) //Image
    message.channel.send(embed1)
    }



//ATTAQUE CHEVALIER
    if(message.content === prefix + "Attaque chevalier"){
        var embed1 = new Discord.RichEmbed()
        .addField("**CHEVALIER :**", "Une des classe qui a pour but d'infliger des dégâts au corps à corps")
        .addField("Coup d'épée", "Inflige des dégâts")
        .addField("Transcendance ", "Reprends tous ses points de vie mais double les dégâts subis par la suite")
        .addField("Simple Blocage", "Réduit les dégâts subis")
    message.channel.send(embed1)
    }
//COUP D'EPEE
    if(message.content === prefix + "Coup d'épée"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage(`https://media.giphy.com/media/10QC9oDFaLA0rC/giphy.gif`) //Image
    message.channel.send(embed1)
    } 
//TRANSCENDANCE
    if(message.content === prefix + "Transcendance"){                                                                
        var x = parseInt(200)
        var x0 = parseInt(50)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField("Reprends tous ses points de vie mais double les dégâts subis par la suite") //TEXTE
        .setImage(`http://images6.fanpop.com/image/photos/40600000/-All-Might-s-Rage-all-might-hero-number-1-40670644-500-240.gif`) //Image
    message.channel.send(embed1)
    } 


    
//BOUCLIER HUMAIN
    if(message.content === prefix + "Bouclier humain"){
        var x = parseInt(30)
        var x0 = parseInt(10)
        var x1 = Math.floor(x - x0)
        var x2 = Math.floor(Math.random() * x1)
        var x3 = parseInt(x2)
        var résultat = Math.floor(x3 + x0)
        var embed1 = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
        .setImage('https://66.media.tumblr.com/164109315faa6099d923173aff36f6fd/tumblr_osheoajJfU1tnk2buo9_500.gif') //Image
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
        var x = parseInt(200)
        var x0 = parseInt(50)
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




 
//TEST GIF
if (message.content === prefix + "GIF"){                                                                
    var x = parseInt(200)
    var x0 = parseInt(50)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    var embed1 = new Discord.RichEmbed()
    .setColor('#0099ff')
    .addField('Vous réduisez les dégâts de', `:shield: ${résultat}`) //TEXTE
    .setImage(`https://media1.tenor.com/images/9e62d8252eb65ddde9c5d7b996f566b5/tenor.gif?itemid=12673725`) //Image
message.channel.send(embed1)
    console.log("Commande TEST GIF demandée !")
}



//TEST ROLL A 3 Image
if (message.content.startsWith(prefix + "3 images")) {
    var x = parseInt(100)
    var x0 = parseInt(0)
    var x1 = Math.floor(x - x0)
    var x2 = Math.floor(Math.random() * x1)
    var x3 = parseInt(x2)
    var résultat = Math.floor(x3 + x0)
    if (résultat < 25) {
      message.channel.send({embed: {
        title: `${résultat} 0 à 25`,
        color: 16711680,
        image: {
            url: "https://pa1.narvii.com/5760/6009230b6cfa24dc1296e83514ed9ad1304caf1f_hq.gif",
        }
      }})
    } else if (résultat > 75) {
      message.channel.send({embed: {
        title: `${résultat} 75 à 100`,
        color: 65280,
        image: {
            url: "https://i.imgur.com/ZGPxFN2.jpg",
        }
      }}) 
    } else {
      message.channel.send({embed: {
          title: `${résultat} 2 5 à 75`,
          color: 0,
          image: {
            url: "https://media.giphy.com/media/l0HlymZ7Jv6JoiYjC/giphy.gif",
        }
      }})
    }        
    }     
});
