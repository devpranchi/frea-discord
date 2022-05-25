const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Fetches the avatar of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('member').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		const user = interaction.options.getUser('member');
		if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
		return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL({ dynamic: true })}`);
	},
};