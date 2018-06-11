const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Seri Katil 😎😱\n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setImage("https://media.giphy.com/media/kDBbGF05srPTq/giphy.gif")
  .setFooter("2018 | ЯΣXO™| Clan BOT", "")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'serikatil',
  description: 'Seri Katil Olursun',
  usage: 'serikatil'
};
