const { Telegraf } = require('telegraf');
const bot = new Telegraf(
	'7145260293:AAGzJMYpk48sNEWJ7NgXCzp3QMm1LshowJg'
);

bot.start(ctx => ctx.reply('Start command'));

bot.help(ctx => ctx.reply('Help command'));

bot.settings(ctx => ctx.reply('Settings'));

bot.command('stop', (ctx) => {
	return ctx.reply('Stop command');
});

bot.mention('botfather', (ctx) => {
	return ctx.reply('botfather mentioned');
});

bot.phone('+79955007338', (ctx) => {
	ctx.reply('phone number');
});

bot.hashtag('bot', (ctx) => {
	ctx.reply('bot hashtag');
});

bot.command('ctx', (ctx) => {
	return ctx.reply(ctx.update.message.from.username);
});

bot.launch().then((res) => {
	console.log('Started');
}).catch((err) => console.log(err));