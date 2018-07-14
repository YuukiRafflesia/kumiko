require('dotenv').config();

const Commando = require('discord.js-commando');

const client = new Commando.Client({
    commandPrefix: 'k!',
    owner: '194073671462027265',
    disableEveryone: true
});

const path = require('path');

client.registry
    .registerGroups([
        ['kumiko-interact', 'Interact with Kumiko!'],
        ['image', 'Mess around with images!']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(process.env.DISCORD_TOKEN);