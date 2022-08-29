const discord = require("discord.js")

module.exports = async (bot, message) => {
  
  let prefix = "+";

  let messageArray = message.content.split(" ")
  let commandName = messageArray[0].slice(prefix.lenth)
  let args = messageArray.slice(1)

 if(!message.content.startsWith(prefix)) return;

  let command = require(`../Commandes/${commandName}`)
  
  if(!command) return message.reply("Commandes inexistante")
  
  command.run(bot, message, args)
}