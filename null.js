const { Client, GatewayIntentBits, Partials } = require('discord.js');
const conf = require("./ekmek.json");
const cron = require('node-cron');
const burc = require("burc-yorum");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping
    ],
    partials: [
        Partials.User,
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.Reaction,
        Partials.GuildScheduledEvent,
        Partials.ThreadMember
    ], 
    allowedMentions:{
        repliedUser: false,
        parse: ['users','roles','everyone']
    },
    presence: {
        activities: [
            {
                name: `null burc`,
            }
        ],
           status: "idle",
           
    },
});


client.setMaxListeners(0);
client.login(conf.TOKEN);

///////////// BURÇ YORUMLARI GÜNLÜK ////////

    client.on('ready', () => {
      console.log(`Günlük Burçlar Hazır.`);
      cron.schedule('00 00 8 * * *', () => {
      const burcArray = [];
      const channel = client.channels.cache.get(conf.GUNLUK_YORUM_CHANNEL);
      burcArray.forEach((burcName) => burc.daily(burcName).then((yorum) => {
        if (message.length <= 2000) {
           channel.send(`${burcName}\n${yorum}`);
      } else {
        const buffer = Buffer.from(message, 'utf-8');
        const attachment = new AttachmentBuilder(buffer, 'burc.txt');
         channel.send({ files: [attachment] });
      }
      }))
      });
    });

///////////// BURÇ YORUMLARI HAFTALIK ////////

    client.on('ready', () => {
      console.log(`Haftalık Burçlar Hazır.`);
      cron.schedule('00 00 8 * * *', () => {
      const burcArray = [];
      const channel = client.channels.cache.get(conf.HAFTALIK_YORUM_CHANNEL);
      burcArray.forEach((burcName) => burc.weekly(burcName).then((yorum) => {
        if (message.length <= 2000) {
           channel.send(`${burcName}\n${yorum}`);
      } else {
        const buffer = Buffer.from(message, 'utf-8');
        const attachment = new AttachmentBuilder(buffer, 'burc.txt');
         channel.send({ files: [attachment] });
      }
      }))
      });
    });
   

    ///////////// BURÇ YORUMLARI AYLIK ////////


    client.on('ready', () => {
      console.log(`Aylık Burçlar Hazır.`);
      cron.schedule('00 00 8 * * *', () => {
      const burcArray = [];
      const channel = client.channels.cache.get(conf.AYLIK_YORUM_CHANNEL);
      burcArray.forEach((burcName) => burc.monthly(burcName).then((yorum) => {
        if (message.length <= 2000) {
           channel.send(`${burcName}\n${yorum}`);
      } else {
        const buffer = Buffer.from(message, 'utf-8');
        const attachment = new AttachmentBuilder(buffer, 'burc.txt');
         channel.send({ files: [attachment] });
      }
      }))
      });
    });







