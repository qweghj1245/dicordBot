const baldCommand = (receiveMessage) => {
  if (receiveMessage.content.includes('禿頭')) {
    receiveMessage.channel.send('你才禿頭，禿頭怪');
  }
};

const uglyCommand = (receiveMessage) => {
  if (receiveMessage.content.includes('醜')) {
    receiveMessage.channel.send(`${receiveMessage.author.toString()}才是醜八怪`);
  }
};

const prettyCommand = (receiveMessage) => {
  if (receiveMessage.content.includes('可愛')) {
    receiveMessage.channel.send(`${receiveMessage.author.toString()} 最可愛`);
  }
};

module.exports.baobao = (rm) => {
  baldCommand(rm);
  uglyCommand(rm);
  prettyCommand(rm);
}