module.exports.parseCommand = (receiveMessage) => {
  let fullCommand = receiveMessage.content.substr(1);
  let splitCommand = fullCommand.split(' ');
  let primaryCommand = splitCommand[0];
  let args = splitCommand.slice(1);
  return Promise.resolve({ primaryCommand, args });
};