module.exports = member => {
  const channel = member.guild.channels.find('name', 'genel-sohbet');
  if (!channel) return;
  channel.send(`${member} Sunucuya Giriş Yaptı İyi Eglenceler. :wink:`)
};
