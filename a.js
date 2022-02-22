const {
    default: WASocket,
    DisconnectReason,
    useSingleFileAuthState,
    downloadContentFromMessage
} = require('@adiwajshing/baileys');
const Pino = require('pino');
const axios = require('axios').default;
const fs = require('fs');
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
var Menu=[];
var Dono = ['556199955345@s.whatsapp.net'];
const LinkAPI = 'http://localhost:3000';
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
    // creds.update
    client.ev.on('creds.update', saveState);
    // connection.update
    client.ev.on('connection.update', async (up) => {
    	try{
        // console.log(up);
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
    // group-participants.update
    client.ev.on('group-participants.update', json => {});
    // messages.upsert
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

❌: @${PartidaTtt.p1.split("@")[0]}
⭕: @${PartidaTtt.p2.split("@")[0]}`,
					  footer: "⭕# Jogo da Velha: "+PartidaTtt.p2.split("@")[0],
					  buttonText: "🎮 Jogar",
					  sections
					}
					await client.sendMessage(jid, listMessage, {contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]} });
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

❌: @${PartidaTtt.p1.split("@")[0]}
⭕: @${PartidaTtt.p2.split("@")[0]}`,
					  footer: "❌# Jogo da Velha: "+PartidaTtt.p1.split("@")[0],
					  buttonText: "🎮 Jogar",
					  sections
					}
					await client.sendMessage(jid, listMessage, {contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]} });
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

❌: @${PartidaTtt.p1.split("@")[0]}
⭕: @${PartidaTtt.p2.split("@")[0]}`,
					  footer: "⭕# Jogo da Velha: "+PartidaTtt.p2.split("@")[0],
					  buttonText: "🎮 Jogar",
					  sections
					}
					await client.sendMessage(jid, listMessage, {contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]} });
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

❌: @${PartidaTtt.p1.split("@")[0]}
⭕: @${PartidaTtt.p2.split("@")[0]}`,
					  footer: "❌# Jogo da Velha: "+PartidaTtt.p1.split("@")[0],
					  buttonText: "🎮 Jogar",
					  sections
					}
					await client.sendMessage(jid, listMessage, {contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]} });
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
            //if(!msg.startsWith('/')) return;
        	client.sendReadReceipt(jid, id, [dados.key.id]);
            switch (cmd) {
                case 'menu':
                    reply('Meu dono e preguiçoso e não fez menu, c vira ai!!!');
                    break;
                case 'jdv':
                	if(!isGroup) return reply ("*Só pode ser usado em grupo!*");
                	if(text === "iniciar" || text === "start"){
                		if(PartidaTtt.chat !== '' && PartidaTtt.chat !== jid) return reply ("*Jogo da velha já esta sendo jogado em outro grupo!*");
                		if(PartidaTtt.p1 !== '' || PartidaTtt.p2 !== ''){
                			PartidaTtt.p1 = id;
							PartidaTtt.vez = 1;
							PartidaTtt.chat = jid;
                			let sections = [{title:"Ttt",rows: []}];
		            		Ttt.tabuleiro.match(/[0-9]/g).map(function(i){
								sections[0].rows.push({title:`${tab[parseInt(i)-1]}`, rowId:`${i}`});
							})
							let listMessage = {
							  title: "Escolha uma opção:",
							  text: `${TabuleiroTtt()}

❌: @${PartidaTtt.p1.split("@")[0]}
⭕: @${PartidaTtt.p2.split("@")[0]}`,
							  footer: "# Jogo da Velha",
							  buttonText: "🎮 Jogar",
							  sections
							}
							reply("*Alguém já está jogando!*");
							return await client.sendMessage(jid, listMessage, {contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]} });
						}
                		let sections = [{title:"Ttt",rows: []}];
		            		Ttt.tabuleiro.match(/[0-9]/g).map(function(i){
								sections[0].rows.push({title:`${tab[parseInt(i)-1]}`, rowId:`${i}`});
							})
						let listMessage = {
						  title: "Escolha uma opção:",
						  text: `${TabuleiroTtt()}

❌: @${PartidaTtt.p1.split("@")[0]}
⭕: @${PartidaTtt.p2.split("@")[0]}`,
						  footer: "❌ # Jogo da Velha",
						  buttonText: "🎮 Jogar",
						  sections
						}
						return await client.sendMessage(jid, listMessage, {contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]} });
                	} else if(text === "fim" || text === "fin" || text === "finalizar" || text === "finish"){
                		if(IsDono){
                			Ttt = {p1:'', p2:'', tabuleiro:'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9'};
							PartidaTtt = {p1:'', p2:'', vez:1, chat: ''};
							return reply("*Partida Finalizadas!*");
                		} else if(PartidaTtt.p1 === id || PartidaTtt.p2 === id){
                			Ttt = {p1:'', p2:'', tabuleiro:'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9'};
							PartidaTtt = {p1:'', p2:'', vez:1, chat: ''};
							return reply("*Partida Finalizadas!*");
                		}
                	} else if(text === "tab" || text === "tabuleiro"){
                		let sections = [{title:"Ttt",rows: []}];
		            		Ttt.tabuleiro.match(/[0-9]/g).map(function(i){
								sections[0].rows.push({title:`${tab[parseInt(i)-1]}`, rowId:`${i}`});
							})
						let listMessage = {
						  title: "Escolha uma opção:",
						  text: `${TabuleiroTtt()}

❌: @${PartidaTtt.p1.split("@")[0]}
⭕: @${PartidaTtt.p2.split("@")[0]}`,
						  footer: "# Jogo da Velha",
						  buttonText: "🎮 Jogar",
						  sections
						}
						return await client.sendMessage(jid, listMessage, {contextInfo: {mentionedJid: [PartidaTtt.p1, PartidaTtt.p2]} });
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
                    if (!isBotGroupAdmins) return reply('To sem ademir😔');
                    if (mentions.length >= 1) {
                        mentions.map(async function(i) {
                            await client.groupParticipantsUpdate(jid, [i], 'remove');
                        });
                        reply('Otário KKKKKKKKKKK. Foi banido kkkkkkk');
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
                    if (args.length < 1) return reply('*ERROR*\nUso: /nome Jair Messias Bolsonaro');
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
                    replyJson(dados);
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    });
};
connect();