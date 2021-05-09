const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require('./işaret.json');

var prefix = işaret.prefix

client.on('ready', () => {
  console.log(`Bot sunucuya katıldı ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'maqx') {
    msg.reply('Buyrun benim?..');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'seni seviyorum') {
    msg.reply('Bende kendimi seviyorum :hearts:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleykümselam, Hoşgeldin knk.');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'küfür et') {
    msg.reply('Orda durucan, ben küfür sevmem edeni severim (:');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'nasılsın') {
    msg.reply('Yakışıklıyım :sunglasses:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'nerelisin') {
    msg.reply('Yozgatın dağlarından kopup geldim ben buralara..');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'youtube') {
    msg.reply('https://www.youtube.com/c/MAQXX');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'instagram') {
    msg.reply('https://www.instagram.com/maqxyoutube/ ');
  }
});


client.login('ODQwNzI0Mjc4NzYzNzE2NjE4.YJcXfw.6i7erlnIPxwHsspgdVQNl1vZKHc');
