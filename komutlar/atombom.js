const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('BOOM')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://cdn.discordapp.com/attachments/382580600697126924/384321667897229312/atom_bomba.gif','https://cdn.discordapp.com/attachments/382580600697126924/384321657923305472/nykleer_bomba_deniz.gif','https://cdn.discordapp.com/attachments/382580600697126924/384321653192130561/atom_bombas_nykleer.gif','https://cdn.discordapp.com/attachments/382580600697126924/384321608950743075/atom_bomba_siyah_beyaz.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atombombası',
  description: 'Bomba Patlatır',
  usage: 'atombombası'
};
