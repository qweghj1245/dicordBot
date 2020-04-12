const Discord = require('discord.js');
const client = new Discord.Client();
const { baldCommand, uglyCommand, prettyCommand } = require('./anti/baobao');
const { helpCommand } = require('./command/help');

client.on('ready', () => {
  console.log('Connect as' + client.user.tag);
  client.user.setActivity('動物森友會', { type: 'PLAYING'});
  client.guilds.cache.forEach(guild => {
    console.log(guild.name);
    guild.channels.cache.forEach(channel => {
      console.log(`${channel.name} -- ${channel.type} -- ${channel.id}`);
    })
  });
  // general channel 698861048593252383
  // let generalChannel = client.channels.cache.get('698861048593252383');
  // let attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
  // generalChannel.send(attachment);
});

client.on('message', (receiveMessage) => {
  if (receiveMessage.author === client.user) {
    return;
  }
  // receiveMessage.channel.send(`Message received, ${receiveMessage.author.toString()}: ${receiveMessage.content}`);
  // receiveMessage.react('👍');

  helpCommand(receiveMessage);
  baldCommand(receiveMessage);
  uglyCommand(receiveMessage);
  prettyCommand(receiveMessage);
});

client.login(process.env.BOT_SECRET);