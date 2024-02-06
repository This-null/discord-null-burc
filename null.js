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
    const channel = client.channels.cache.get(conf.GUNLUK_YORUM_CHANNEL);
    burc.daily('akrep').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Akrep\n${yorum}`);
        });
    })
    burc.daily('oğlak').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Oğlak\n${yorum}`);
        });
    })
    burc.daily('koç').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Koç\n${yorum}`);
        });
    })
    burc.daily('aslan').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Aslan\n${yorum}`);
        });
    })
    burc.daily('terazi').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Terazi\n${yorum}`);
        });
    })
    burc.daily('balık').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Balık\n${yorum}`);
        });
    })
    burc.daily('boğa').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Boğa\n${yorum}`);
        });
    })
    burc.daily('kova').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Kova\n${yorum}`);
        });
    })
    burc.daily('başak').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Başak\n${yorum}`);
        });
    })
    burc.daily('yay').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Yay\n${yorum}`);
        });
    })
    burc.daily('ikizler').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`İkizler\n${yorum}`);
        });
    })
    burc.daily('yengeç').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Yengeç\n${yorum}`);
        });
    })

});


///////////// BURÇ YORUMLARI HAFTALIK ////////

client.on('ready', () => {
    console.log(`Haftalık Burçlar Hazır.`);
    const channel = client.channels.cache.get(conf.HAFTALIK_YORUM_CHANNEL);
    burc.weekly('akrep').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Akrep\n${yorum}`);
        });
    })
    burc.weekly('oğlak').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`oğlak\n${yorum}`);
        });
    })
    burc.weekly('koç').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Koç\n${yorum}`);
        });
    })
    burc.weekly('aslan').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Aslan\n${yorum}`);
        });
    })
    burc.weekly('terazi').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Terazi\n${yorum}`);
        });
    })
    burc.weekly('balık').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Balık\n${yorum}`);
        });
    })
    burc.weekly('boğa').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Boğa\n${yorum}`);
        });
    })
    burc.weekly('kova').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Kova\n${yorum}`);
        });
    })
    burc.weekly('başak').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Başak\n${yorum}`);
        });
    })
    burc.weekly('yay').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Yay\n${yorum}`);
        });
    })
    burc.weekly('ikizler').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`İkizler\n${yorum}`);
        });
    })
    burc.weekly('yengeç').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Yengeç\n${yorum}`);
        });
    })

});



///////////// BURÇ YORUMLARI AYLIK ///////////

client.on('ready', () => {
    console.log(`Aylık Burçlar Hazır.`);
    const channel = client.channels.cache.get(conf.AYLIK_YORUM_CHANNEL);
    burc.monthly('akrep').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Akrep\n${yorum}`);
        });
    })
    burc.monthly('oğlak').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Oğlak\n${yorum}`);
        });
    })
    burc.monthly('koç').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Koç\n${yorum}`);
        });
    })
    burc.monthly('aslan').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Aslan\n${yorum}`);
        });
    })
    burc.monthly('terazi').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Terazi\n${yorum}`);
        });
    })
    burc.monthly('balık').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Balık\n${yorum}`);
        });
    })
    burc.monthly('boğa').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Boğa\n${yorum}`);
        });
    })
    burc.monthly('kova').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Kova\n${yorum}`);
        });
    })
    burc.monthly('başak').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Başak\n${yorum}`);
        });
    })
    burc.monthly('yay').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Yay\n${yorum}`);
        });
    })
    burc.monthly('ikizler').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`İkizler\n${yorum}`);
        });
    })
    burc.monthly('yengeç').then((yorum) => {
        cron.schedule('00 00 8 * * *', () => {
          channel.send(`Yengeç\n${yorum}`);
        });
    })

});






