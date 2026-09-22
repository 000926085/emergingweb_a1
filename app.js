const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const { clientId, guildId, token } = require('./config.json');

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [ GatewayIntentBits.Guilds,
		         GatewayIntentBits.GuildMessages,
		         GatewayIntentBits.MessageContent, ],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('interactionCreate', async function(interaction) {
    if (!interaction.isChatInputCommand()) return;

    // handle your slash command, query your database, reply to the user

    io.emit('botactivity', { command: interaction.commandName, time: new Date() });
});

client.login(token);

http.listen(3000, function() { console.log('Server listening...'); });
