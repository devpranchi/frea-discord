const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('A simple ping command for now.'),
	async execute(interaction) {
		await interaction.reply('Pong! <https://vallessalta.pranchi.xyz>');
	},
};