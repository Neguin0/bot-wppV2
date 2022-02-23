const {
    default: WASocket,
    DisconnectReason,
    useSingleFileAuthState,
    downloadContentFromMessage,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    proto,
} = require('@adiwajshing/baileys');
const Pino = require('pino');
const axios = require('axios').default;
const fs = require('fs');
const app = require('express')();
app.get("/", (req, res) => res.send("Bot WhatsApp MD"));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("WebSite Online na porta:", port));
const { writeFile } = require('fs/promises')
const path = require('path').join;
const {
    Boom
} = require('@hapi/boom');
const {
    state,
    saveState
} = useSingleFileAuthState(
    path('session.json'),
    Pino({
        level: 'silent'
    })
);
const checkVersion = async() => {
    let BASE_URL = 'https://web.whatsapp.com/check-update?version=1&platform=web';
    const {
        data: JSONData
    } = await axios.get(BASE_URL);
    let version = JSONData.currentVersion.split('.').map(v => parseInt(v));
    return version;
};
var vermelho = '\u001b[31m';
var azul = '\u001b[34m';
var reset = '\u001b[0m';
var verde = '\u001B[32m';
var amarelo = '\u001B[33m';
var Menu = JSON.parse(fs.readFileSync("db.json"))
var Dono = ['556199955345@s.whatsapp.net'];
const LinkAPI = 'https://software-buscas.herokuapp.com';
var Puxada = false;
var LerMais = '‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎';
var Ttt = {p1:'', p2:'', tabuleiro:'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9'};
var PartidaTtt = {p1:'', p2:'', vez:1, chat:''};
var tab = ["A1","A2","A3","B1","B2","B3","C1","C2","C3"];
function TabuleiroTtt(){
	return Ttt.tabuleiro.replace(/[1-9]/g,'⬜');
}
function JogarTtt(p, pos){
	if(Ttt.p1.includes(pos) || Ttt.p2.includes(pos)) return {err:true, ganho:-1};
	Ttt[p] += pos;
	let p1 = Ttt.p1.split('').sort().join('');
	let p2 = Ttt.p2.split('').sort().join('');
	
	if(p === 'p1') Ttt.tabuleiro = Ttt.tabuleiro.replace(pos, '❌');
	if(p === 'p2') Ttt.tabuleiro = Ttt.tabuleiro.replace(pos, '⭕');
	
	let re = /1.*?2.*?3|4.*?5.*?6|7.*?8.*?9|1.*?4.*?7|2.*?5.*?8|3.*?6.*?9|1.*?5.*?9|3.*?5.*?7/;
	if(p1.search(re) !== -1){
		Ttt = {p1:'', p2:'', tabuleiro:'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9'};
		return {ganho:1, err:false};
	} else if(p2.search(re) !== -1){
		Ttt = {p1:'', p2:'', tabuleiro:'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9'};
		return {ganho:2, err:false};
	} else if((Ttt.p1+Ttt.p2).length >= 9){
		Ttt = {p1:'', p2:'', tabuleiro:'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9'};
		return {ganho:0, err:false};
	} else {
		return {err:false, ganho:-1};
	}
}
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const getGroupAdmins = participants => {
    admins = [];
    for (let i of participants) {
        i.admin ? admins.push(i.id) : '';
    }
    return admins;
};
function ramUsage() {
  return Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100 + "MB";
}
function cpuUsage() {
  return Math.round(process.cpuUsage().system / 1024 / 1024 * 100) / 100 + "MB";
}
const connect = async() => {
    let version = await checkVersion();
    const client = WASocket({
        printQRInTerminal: true,
        auth: state,
        logger: Pino({
            level: 'silent'
        }),
        version
    });
    client.ev.on('creds.update', saveState);
    client.ev.on('connection.update', async (up) => {
    	try{
        const { lastDisconnect, connection } = up;
        if (connection) { console.log('Connection Status: ', connection); }
        let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
        
        if (connection === 'close') {
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete ${session} and Scan Again`); process.exit(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log('Connection closed, reconnecting....'); connect(); }
            else if (reason === DisconnectReason.connectionLost) { console.log('Connection Lost from Server, reconnecting...'); connect(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log('Connection Replaced, Another New Session Opened, Please Close Current Session First'); process.exit(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete ${session} and Scan Again.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log('Restart Required, Restarting...'); connect(); }
            else if (reason === DisconnectReason.timedOut) { console.log('Connection TimedOut, Reconnecting...'); connect(); }
            else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }
        }
        }catch(e){
        	console.log(vermelho,"ERROR:", e);
        }
    })
    client.ev.on('group-participants.update', json => {});
    client.ev.on('messages.upsert', async m => {
        try {
            if (!m.messages[0]) return;
            if (m.type !== 'notify') return;
            const dados = m.messages[0];
            if (dados.key.remoteJid === 'status@broadcast') return;
            //console.log(JSON.stringify(dados, null, '  '));
            const jid = dados.key.remoteJid;
            const id = dados.key.participant || dados.key.remoteJid;
            const jidBot = client.user.id.replace(/:.+@/, '@');
            const nick = dados.pushName;
            const info = dados.message;
            const type = Object.keys(info).length > 0 ? Object.keys(info)[0] : '';
            const msg =
                info && info.extendedTextMessage ?
                info.extendedTextMessage.text :
                info && info.conversation ?
                info.conversation :
                info && info.imageMessage ?
                info.imageMessage.caption :
                '';
            const mentioned =
                type == 'extendedTextMessage' &&
                info &&
                info.extendedTextMessage &&
                info.extendedTextMessage.contextInfo &&
                info.extendedTextMessage.contextInfo.participant ?
                info.extendedTextMessage.contextInfo.participant :
                '';
            const mentions =
                type == 'extendedTextMessage' &&
                info &&
                info.extendedTextMessage &&
                info.extendedTextMessage.contextInfo &&
                info.extendedTextMessage.contextInfo.mentionedJid ?
                info.extendedTextMessage.contextInfo.mentionedJid :
                '';
            const cmd = msg.startsWith('/') ? msg.split(' ')[0].slice(1) : null;
            const text = cmd ? msg.slice(cmd.length + 2) : '';
            const args = text.split(' ');
            const reply = texto => client.sendMessage(jid, {
                text: texto
            }, {
                quoted: dados
            });
            const send = texto => client.sendMessage(jid, {
                text: texto
            });
            const sendTo = (to, texto) => client.sendMessage(to, {
                text: texto
            });
            const replyJson = texto =>
                client.sendMessage(jid, {
                    text: JSON.stringify(texto, null, '\t'),
                    quoted: dados
                });
            const mention = (texto, mark) => client.sendMessage(jid, {text: texto, contextInfo: {mentionedJid: [addMentionsInArray(texto)]}}, (mark ? {quoted: dados} : {}));
            const mentionArray = (texto, ment, mark) => client.sendMessage(jid, {text: texto, contextInfo: {mentionedJid: ment}}, (mark ? {quoted: dados} : {}));
			const addMentionsInArray = (texto) => {
				const re = /@[0-9]+/g
				if (!re.test(texto)) return [];
				var mentioneds = [];
				for (let i of texto.match(re))
					mentioneds.push(i.replace(/@/g, '')+"@s.whatsapp.net");
				return mentioneds;
			};
            const IsDono = Dono.includes(id);
            const isGroup = jid.endsWith('@g.us');
            const groupMetadata = isGroup ? await client.groupMetadata(jid) : '';
            const groupName = isGroup ? groupMetadata.subject : '';
            const groupMembers = isGroup ? groupMetadata.participants : '';
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';
            const isBotGroupAdmins = groupAdmins.includes(jidBot);
            const isGroupAdmins = groupAdmins.includes(id);
            const selo = {
				"key": {
					participant: "0@s.whatsapp.net",
					remoteJid: "120363024204176988@g.us",
				},
				"message": {
					"imageMessage": {
						"jpegThumbnail": "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"
					}
				}
			}
            const Botao =
                info && info.buttonsResponseMessage && info.buttonsResponseMessage.selectedButtonId ?
                info.buttonsResponseMessage.selectedButtonId :
                '';
            const ButaoTamplate =
                info && info.templateButtonReplyMessage && info.templateButtonReplyMessage.selectedId ?
                info.templateButtonReplyMessage.selectedId :
                '';
            const ListRow =
                info && info.listResponseMessage && info.listResponseMessage.singleSelectReply && info.listResponseMessage.singleSelectReply.selectedRowId ?
                info.listResponseMessage.singleSelectReply.selectedRowId :
                '';
            const ListTitle = 
            	info &&
                info.listResponseMessage &&
                info.listResponseMessage.contextInfo &&
                info.listResponseMessage.contextInfo.quotedMessage &&
                info.listResponseMessage.contextInfo.quotedMessage.listMessage &&
                info.listResponseMessage.contextInfo.quotedMessage.listMessage.sections &&
                info.listResponseMessage.contextInfo.quotedMessage.listMessage.sections[0].title ?
                info.listResponseMessage.contextInfo.quotedMessage.listMessage.sections[0].title : '';
            if(cmd && !isGroup) console.log(`${verde}[CMD] ${reset}${msg} ${amarelo}de ${azul}${nick}`);
            if(cmd && isGroup) console.log(`${verde}[CMD] ${reset}${msg} ${amarelo}de ${azul}${nick} ${amarelo}em ${azul}${groupName}`);
            //================ [GATILHO] ==================
            client.sendReadReceipt(jid, id, [dados.key.id]);
            if (Botao == 'alo') {
                reply('funcionando');
            }
            if(ListTitle === 'Ttt'){
            	if(PartidaTtt.chat !== '' && PartidaTtt.chat !== jid) return reply ("*Jogo da velha já esta sendo jogado em outro grupo!*");
            	if(PartidaTtt.p1 === id && PartidaTtt.vez === 1){
            		let pos = parseInt(ListRow)
            		let game = JogarTtt('p1', pos);
            		let sections = [{title:"Ttt",rows: []}];
            		Ttt.tabuleiro.match(/[0-9]/g).map(function(i){
						sections[0].rows.push({title:`${tab[parseInt(i)-1]}`, rowId:`${i}`});
					})
					let listMessage = {
					  title: "Escolha uma opção:",
					  text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
					  footer: "# Vez de: ⭕",
					  buttonText: "Jogar 🎮",
					  sections,
					  contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]},
					}
					await client.sendMessage(jid, listMessage, {quoted: dados});
            		if(game.err) return reply("*Posição já jogada!*");
					PartidaTtt.vez=2;
            		if(game.ganho === 1){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*❌: Player 1 ganhou🎉🎊*");
					} else if(game.ganho === 2){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*⭕: Player 2 ganhou🎉🎊*");
					} else if(game.ganho === 0){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*❌⬜⭕: Empate👵*");
					}
	            } else if(PartidaTtt.p2 === id && PartidaTtt.vez === 2){
            		let pos = parseInt(ListRow)
            		let game = JogarTtt('p2', pos);
            		let sections = [{title:"Ttt",rows: []}];
            		Ttt.tabuleiro.match(/[0-9]/g).map(function(i){
						sections[0].rows.push({title:`${tab[parseInt(i)-1]}`, rowId:`${i}`});
					})
					let listMessage = {
					  title: "Escolha uma opção:",
					  text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
					  footer: "# Vez de: ❌",
					  buttonText: "Jogar 🎮",
					  sections,
					  contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]},
					}
					await client.sendMessage(jid, listMessage, { quoted: dados });
            		if(game.err) return reply("*Posição já jogada!*");
					PartidaTtt.vez=1;
            		if(game.ganho === 1){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*❌: Player 1 ganhou🎉🎊*");
					} else if(game.ganho === 2){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*⭕: Player 2 ganhou🎉🎊*");
					} else if(game.ganho === 0){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*❌⬜⭕: Empate👵*");
					}
	            } else if(PartidaTtt.p1 === '' && PartidaTtt.vez === 1 && PartidaTtt.p2 !== id){
					PartidaTtt.p1 = id;
					let pos = parseInt(ListRow)
            		let game = JogarTtt('p1', pos);
            		let sections = [{title:"Ttt",rows: []}];
            		Ttt.tabuleiro.match(/[0-9]/g).map(function(i){
						sections[0].rows.push({title:`${tab[parseInt(i)-1]}`, rowId:`${i}`});
					})
					let listMessage = {
					  title: "Escolha uma opção:",
					  text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
					  footer: "# Vez de: ⭕",
					  buttonText: "Jogar 🎮",
					  sections,
					  contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]},
					}
					await client.sendMessage(jid, listMessage, { quoted: dados });
            		if(game.err) return reply("*Posição já jogada!*");
					PartidaTtt.vez=2;
            		if(game.ganho === 1){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*❌: Player 1 ganhou🎉🎊*");
					} else if(game.ganho === 2){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*⭕: Player 2 ganhou🎉🎊*");
					} else if(game.ganho === 0){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*❌⬜⭕: Empate👵*");
					}
				} else if(PartidaTtt.p2 === '' && PartidaTtt.vez === 2 && PartidaTtt.p1 !== id){
					PartidaTtt.p2 = id;
					let pos = parseInt(ListRow)
            		let game = JogarTtt('p2', pos);
            		let sections = [{title:"Ttt",rows: []}];
            		Ttt.tabuleiro.match(/[0-9]/g).map(function(i){
						sections[0].rows.push({title:`${tab[parseInt(i)-1]}`, rowId:`${i}`});
					})
					let listMessage = {
					  title: "Escolha uma opção:",
					  text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
					  footer: "# Vez de: ❌",
					  buttonText: "Jogar 🎮",
					  sections,
					  contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]},
					}
					await client.sendMessage(jid, listMessage, { quoted: dados });
            		if(game.err) return reply("*Posição já jogada!*");
					PartidaTtt.vez=1;
            		if(game.ganho === 1){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*❌: Player 1 ganhou🎉🎊*");
					} else if(game.ganho === 2){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*⭕: Player 2 ganhou🎉🎊*");
					} else if(game.ganho === 0){
						PartidaTtt.p1='';
						PartidaTtt.p2='';
						PartidaTtt.vez=1;
						return reply("*❌⬜⭕: Empate👵*");
					}
				}
            }
            //============= [COMANDOS] ================
            if(!Menu.includes(cmd)){
				Menu.push(cmd);
				fs.writeFileSync("db.json", JSON.stringify(Menu, null, '\t'));
			}
            switch (cmd) {
            	case 'gostosos':
            		let rands = [], t = "", c = 0, ids = [], vezes = 5;
            		if(isNaN(text)) vezes = parseInt(text);
					for(let i=0; i < vezes; i++) rands.push(await random(0, groupMembers.length));
					for(let i of rands){
						c++;
						ids.push(groupMembers[i].id);
						t += `#${c} @${groupMembers[i].id.split("@")[0]} \n`;
					}
					await mentionArray(`*Rank Gostosos😏*\n\n${t}`, ids, true);
					break;
                case 'menu':
                    client.sendMessage(jid, {text: `*🖥️ 𝙼𝚎𝚗𝚞 𝙱𝚘𝚝 𝙽𝚎𝚐𝚞𝚒𝚗 2.0*\n\n*📎Comandos:*\n→ /${Menu.join("\n→ /")}`}, {quoted: selo});
                    break;
                case 'sorteio':
                	await reply("*Ruge-se os tambores🥁🥁*\n\n```Sorteando número...```");
					rand = await random(0, groupMembers.length);
					await sleep(5000);
					await mention(`*Resultado do Sorteio🎉:*\n${LerMais}\n@${groupMembers[rand].id.split("@")[0]} Ganhou o sorteio🎊🎉!!`, true)
                	break;
                case 'base64':
                	if (!IsDono) return reply('Comando apenas para o dono!');
                	const stream = await downloadContentFromMessage(info.imageMessage, 'image')
					let buffer = Buffer.from([])
					for await(const chunk of stream) {
						buffer = Buffer.concat([buffer, chunk])
					}
					reply(Buffer.from(buffer).toString("base64"))
                break
                case 'jdv':
                	if(!isGroup) return reply ("*Só pode ser usado em grupo!*");
                	if(text === "i" || text === "iniciar" || text === "start"){
                		if(PartidaTtt.chat !== '' && PartidaTtt.chat !== jid) return reply ("*Jogo da velha já esta sendo jogado em outro grupo!*");
                		if(PartidaTtt.p1 === '' || PartidaTtt.p2 === ''){
                			if(PartidaTtt.p1 === '') {
								PartidaTtt.p1 = id;
								PartidaTtt.vez = 1;
							} else if(PartidaTtt.p2 === '') {
								PartidaTtt.p2 = id;
								PartidaTtt.vez = 2;
							}
							PartidaTtt.chat = jid;
                			let sections = [{title:"Ttt",rows: []}];
		            		Ttt.tabuleiro.match(/[0-9]/g).map(function(i){
								sections[0].rows.push({title:`${tab[parseInt(i)-1]}`, rowId:`${i}`});
							})
							let listMessage = {
							  title: "Escolha uma opção:",
							  text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
							  footer: `# Vez de: ${PartidaTtt.vez === 1 ? '❌' : PartidaTtt.vez === 2 ? '⭕' : ''}`,
							  buttonText: "Jogar 🎮",
							  sections,
							  contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]},
							}
							return await client.sendMessage(jid, listMessage, { quoted: dados });
						} else reply("Alguém ja está jogando!");
                	} else if(text === "f" || text === "fim" || text === "fin" || text === "finalizar" || text === "finish"){
                		if(IsDono){
                			Ttt = {p1:'', p2:'', tabuleiro:'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9'};
							PartidaTtt = {p1:'', p2:'', vez:1, chat: ''};
							return reply("*Partida Finalizadas!*");
                		} else if(PartidaTtt.p1 === id || PartidaTtt.p2 === id){
                			Ttt = {p1:'', p2:'', tabuleiro:'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9'};
							PartidaTtt = {p1:'', p2:'', vez:1, chat: ''};
							return reply("*Partida Finalizadas!*");
                		}
                	} else if(text === "t" || text === "tab" || text === "tabuleiro"){
                		let sections = [{title:"Ttt",rows: []}];
		            		Ttt.tabuleiro.match(/[0-9]/g).map(function(i){
								sections[0].rows.push({title:`${tab[parseInt(i)-1]}`, rowId:`${i}`});
							})
						let listMessage = {
						  title: "Escolha uma opção:",
						  text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
						  footer: `# Vez de: ${PartidaTtt.vez === 1 ? '❌' : PartidaTtt.vez === 2 ? '⭕' : ''}`,
						  buttonText: "Jogar 🎮",
						  sections,
						  contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]},
						}
						return await client.sendMessage(jid, listMessage, { quoted: dados });
                	} else {
                		reply("Uso: /jdv [iniciar(i), finalizar(f), tabuleiro(t)]");
                	}
                break
                case 'apagar':
                case 'apaga':
                case 'delete':
                case 'deletar':
                    if (!(isGroupAdmins || IsDono)) return reply('Não');
                    if (mentioned !== jidBot) return reply('Você precisa marcar a msg do bot!');
                    await client.sendMessage(jid, {
                        delete: {
                            remoteJid: info.extendedTextMessage.contextInfo.participant,
                            fromMe: true,
                            id: info.extendedTextMessage.contextInfo.stanzaId
                        }
                    });
                    break;
                case 'fakemsg':
                    if (!mentioned) return reply('Você precisa marcar uma mensagem!');
                    if (!text.includes('|')) return reply('Use: /fakemsg [MSG MARCADA] | [MSG DO BOT]');
                    var sep = text.split('|');
                    if (sep[0].length < 1 || sep[1].length < 1)
                        return reply('Use: /fakemsg [MSG MARCADA] | [MSG DO BOT]');
                    var obj = {
                        key: {
                            remoteJid: mentioned,
                            id: dados.key.id
                        },
                        message: {
                            conversation: sep[0]
                        }
                    };
                    client.sendMessage(jid, {
                        text: sep[1]
                    }, {
                        quoted: obj
                    });
                    break;
                    /*case 'sticker':
                      case 's':
                      case 'fig':
                      case 'figurinha':
                        if(type === "imageMessage"){
                          const buffer = await downloadContentFromMessage(info.imageMessage, 'image');
                          await client.sendMessage(jid, { sticker: await convert(buffer) }, {quoted: dados});
                        } else if(type === "extendedTextMessage" && info.extendedTextMessage.quotedMessage && info.extendedTextMessage.quotedMessage.imageMessage){
                          const buffer = await downloadContentFromMessage(info.extendedTextMessage.quotedMessage.imageMessage, 'image');
                          await client.sendMessage(jid, { sticker: await convert(buffer) }, {quoted: dados});
                        } else {
                          reply("*Apenas imagens fofo!*");
                        }
                      break*/
                case 'ban':
                case 'banir':
                case 'kick':
                    if (!(isGroupAdmins || IsDono))
                        return reply('Porra muleke, tu acha q vai sair banindo assim? só ADM fdp!');
                    if (!isBotGroupAdmins) return reply('*To sem ademir😔*');
                    if (mentions.length < 1 && mentioned === '' && text.length < 1) return reply ("*Você precisa marcar alguem!*");
                    if (mentions.length >= 1) {
                        mentions.map(async function(i) {
                            await client.groupParticipantsUpdate(jid, [i], 'remove');
                        });
                        reply('*Otário KKKKKKKKKKK. Foi banido kkkkkkk*');
                    } else if (mentioned) {
                        await client.groupParticipantsUpdate(jid, [mentioned], 'remove');
                        reply('Otário KKKKKKKKKKK. Foi banido kkkkkkk!');
                    } else {
                        var query = text
                            .split('+')
                            .join('')
                            .split('-')
                            .join('')
                            .split(' ')
                            .join('')
                            .split('(')
                            .join('')
                            .split(')')
                            .join('');
                        if (query.length < 5){
							console.log(dados)
							return reply('Número Invalido!');
						}
                        if (isNaN(query)) return reply('*ERROR*\nApenas números!');
                        try {
                            await client.groupParticipantsUpdate(jid, [query + '@s.whatsapp.net'], 'remove');
                            reply('Otário KKKKKKKKKKK. Foi banido kkkkkkk!!');
                        } catch (e) {
                            console.log(vermelho,"ERROR:", e);
                            reply("Error!");
                        }
                    }
                    break;
                case 'add':
                case 'adicionar':
                    if (!(isGroupAdmins || IsDono))
                        return reply('Porra muleke, tu acha q vai sair banindo assim? só ADM fdp!');
                    if (!isBotGroupAdmins) return reply('To sem ademir😔');
                    if (mentions.length < 1 && mentioned === '' && text.length < 1) return reply ("*Você precisa marcar alguem!*");
                    if (mentions.length >= 1) {
                        mentions.map(async function(i) {
                            await client.groupParticipantsUpdate(jid, [i], 'add');
                        });
                        reply('*Número adicionado com sucesso😁*');
                    } else if (mentioned) {
                        await client.groupParticipantsUpdate(jid, [mentioned], 'add').catch(function (e){ console.log("N add:",e);});
                        reply('*Número adicionado com sucesso😁*');
                    } else {
                        var query = text
                            .split('+')
                            .join('')
                            .split('-')
                            .join('')
                            .split(' ')
                            .join('')
                            .split('(')
                            .join('')
                            .split(')')
                            .join('');
                        if (query.length < 5) return reply('Número Invalido!');
                        if (isNaN(query)) return reply('*ERROR*\nApenas números!');
                        try {
                            await client.groupParticipantsUpdate(jid, [query + '@s.whatsapp.net'], 'add');
                            reply('*Número adicionado com sucesso😁*');
                        } catch (e) {
                            console.log(vermelho,"ERROR:", e);
                            reply("Error!");
                        }
                    }
                    break;
                case 'daradm':
                case 'daradmin':
                case 'promover':
                case 'promoveradm':
                case 'promoveradmin':
                case 'addadm':
                case 'addadmin':
                    if (!(isGroupAdmins || IsDono))
                        return reply('Porra muleke, tu acha q vai sair banindo assim? só ADM fdp!');
                    if (!isBotGroupAdmins) return reply('To sem ademir😔');
                    if (mentions.length < 1 && mentioned === '' && text.length < 1) return reply ("*Você precisa marcar alguem!*");
                    if (mentions.length >= 1) {
                        mentions.map(async function(i) {
                            await client.groupParticipantsUpdate(jid, [i], 'promote');
                        });
                        reply('*Número promovido à admin com sucesso😁*');
                    } else if (mentioned) {
                        await client.groupParticipantsUpdate(jid, [mentioned], 'promote');
                        reply('*Número promovido à admin com sucesso😁*');
                    } else {
                        var query = text
                            .split('+')
                            .join('')
                            .split('-')
                            .join('')
                            .split(' ')
                            .join('')
                            .split('(')
                            .join('')
                            .split(')')
                            .join('');
                        if (query.length < 5) return reply('Número Invalido!');
                        if (isNaN(query)) return reply('*ERROR*\nApenas números!');
                        try {
                            await client.groupParticipantsUpdate(jid, [query + '@s.whatsapp.net'], 'promote');
                            reply('*Número promovido à admin com sucesso😁*');
                        } catch (e) {
                            console.log(vermelho,"ERROR:", e);
                            reply("Error!");
                        }
                    }
                    break;
                case 'tiraradm':
                case 'removeradm':
                case 'promover-a-membro':
                case 'promovermembro':
                    if (!(isGroupAdmins || IsDono))
                        return reply('Porra muleke, tu acha q vai sair banindo assim? só ADM fdp!');
                    if (!isBotGroupAdmins) return reply('To sem ademir😔');
                    if (mentions.length < 1 && mentioned === '' && text.length < 1) return reply ("*Você precisa marcar alguem!*");
                    if (mentions.length >= 1) {
                        mentions.map(async function(i) {
                            await client.groupParticipantsUpdate(jid, [i], 'demote');
                        });
                        reply('*Número promovido à membro com sucesso😁*');
                    } else if (mentioned) {
                        await client.groupParticipantsUpdate(jid, [mentioned], 'demote');
                        reply('*Número promovido à membro com sucesso😁*');
                    } else {
                        var query = text
                            .split('+')
                            .join('')
                            .split('-')
                            .join('')
                            .split(' ')
                            .join('')
                            .split('(')
                            .join('')
                            .split(')')
                            .join('');
                        if (query.length < 5) return reply('Número Invalido!');
                        if (isNaN(query)) return reply('*ERROR*\nApenas números!');
                        try {
                            await client.groupParticipantsUpdate(jid, [query + '@s.whatsapp.net'], 'demote');
                            reply('*Número promovido à membro com sucesso😁*');
                        } catch (e) {
                            console.log(vermelho,"ERROR:", e);
                            reply("Error!");
                        }
                    }
                    break;
                 case 'all':
                    if (!Puxada) return reply('Puxadas foram desativadas pelo meu dono');
                    var query = text
                        .split('.')
                        .join('')
                        .split('-')
                        .join('');
                    if (query.length < 11 || query.length > 11)
                        return reply('*ERROR*\nUso: /all 00000000868');
                    if (isNaN(query)) return reply('*ERROR*\nUso: /all 00000000868');
                    reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
                    res = await axios(`${LinkAPI}/all/${query}`);
                    if(res && res.data && res.data.base64 && res.data.image){
                    	return await client.sendMessage(jid, { image: Buffer.from(res.data.base64, 'base64'), caption: "" });
                    }
                    if(res && res.data && res.data.base64 && res.data.file){
                    	return await client.sendMessage(jid, { image: Buffer.from(res.data.base64, 'base64'), caption: "" });
                    }
                    if(res && res.data && res.data.error){
                    	return send(`*ERROR:* ${res.data.error}`);
                    }
                    break;
                 case 'test':
                    if (!IsDono) return reply('Puxadas foram desativadas pelo meu dono');
                    reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
                    res = await axios(`${LinkAPI}/test/${text}`);
                    //console.log(res.data);
                    if(res && res.data && res.data.base64 && res.data.image){
                    	await client.sendMessage(jid, { image: Buffer.from(res.data.base64, 'base64'), caption: "" });
                    }
                    if(res && res.data && res.data.base64 && res.data.file){
                    	await client.sendMessage(jid, { text: Buffer.from(res.data.base64, 'base64').toString("ascii") });
                    }
                    break;
                case 'cpf':
                    if (!Puxada) return reply('Puxadas foram desativadas pelo meu dono');
                    var query = text
                        .split('.')
                        .join('')
                        .split('-')
                        .join('');
                    if (query.length < 11 || query.length > 11)
                        return reply('*ERROR*\nUso: /cpf 00000000868');
                    if (isNaN(query)) return reply('*ERROR*\nUso: /cpf 00000000868');
                    reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
                    res = await axios(`${LinkAPI}/cpf3/${query}`);
                    keys = Object.keys(res.data);
                    a = '*Consulta CPF*\n\n';
                    keys.map(function(i) {
                        a += `*${i}:* ${res.data[i]}\n`;
                    });
                    reply(a);
                    break;
                case 'telefone':
                    if (!Puxada) return reply('Puxadas foram desativadas pelo meu dono');
                    var query = text
                        .split('+')
                        .join('')
                        .split('-')
                        .join('')
                        .split(' ')
                        .join('')
                        .split('(')
                        .join('')
                        .split(')')
                        .join('');
                    if (query.length < 11 || query.length > 11)
                        return reply('*ERROR*\nO número deve conter 11 dígitos!\nUso: /telefone 16996273400');
                    if (isNaN(query)) return reply('*ERROR*\nUso: /telefone 16996273400');
                    reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
                    res = await axios(`${LinkAPI}/telefone/${query}`);
                    keys = Object.keys(res.data);
                    a = '*Consulta Telefônica*\n\n';
                    keys.map(function(i) {
                        a += `*${i}:* ${res.data[i]}\n`;
                    });
                    reply(a);
                    break;
                case 'nome':
                    if (!Puxada) return reply('Puxadas foram desativadas pelo meu dono');
                    if (text.length < 1) return reply('*ERROR*\nUso: /nome Jair Messias Bolsonaro');
                    reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
                    res = await axios(`${LinkAPI}/nome/${text}`);
                    if(res && res.data && res.data.base64 && res.data.file){
                    	return await client.sendMessage(jid, { text: Buffer.from(res.data.base64, 'base64').toString("utf-8") });
                    }
                    keys = Object.keys(res.data);
                    a = '*Consulta Nome*\n\n';
                    keys.map(function(i) {
                        a += `*${i}:* ${res.data[i]}\n`;
                    });
                    reply(a);
                    break;
                case 'placa':
                    if (!Puxada) return reply('Puxadas foram desativadas pelo meu dono');
                    var query = text
                        .split('+')
                        .join('')
                        .split('-')
                        .join('')
                        .split(' ')
                        .join('')
                        .split('(')
                        .join('')
                        .split(')')
                        .join('');
                    if (query.length < 7 || query.length > 7) return reply('*ERROR*\nUso: /placa FRD4486');
                    reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
                    res = await axios(`${LinkAPI}/placa/${query}`);
                    keys = Object.keys(res.data);
                    a = '*Consulta Placa*\n\n';
                    keys.map(function(i) {
                        a += `*${i}:* ${res.data[i]}\n`;
                    });
                    reply(a);
                    break;
                case 'puxada':
                    if (!IsDono) return reply('So o dono pode usar!');
                    if (Puxada) {
                        Puxada = false;
                        reply('Puxadas desativadas com sucesso!');
                    } else {
                        Puxada = true;
                        reply('Puxadas ativadas com sucesso!');
                    }
                    break;
                case 'exc':
                    if (!IsDono) return reply('Comando apenas para o dono!');
                    try {
                        eval(`
				      (async function (){
					      try {
						      ${text}
					      } catch (err) {
						      reply(err.toString());
					      }
				      })()
			      `);
                    } catch (err) {
                        reply(err.toString());
                    }
                    break;
                case 'mek':
                	if (!IsDono) return reply('Comando apenas para o dono!');
                    replyJson(dados);
                    break;
                default:
                	Menu.splice(Menu.indexOf(cmd), 1);
              	  fs.writeFileSync("db.json", JSON.stringify(Menu, null, '\t'));
            }
        } catch (e) {
            console.log(vermelho,"ERROR:", e);
        }
    });
};
connect();