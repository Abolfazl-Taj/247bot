const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports.data = new SlashCommandBuilder()
	.setName("seek")
	.setDescription("Seek to a position in the current song")
	.addIntegerOption((option) =>
		option
			.setName("seconds")
			.setDescription("Position in seconds to seek to")
			.setMinValue(0)
			.setRequired(true)
	)

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

	const queue = client.distube.getQueue(interaction.guildId)

	if (!queue) {
		return await interaction
			.editReply({ content: "There is nothing playing" })
			.catch((err) => {})
			.then((interaction) => {
				setTimeout(() => interaction.delete().catch((err) => {}), 10000)
			})
	}

	const seconds = interaction.options.getInteger("seconds")

	const currentSong = queue.songs[0]

	if (seconds > currentSong.duration) {
		return await interaction
			.editReply({
				content: `Invalid input. The current song is **${currentSong.duration}** seconds long`,
			})
			.catch((err) => {})
			.then((interaction) => {
				setTimeout(() => interaction.delete().catch((err) => {}), 10000)
			})
	}

	await queue.seek(seconds)

	await interaction
		.editReply({
			content: `🎵 | Seeked to ${seconds} seconds!`,
		})
		.catch((err) => {})
		.then((interaction) => {
			setTimeout(() => interaction.delete().catch((err) => {}), 10000)
		})
}
