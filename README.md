# dashi
## _Yet Another Discord Bot_

A multi-function Discord bot created with Discord.js V14. Single guild bot. Features include unique phrase response ("dialects"), text and slash commands, an economy/inventory system, reaction roles, music features, and more.

Created by mezmer420#7301

## Known Issues:

- Ticket channel transcripts not currently working
- "RawMessage" context command still work-in-progress
- If you work then immediately use daily while your work minigame is still in progress, then finish the work minigame, you'll lose the coins you got from daily
- Some events possibly not being logged properly
- Some occasional music issues (usually problems with DisTube, not the bot)

## Features:

- "Dialect" responses
- General repsonses
- Text-based prefix commands
- Wide array of application (/) commands
- A local database
- Economy and inventory system
- XP and Ranking system
- Children system (don't ask)
- Chat bot
- Ticket system
- Music system
- Birthday system
- Event logging
- Warn and infraction system
- Message filter and auto warn
- Crazy user(s) suppression system
- Verification and reaction roles system
- Ability to DM users/recieve DMs
- Welcome messaging

- Event and command handlers
- Error handling anti-crash system

## Dependencies:

    "@discordjs/opus": "^0.8.0",
    "@discordjs/rest": "^1.0.0",
    "@discordjs/voice": "^0.11.0",
    "@distube/soundcloud": "^1.2.1",
    "@distube/spotify": "^1.3.2",
    "@distube/yt-dlp": "^1.1.3",
    "@distube/ytdl-core": "^4.11.5",
    "@iamtraction/google-translate": "^1.1.2",
    "axios": "^0.27.2",
    "dbd-dark-dashboard": "^1.6.591",
    "discord-api-types": "^0.36.2",
    "discord-chatbot": "^2.1.0",
    "discord-dashboard": "^2.3.40",
    "discord-html-transcripts": "^2.5.8",
    "discord.js": "^14.5.0",
    "discord.js-docs": "^0.3.0",
    "distube": "^4.0.2",
    "ffmpeg-static": "^4.4.1",
    "formidable": "^2.0.1",
    "i": "^0.3.7",
    "libsodium-wrappers": "^0.7.10",
    "moment": "^2.29.4",
    "node-cron": "^3.0.1",
    "npm": "^8.14.0",
    "ns": "^1.0.2",
    "reconlx": "^2.5.6",
    "sequelize": "^6.21.3",
    "sqlite3": "^5.0.9",
    "superagent": "^8.0.0",
    "tesseract.js": "^2.1.5",
    "ytdl-core": "^4.11.0"
    
*Only works in one guild (server)!* I didn't bother coding it to be multi-guild compatible as I never intended it ever be used outside of my own server. Heavily hardcoded to work only for the server.

Feel free to browse the code for inspiration for your own bots... I definitely look at others' :p
