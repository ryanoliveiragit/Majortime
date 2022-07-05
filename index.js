require('dotenv').config();
const { Client, Intents, MessageFlags, Message, DiscordAPIError } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
});

client.on('ready', () => {
    let chanel = client.channels.cache.get("993908392991150160")
    chanel.send('O Sistema de mensagens temporárias está ativado!').catch(e=>{console.log(e)});

    setInterval(function(){
        const newYers = "10 november 2022"
            const newYearsDate = new Date(newYers);
            const currentDate = new Date();
            const totalSeconds = (newYearsDate - currentDate) / 1000;
            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const mins = Math.floor(totalSeconds / 60) % 60;
            const seconds = Math.floor(totalSeconds) % 60;
        chanel.send('https://giphy.com/gifs/blast-pro-series-blastproseries-QZybi9Vz7RbEOoTyvX')
        chanel.send(`Faltam ${days} dias, ${hours} horas e ${mins} minutos.`);
    }, 86400000);
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;

    if(message.content === '$timer') {
            const newYers = "10 november 2022"
            const newYearsDate = new Date(newYers);
            const currentDate = new Date();
            const totalSeconds = (newYearsDate - currentDate) / 1000;
            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const mins = Math.floor(totalSeconds / 60) % 60;
            const seconds = Math.floor(totalSeconds) % 60;
            message.channel.send('https://giphy.com/gifs/blast-pro-series-blastproseries-QZybi9Vz7RbEOoTyvX')
            message.channel.send(`Faltam ${days} dias, ${hours} horas e ${mins} minutos.`)
    }
    if(message.content === '$price') {
        message.channel.send(`Foram gasto o total de R$98.982,53 Dinheiros`);
    }
});
client.login(process.env.token)