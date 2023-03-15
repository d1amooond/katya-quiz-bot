const { Telegraf } = require('telegraf');
const bot = new Telegraf('5865626015:AAH3m6332MYchCmsTB8BD4UMwmwJY80HZHk');

bot.start((ctx) => {
  ctx.reply('Привіт, тобі потрібно вписати код нижче');
});

bot.on('text', (ctx) => {
  if (ctx.message.text.toUpperCase() === 'NGSF') {
    console.log(ctx.message)
    // Replace YOUR_FILE_ID with the ID of the file you want to send
    ctx.sendDocument(ctx.message.from?.id, { document: 'BQACAgIAAxkBAAMRZBH7diUJOyA3yK2sbwAB9nSGUcR6AAItJwACnLmRSEgIqPLD4Wl5LwQ' });
    ctx.sendDocument(ctx.message.from?.id, { document: 'BQACAgIAAxkBAAMYZBH8g_jhlRB9hjLbDhUMoW0wnxMAAjYnAAKcuZFIzDt9XhhVFAsvBA' });
  } else {
    ctx.reply('Неправильний код');
  }
});

bot.launch();
