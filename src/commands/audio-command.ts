import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import {Command} from "./Command";

const slashCmd : Command = {
    data : new SlashCommandBuilder()
        .setName("listen")
        .setDescription("Bot will join the call and listen for audio commands"),
    async execute(interaction: CommandInteraction){
        const userId = interaction.user.id;
        const userInGuild = await interaction.guild?.members.fetch(userId);
        const userVoiceChannel = userInGuild?.voice.channel;

        if (!userVoiceChannel){
            return interaction.reply('You must be in a voice channel first.')
        }

        const connection = await userVoiceChannel.joinable

        
    }
}