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
        	console.log("ERROR:", e);
        }
    })
    client.ev.on('group-participants.update', json => {});
    client.ev.on('messages.upsert', async m => {
        try {
            if (!m.messages[0]) return;
            if (m.type !== 'notify') return;
            const dados = m.messages[0];
            if (dados.key.remoteJid === 'status@broadcast') return;
            console.log(JSON.stringify(dados, null, '  '));
            const jid = dados.key.remoteJid;
            const id = dados.key.participant || dados.key.remoteJid;
            const jidBot = client.user.id.replace(/:.+@/, '@');
            const nick = dados.pushName;
            const info = dados.message;
            const type = Object.keys(info)[0];
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
            //console.log(`${nick} CMD: ${cmd} | TEXT: ${text}`);
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
						"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEDAP0DASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAECAwYHBAUI/8QAPhAAAgEDAgQCBggFAwQDAAAAAAECAwQRBSEGMUFREmETFCJxgaEHIzJCUpGxwSQzQ2Lh0fDxFURTgmNz0v/EABoBAQACAwEAAAAAAAAAAAAAAAAEBQIDBgH/xAApEQACAgICAgICAQQDAAAAAAAAAQIDBBESMQUhQVEyYSITFEKBcZGx/9oADAMBAAIRAxEAPwDv4AAAAAAAAAAAAAAABDYBIIyN30AJBG/f5Dfq8gEgjDG6AJBGX2GQCQQmSAAAAAAAAAAAAAAAAAAAAAAAAAACG8AEkZXvIw2T8ABv3GAMgE4BXxLug5pc2l8Q3oFgeWpqNpT2nc0U108aPO9d01PDvKX5mPOP2Y84r5PpA+dHXNNk8K8pfmeinfWtX7FxSl7poc4/Z4pxfyekYKqSfJkpmRmGuxG6JbXcbMAJ9ySMIjeIBYEJ5JAAAAAAAAAAAAAAAAABRy3wuYBZyw8LdkKPVhLBIAySVb22aPg6txNbae3RpYrV191PZe8xlOMVuRrssjWtyZ9ypONOLlKcYxW7cnhHwr/iyytfFGjm4mtvY+z+Zp1/q11qM3KvVfg6U4tqKPFt5ZINmY36giqu8m+q1/s+9dcWajX9mn4KEX+Dd/mz5Na9urh5q3FSfvkYMruMruRJWzl2yvnfZP8AKROW+Yzj/BGV3GV3MNmvZOfeE8cm17iMruMruNjZ6aN/d27zRuasPdL9T7FpxffUZYrwhWiuuMM17K7jK7myNs49M2wyLIfizoNjxPp961TlU9DUf3ajxn3M+1GSlyax0wckz2Z9HTtdvNNmvR1HOl1pzeV8CXXmfEywp8n8WI6Ymu5J8fStftdUSjF+Cr1pyeH8O59bO+CbGSktotYWRmtxYaxugpZ6bk5KuPZ7mRmWTySVjJN4ez/UsAAAAAAAAAAACspKKy+QAlLDwuYUUkRGOd3zLADkY6tSNKDnOSjGKy2+hNScacHKUlGKWW30Rz/iDiCeo1ZULebjbRfR7zNVtqrjsj5GRGiO32erXOKKlz47axbp0+TqcnL3Gst53y3nuVz/ALYyVNlkpvbOeuvndLlJkggGBqJBAAJBAAJBAAJBAAJBAALwm6clKMnGS5NPDNv0LilT8NtfPwy2Uaj5P3mmjpzNlVsq3tG6jInS9xZ2CMk1lPK7kmk8N8ROm4WV5NeF7U6j6eTN0jJPqnsW1disW0dFRfG6HKIlHqufctGWUPIpKLg/FHpzXkbDcZARF5WVyJAAAAAAAIMa+snn7qJqy8MNub2RaEfDFL8wCVyKyeOXMufD4l1aOmaf7DXrFXMaaz17+4xlLitmFk1CLkz4XFWuurOWn2tTEV/Mkn17GqZ2wVcpSeZNt9W+bCZTWWOyW2czfdK2fJlsjJGT26XptbVbtUaSwlvKX4UYxi5PSNcYOcuMTx5yM4Ol2PD2nWlJQ9WhUl1lOOW2eipounVIuMrKjh9o4Jf9lLXZYx8ZPW2/ZyzIyfQ1zTXpWpToRTdJ+1Tk+bX+Nz5qZElFxbTK6yDhJxZbIyRkZPDAnIyRkZAJyMkZGQCcjJGSGwe7LZGSqYbB4Wb2N44V153NNWFxP66C9iT++jRcmShXnbVoV6TaqQeU1+htptdctkjGyHTPa6OwIk+fo+ow1PT6dxFrxPaS7M+gi3i01tHTRkpJSXyUXsSxnZ8jIjHVTccr7S5FoPxR8S6mRkWAAADBWT8Kz2AKfbrPqo/qZTFQ/l+J85vxfmZQClSSim2+W5y/X9Sep6rUqqX1UPYpryXX4m8cUX/qGjVZKWJ1Pq4457nMM7+fUgZljX8UU/lLn6rX+y2RkrkZIBTsvH25xgk3KTwkl/vc6joelR0qwhTUU60vaqS7s0Phi1jd6/bxksxp5qP4cvm0dPiifh1+ubLnxdK07H2WQZIJ5bmr8Y6f6xpiuor26Dzt1j1Of52TR2K4oxr0Z0prMZppo5Jf2srC+rW0/wCnJpea6FdmV6amik8nTqSsRgyMlcjJCKotknJTIyAXyRkrkZALZJyUyMgF84GclMjIBcZ3KZGQDZeEdTdpqPqs5P0VfZZ6SOhxeVk4zTqypVI1IPE4PxRfmdb0m8jf6ZQuIvPjis+/qWOHZtcX8F54y7cHW/g9jMcMxqSj0e6Mpiq+w4z7Pf3E0tDKgQtiQAYrh/VeHrJ+H8zKYavtVqMfNy/L/kAyx2WA8DuQwDQuOr1zvaFrF7U4eKS82an/AMH1OI7j1jXrqWU/DLwr4bHyslLfPlY2ctlzc7pMkEZGTURzZuB8f9dqZ5+gl+sToqOW8K3Xq3ENu5PEKmabfm+XzR1FY6FrhvdZ0HjJbp19MsQyQyUWJU0Pjmzp0ru3u4tKVROMl38/mbxXrQoUZVaklGnFZk28bHLtf1Z6tqLqQbVGCxTT5ef7EXLlFQ0+yu8jZFVcX2z5YK5fUnJVHPkgjIyASCMjIBIIyMgEgjIyASCMjIBOcbm+cDXrnZVrVtfVSyvczQsmycFXPotalRztVpv5f8kjGlxsRMwJ8L1+zo/kVqR8dOUX1RKJZbnSlaUvHTjLukXMNvtTcfwyaMwAMD3uo/2wfzf+DOYP+7f/ANa/VgGbqyk3iDfZF3zMVy8W1V9oP9Dxnjfo45d1HUva828uU5PPxMWROWZyfeT/AFIyUUuzkZPcmycjJGRk8MS9Oc6dSNSnLwzi04vs+afyOvaZfU9R06hd0+VSKbXZ9jjrbxj/AGja+DdZ9VuJWFWTVKq802/uy/yS8S3jLT+Sw8dfws4y6Z0RBshYy8BlodCaHxvqlyrmOnQzC3cFOTX38t/JY+Zp/n3OmcU6L/1TT3OjH+JorxU9t5f2nMZLwTcHFxlF4afNeRVZUZKe5dfBzvkYTjdyl0y2RkqmTkikAnIyVbCYBbIyRkZAJyMkZGQCcjJGRkAnIyRkgAtk+rw1VdPiKzf4p+F/FHyD6OhSa12yx/5UZ1vU0baHq2P/ACddjyJI5Fi8OsMNLadRf3ZMyMNP+dU+BmQAMH/ef+n7sznnn7N3B/ii0AZzHXXiozj3i18jJ1Ky5PJ4zxnFKyxXqRXSTXzKI9WrUfVtXu6K5Rqy/U8eSjktNo5Caak0yzCK5GTExL5ClKMlKMnFp5TT5MpkZATa6Oo8L64tVsFGpJesUklNZ3a6M2FM4xpuo19LvYXVB7xe8ekl2OtaZqFDUrKndUJJwkuWd0+zLXGuVi0+zosHLV0eMu0exrKND4v4ccZS1Gzh7L/mwS5eZvpWcVODUllNcmbrK1OOmSb6I3Q4s4innL5+fcG4cScJVKM53unwcoPLnRXNea/0NN2zjqVFlcq3pnNX0TplqSLIkpnAyazT0WYztko5Y37dc8jadM4KudQsVc1Lj0DnvGm4NvHnuZwhKb1FG2qmdr1BGs5XcnK7n09S4b1PSoylVoOdFf1KW6+KxsfJTz1zjseShKL1IwnCVb1JaLkMrkZMTEsiSmRkAufS4fXi4gsV/wDJ+zPlZPu8H0vTcS27/ApT/wB/mbKluaRux1u2K/Z1REshMnoXZ1hhp/z63wM6MFDeVWXeRnQAMFx7M6M+08fmZzFcxc6EkufNfAAyIh+4inNTpxmuqyWYBy7jW1dvxBOol7NaKmv0Zrh0Hj+wdaxo3cF7VKfhk/J/5OeJ7de5T5EeNjOYzq3C9r79lgRkZNBDJBGRkAlPf9z62ga7V0O88azK3ntUpr9UfIyE8PPbsZRk4tNGcLJVy5RfR220uqF5bwuKFRTpzSaaPQcj0DiGvolwo7ztJPM6f7o6hp+oW2o2sa9tVU4Pz3XkW1NysX7OkxcuN8f2etrJrOu8IWupeKtb4t7lrdr7M/ejZ8ruDbOEZrUiRZVCyPGS2ca1HRr/AEueLqhKMek0vZfuZ4G+mTuFajTrwcKlOM4vmpLJr9zwVpFxW9KqU4b7whLEX8CBPCe/4MqLfFPe6mavwnw7LUbiN9cw/hacsqDX25L9jpUF4Y4Swl2Rjt7eFtRjRpRUYQWIpdEZkTKalXHSLLGx40Q4oiUVJYaNd1ThDTtSUpwp+r1n96msJ+9GyBmcoRl6aN06oWLUls5LqnC+p6W5TdL01Bf1KeXt59T4je78tjuVRKUcNZOPcQwp0uIL2FJeGKqY8K5J4RW5NCrXKJRZ2HGlco/J84EZGSIVhJun0f2rlcXV245UUoRfn1NJcmlyz1Or8H2PqWgUXJYnV+sl8eRKxIbs39Fh42vndv6PvoiTws/EsYbqTVF45v2V8S1OjFosW6f4m2ZisIqMVFclsWABDJAB57f2fHTf3X8j0HlrJ0riFb7svYkj0oA8mo2cL+wrWtRezVg457dmcXuaNS2uatCssVaUnCS80dylvt3OeceaP6KvDVKMPYniFfHR9H80iHl1coqS+Cr8nRzr/qL4/wDDTBkqnz3367DJWFAWyMlcjIBbIyVyMgFss9+l6xd6RcKrbTwvvQf2ZLsz52Q2exk4vaMoycHyi/Z1rQ+JrLV4Rh41SuetKXP4d0feTycHjKUZJxypLdSTw18TZ9I431CwcaV3/F0VtmW018epYVZifqRc4/lIv+Nv/Z1LKB8HTuK9K1PCp3CpTf8ATrey/wDQ+5GUZpOLTXkTIyjLplpCyM1uL2WABkbAgwUqTjCLbeMdQCK04U6cpykkorOWzid9deuahcXO/wBbUlNe5vY23i3iyncUp6fp0/FBvw1asXs1+GL/AHNJzlvcrMu1SfFHP+SyY2NQj0i2RkjJGebxnYhlX8H0tE096pq1C2S9lyUpvtFczstKEadNQisRisJGo8DaM7TT3f14/XXCzDK5Q6fmbfF88lti18IbZ0njqHXVt9slmCp9ZdQh0h7T/YzykorL5I89qnKMqz5zeV7iSWB6UAAAAADHWgqlJwfXl7yttNyp+Gf24bMyvbmUprecsc2AXZ5b62o3dnVoV4qVKcWpJ9j1HyOJ7z1Dh+8rJ4n6Nwi/OWy/Uxm0ots12NKDcujj1bwxrTjB+KCk1GXdZ5lMlU105E5KJ9nHt7eycjJGRkHhORkjIyATkZIyMgE5BGRkAnbk+R9Kx1/U9Owra8qKK5Qn7Ufny+B8zIyeqUo9MyjZOHuL0bpZ/SHdwSV3aU6mOcoPHyPrQ+kPTmsyt7iL7JJnNcjJvjlWL5JkPI5EVrezolx9ItsoP1e0rSn08bSRq2rcU6lq2YVKno6Df8unt+b6nxMjJjPIsl2zC3Ovs9Nk8+nQEZHiNJE36Jztk+9wtoUtb1FSqRfqlLerLpL+34/ofO0rTLjV76NrQjnxfbljaK7nX9K0yhpVjC1t44jFZb6yfdkrGpc3yfRZYGJ/Vlzl+KPZSiowUUsJLCWC4WxWrNU4ObfItTotGCvP0so0I7Z+17j0xSUVFLCWx57am1mrUX1k9/cj0JYB6SAAAAACs3iLYgsQSK1Hlxh3ZkAIfQ0T6SL1q1tLKMkvSTdSSz0itvzb+RvUnho5Dxte+ucT10pZhQjGit9srd/N4+BGy5ara+yv8lZwoa+z4GX8ARnsMlScySDJQtq9zJRo0KlRvl4I5PXd6HqdjRVxc2dWFL8WOR7xk/embFXNrevR4AVT65z5k5PDAnIyQMgEgjIyASCMjIBIIyMgEgjPYZ8+Z4CT36RpF3rN16C0hlffqfdh55Pq6Dwde6rKNW4U7e0/E/tS9x0zT9MtNLto29pRUIx7Lm+7JlOLKXuXRZ4nj5WPlP0jz6Jodroln6GhBeN7zqY3k+59aPIjkT+hZpJLSOghBQjxiG11Z5Yt3NbOPqocvNicpXMvRw2gn7UkemEFCKjFYR6ZEokAAAAAEMkiXIAovaqt/h2MnQx0nmHi/FuZADBcVPRUJ1PC5KMW8Ldvbkcko8Ma9qlzO4laSp+lm5uVV+HdvPvOwNZIS95ptpVutkXIxY5GuT6Oe2X0bTlid7e4fWNKP7s2Ky4K0a0xJ23pZrrUfiNiRIjRXHpCvDpr6iYKNrRt4qFGjCnFdIxwXnShUg4TipRfNSWUZAbdLokpJejS9Y4Bs7tyq2UvVaz3wt4v4Gjanw3quluTr2s5U1/UppyTXw5Ha8ZIcU0090R7cWE/0QL/AB1Vvtemfn/KfIZwdpv+GNI1Jt3FlTc39+C8L/NGvXP0bWcs+q3tek+imlOK/R/MiSw5rr2Vlni7o/i9nN8k57m51vo21BS+pvbea/ui4fpk8kvo+12L29Vku6qP/Q1PHtXwR3hZC/wNXyRk2qH0e63N+07WC7uo/wD8nso/Rpeyf12oUaa/tg5/q0Fj2v4Cwch/4mlZYj4m8RTbfRZ3OmWv0cadSadzc16/dZUF8l+5sVhoGl6av4Wzp03+LGW/izbHCm+2Sq/FWy/N6OX6Xwhq2p+CSt3b0XznVWNvdzN80XgrTtMcatVesXC+/NcvcjZVHBOCZXjQgWdGBTV77YjFRWFyROCTFWrQow8U3jslzZIJxdtLd7HllUndS9HTbjT6zRChVud5rwU/w9WeuEFBYisIAilTjSh4YrCRcAAAAAAAAGOq34GlzeyMjMb3nFdOYBdJJJLZLkSRnHMwzuqMHhyTfZbsAzA8zuasv5dCTXd7D0dzP7VRRXZIA9DkorMml7zDK7op7Sz5LciNnDOZylP3maNOEPsxS9yAPP6xWn/LoNLvNhXTg/DXpuH93RnqwRKEZLDSfvAIhOMo5jJNeTLHllZ+F+KlNwl8iPSXdJ+3BVF3QB6weaN9SbxNSg/NGaFenPlUj+YBfAwTldwARgYJIckuqAGAY5XFKH2qkfzMMr2DeKcXP3IA9WV3KTqQprM5JfE8+bqryxSiWhZwT8U5OcvMAq7mrW9mhBr+9rYvStYxl46jc59Wz0KKSwlhE4AIRIAAAAAAAAAABDPPUp1pVX4JqKeN2j0gA8vqUXvUlKb82ZoUKdP7MEjIACCUAAAAAAAAMEYJABSVOMvtJP4GKVlQl9zD8j0AA8nqMOk6i/8AYhWKX9ap+Z7AAeT1FPnWqfmSrGl96U372eoAHnjZ0IvPgy/MzKEYrCiiwAIwTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=",
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
                case 'menu':
                    client.sendMessage(jid, {text: `*🖥️ 𝙼𝚎𝚗𝚞 𝙱𝚘𝚝 𝙽𝚎𝚐𝚞𝚒𝚗 2.0*\n\n*📎Comandos:*\n→ /${Menu.join("\n→ /")}`}, {quoted: selo});
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
                    if (!mentioned) return reply('Você precisa marcar alguem!');
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
                    if (mentions.length < 1 || !mentioned || text.length < 1) return reply ("*Você precisa marcar alguem!*");
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
                        if (query.length < 5) return reply('Número Invalido!');
                        if (isNaN(query)) return reply('*ERROR*\nApenas números!');
                        try {
                            await client.groupParticipantsUpdate(jid, [query + '@s.whatsapp.net'], 'remove');
                            reply('Otário KKKKKKKKKKK. Foi banido kkkkkkk!!');
                        } catch (err) {
                            reply('Error!');
                            console.log(err);
                        }
                    }
                    break;
                case 'add':
                case 'adicionar':
                    if (!(isGroupAdmins || IsDono))
                        return reply('Porra muleke, tu acha q vai sair banindo assim? só ADM fdp!');
                    if (!isBotGroupAdmins) return reply('To sem ademir😔');
                    if (mentions.length < 1 || !mentioned || text.length < 1) return reply ("*Você precisa marcar alguem!*");
                    if (mentions.length >= 1) {
                        mentions.map(async function(i) {
                            await client.groupParticipantsUpdate(jid, [i], 'add');
                        });
                        reply('*Número adicionado com sucesso😁*');
                    } else if (mentioned) {
                        await client.groupParticipantsUpdate(jid, [mentioned], 'add');
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
                        } catch (err) {
                            reply('Error!');
                            console.log(err);
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
                    if (mentions.length < 1 || !mentioned || text.length < 1) return reply ("*Você precisa marcar alguem!*");
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
                        } catch (err) {
                            reply('Error!');
                            console.log(err);
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
                    if (mentions.length < 1 || !mentioned || text.length < 1) return reply ("*Você precisa marcar alguem!*");
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
                        } catch (err) {
                            reply('Error!');
                            console.log(err);
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
        } catch (err) {
            console.log(err);
        }
    });
};
connect();