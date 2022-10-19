const { EmbedBuilder } = require("discord.js")

module.exports = {
	name: "stickerCreate",
	async execute(client, sticker, defaultColor) {
		const logs = await client.channels.cache.get("955948174894325782")

		const Embed = new EmbedBuilder()
			.setTitle("🆕 Sticker Created")
			.setDescription(
				`Sticker Name: **${sticker.name}**`
			)
			.setColor(defaultColor)
			.setTimestamp()

		logs.send({
			embeds: [Embed],
		}).catch((err) => {
			console.log(err)
		})
	},
}
