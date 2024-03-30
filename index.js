const { Telegraf } = require('telegraf');
const bot = new Telegraf(
	'7145260293:AAGzJMYpk48sNEWJ7NgXCzp3QMm1LshowJg'
);

bot.start(ctx => ctx.reply('Start command'));

bot.help(ctx => ctx.reply('Help command'));

bot.settings(ctx => ctx.reply('Settings'));

bot.launch().then((res) => {
	console.log('Started');
}).catch((err) => console.log(err));