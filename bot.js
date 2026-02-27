const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Draculam.aternos.me',
  port: 28412,
  username: 'bot'
});

bot.on('spawn', () => {
  console.log('Bot joined the server');
});

bot.on('error', err => console.log(err));
bot.on('end', () => console.log('Disconnected'));
