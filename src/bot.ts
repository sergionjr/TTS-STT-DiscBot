import { Client, Message } from 'discord.js';

// 

const ClientOptions: ClientOptions = {
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_VOICE_STATES',
        'GUILD_PRESENCES',
        'GUILD_MEMBERS',
        'GUILD_BANS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_INTEGRATIONS',
        'GUILD_WEBHOOKS',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_PRESENCES',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS',
        'DIRECT_MESSAGE_TYPING'
    ]};

const client = new Client(ClientOptions);

client.once('ready', () => {
    console.log('Ready!');
});


client.login(process.env.TOKEN);

