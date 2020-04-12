const { parseCommand } = require('../base/commen');

module.exports.helpCommand = (receiveMessage) => {
  parseCommand(receiveMessage).then(({ primaryCommand, args }) => {
    if (primaryCommand === 'help') {
      formatCommand(args, receiveMessage);
    }
  });
};

const formatCommand = (args, receiveMessage) => {
  if (args.length === 0) {
    return receiveMessage.channel.send('不知道你在公殺, 請用這個格式尋求幫助 !help [topic]');
  }
}