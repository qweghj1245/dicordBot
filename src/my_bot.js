const Discord = require('discord.js');
const client = new Discord.Client();
const { baldCommand } = require('./command/bald');

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
  let generalChannel = client.channels.cache.get('698861048593252383');
  let attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
  // generalChannel.send(attachment);
});

client.on('message', (receiveMessage) => {
  if (receiveMessage.author === client.user) {
    return;
  }
  // receiveMessage.channel.send(`Message received, ${receiveMessage.author.toString()}: ${receiveMessage.content}`);
  // receiveMessage.react('👍');

  if (receiveMessage.content.startsWith('!')) {
    processCommand(receiveMessage);
  }
  baldCommand(receiveMessage);
});

const processCommand = (receiveMessage) => {
  let fullCommand = receiveMessage.content.substr(1);
  let splitCommand = fullCommand.split(' ');
  let primaryCommand = splitCommand[0];
  let args = splitCommand.slice(1);

  if (primaryCommand === 'help') {
    helpCommand(args, receiveMessage);
  }
}

const helpCommand = (args, receiveMessage) => {
  if (args.length === 0) {
    return receiveMessage.channel.send('I dont know what u want to ask, please use !help [topic]');
  } else {
    return receiveMessage.channel.send(`I think you want to know ${args}`);
  }
}

client.login(process.env.BOT_SECRET);