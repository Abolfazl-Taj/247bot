const { SlashCommandBuilder } = require("discord.js")

module.exports.data = new SlashCommandBuilder()
	.setName("resume")
	.setDescription("Resumes the music")

module.exports.category = "Music"

module.exports.run = async ({ client, interaction, Systems }) => {
	const getMusic = await Systems.findOne({
		where: { system: "Music" },
	})

	if (getMusic.online === false) {
		return await interaction
			.editReply({
				content: "The Music system is currently disabled",
			})
			.catch((err) => {})
	}

	if (interaction.channel.id !== "992630810186367016") {
		return await interaction
			.editReply({
				content:
					"You can only use that command in <#992630810186367016>! (this message will autodelete)",
			})
			.catch((err) => {})
			.then((interaction) => {
				setTimeout(() => interaction.delete().catch((err) => {}), 6000)
			})
	}

	const queue = await client.distube.getQueue(interaction.guildId)

	if (!queue) {
		return await interaction
			.editReply({ content: "There are no songs in the queue" })
			.catch((err) => {})
			.then((interaction) => {
				setTimeout(() => interaction.delete().catch((err) => {}), 10000)
			})
	}

	if (!queue.paused) {
		return await interaction
			.editReply({
				content: "The music is already playing",
			})
			.catch((err) => {})
			.then((interaction) => {
				setTimeout(() => interaction.delete().catch((err) => {}), 10000)
			})
	}

	await queue.resume()

	await interaction
		.editReply({
			content:
				"The music has been resumed! Use `/pause` to pause the music again",
		})
		.catch((err) => {})
		.then((interaction) => {
			setTimeout(() => interaction.delete().catch((err) => {}), 10000)
		})
}
