import * as discord from 'discord.js';
import dotenv from 'dotenv';

dotenv.config({path: '../.env'});
// 

// const ClientOptions: ClientOptions = {
//     intents: [
//         'GUILDS',
//         'GUILD_MESSAGES',
//         'GUILD_MESSAGE_REACTIONS',
//         'GUILD_VOICE_STATES',
//         'GUILD_PRESENCES',
//         'GUILD_MEMBERS',
//         'GUILD_BANS',
//         'GUILD_EMOJIS_AND_STICKERS',
//         'GUILD_INTEGRATIONS',
//         'GUILD_WEBHOOKS',
//         'GUILD_INVITES',
//         'GUILD_VOICE_STATES',
//         'GUILD_PRESENCES',
//         'GUILD_MESSAGES',
//         'GUILD_MESSAGE_REACTIONS',
//         'GUILD_MESSAGE_TYPING',
//         'DIRECT_MESSAGES',
//         'DIRECT_MESSAGE_REACTIONS',
//         'DIRECT_MESSAGE_TYPING'
//     ]};

// const client = new Client(ClientOptions);

// client.once('ready', () => {
//     console.log('Ready!');
// });

console.log(process.env.DISCORD_API_KEY);
console.log(process.env.ENVTEST);

console.log("End");


// client.login(process.env.TOKEN);

