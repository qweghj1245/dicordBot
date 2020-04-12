module.exports.baldCommand = (receiveMessage) => {
  if (receiveMessage.content.includes('禿頭')) {
    receiveMessage.channel.send('你才禿頭，禿頭怪');
  }
};