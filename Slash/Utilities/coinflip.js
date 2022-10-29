const { SlashCommandBuilder } = require("discord.js")

module.exports.data = new SlashCommandBuilder()
	.setName("coinflip")
	.setDescription("Flip a coin")

module.exports.category = "Utilities"

module.exports.run = async ({ client, interaction }) => {
	const outcomes = ["heads", "tails"]
	const outcome = outcomes[Math.floor(Math.random() * outcomes.length)]

	await interaction
		.editReply({
			content: `Ok, flipped it. It's... **${outcome}**`,
		})
		.catch((err) => {})
}
