const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
  token: process.env.TOKEN,
  prefix: "!",
  intents: ["Guilds", "GuildMessages", "MessageContent"]
});

bot.command({
  name: "ping",
  code: `Pong! $pingms`
});

bot.command({
  name: "duty",
  code: `
$author[🔧 DUTY MEKANIK]
$title[🛠️ MEKANIK DALTON BERTUGAS]
$description[
👨‍🔧 Nama: \`$username\`
📍 Status: 🟢 OPEN
📝 Note: ✅ Siap melayani
🕒 Jam: $hour:$minute WIB
]
$color[#FFC0CB]
`
});
