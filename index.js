const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const prefix = process.env.PREFIX;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if (command === 'embed') {
		const embed = new Discord.MessageEmbed()
		.setColor(0x79E621)
		.setDescription(args.join(" "))
		.setAuthor('TSP Messenger', 'https://i.ibb.co/K9NSjHf/speech-balloon-green-m-icon.png')
		.setThumbnail('https://i.ibb.co/K9NSjHf/speech-balloon-green-m-icon.png')
        message.channel.send(embed);
	}
});

client.login(process.env.CLIENT_TOKEN);