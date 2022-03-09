const {
	default: WASocket,
	DisconnectReason,
	useSingleFileAuthState,
	downloadContentFromMessage,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	generateMessageID,
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
const checkVersion = async () => {
	let BASE_URL = 'https://web.whatsapp.com/check-update?version=1&platform=web';
	const {
		data: JSONData
	} = await axios.get(BASE_URL);
	let version = JSONData.currentVersion.split('.').map(v => parseInt(v));
	return version;
};
const ffmpeg = require("fluent-ffmpeg");
var criandoFig = false;
var vermelho = '\u001b[31m';
var azul = '\u001b[34m';
var reset = '\u001b[0m';
var verde = '\u001B[32m';
var amarelo = '\u001B[33m';
var { Menu, Block } = JSON.parse(fs.readFileSync("db.json"))
var Dono = ['556199955345@s.whatsapp.net'];
const LinkAPI = 'https://software-buscas.herokuapp.com';
var Puxada = false;
var LerMais = '‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎';
var Ttt = { p1: '', p2: '', tabuleiro: 'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9' };
var PartidaTtt = { p1: '', p2: '', vez: 1, chat: '' };
var tab = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
function TabuleiroTtt() {
	return Ttt.tabuleiro.replace(/[1-9]/g, '⬜');
}
function JogarTtt(p, pos) {
	if (Ttt.p1.includes(pos) || Ttt.p2.includes(pos)) return { err: true, ganho: -1 };
	Ttt[p] += pos;
	let p1 = Ttt.p1.split('').sort().join('');
	let p2 = Ttt.p2.split('').sort().join('');

	if (p === 'p1') Ttt.tabuleiro = Ttt.tabuleiro.replace(pos, '❌');
	if (p === 'p2') Ttt.tabuleiro = Ttt.tabuleiro.replace(pos, '⭕');

	let re = /1.*?2.*?3|4.*?5.*?6|7.*?8.*?9|1.*?4.*?7|2.*?5.*?8|3.*?6.*?9|1.*?5.*?9|3.*?5.*?7/;
	if (p1.search(re) !== -1) {
		Ttt = { p1: '', p2: '', tabuleiro: 'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9' };
		return { ganho: 1, err: false };
	} else if (p2.search(re) !== -1) {
		Ttt = { p1: '', p2: '', tabuleiro: 'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9' };
		return { ganho: 2, err: false };
	} else if ((Ttt.p1 + Ttt.p2).length >= 9) {
		Ttt = { p1: '', p2: '', tabuleiro: 'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9' };
		return { ganho: 0, err: false };
	} else {
		return { err: false, ganho: -1 };
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
const Json = (json) => JSON.stringify(json, null, '\t');
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

const connect = async () => {
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
		try {
			const { lastDisconnect, connection } = up;
			if (connection) { console.log('Connection Status: ', connection); }
			let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

			if (connection === 'close') {
				if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); process.exit(); }
				else if (reason === DisconnectReason.connectionClosed) { console.log('Connection closed, reconnecting....'); connect(); }
				else if (reason === DisconnectReason.connectionLost) { console.log('Connection Lost from Server, reconnecting...'); connect(); }
				else if (reason === DisconnectReason.connectionReplaced) { console.log('Connection Replaced, Another New Session Opened, Please Close Current Session First'); process.exit(); }
				else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete ${session} and Scan Again.`); process.exit(); }
				else if (reason === DisconnectReason.restartRequired) { console.log('Restart Required, Restarting...'); connect(); }
				else if (reason === DisconnectReason.timedOut) { console.log('Connection TimedOut, Reconnecting...'); connect(); }
				else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }
			}
		} catch (e) {
			console.log(vermelho, "ERROR:", e);
		}
	})
	client.ev.on('group-participants.update', json => { });
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
			const type = info && Object.keys(info).length > 0 ? Object.keys(info)[0] : '';
			const msg =
				info && info.extendedTextMessage ?
					info.extendedTextMessage.text :
					info && info.conversation ?
						info.conversation :
						info && info.imageMessage && info.imageMessage.caption ?
							info.imageMessage.caption :
							info && info.videoMessage && info.videoMessage.caption ?
								info.videoMessage.caption : '';
			const MsgMarked =
				type == 'extendedTextMessage' &&
					info &&
					info.extendedTextMessage &&
					info.extendedTextMessage.contextInfo &&
					info.extendedTextMessage.contextInfo.quotedMessage &&
					info.extendedTextMessage.contextInfo.quotedMessage.conversation ?
					info.extendedTextMessage.contextInfo.quotedMessage.conversation : '';
			const mentioned =
				type == 'extendedTextMessage' &&
					info &&
					info.extendedTextMessage &&
					info.extendedTextMessage.contextInfo &&
					info.extendedTextMessage.contextInfo.participant ?
					info.extendedTextMessage.contextInfo.participant : '';
			const mentions =
				type == 'extendedTextMessage' &&
					info &&
					info.extendedTextMessage &&
					info.extendedTextMessage.contextInfo &&
					info.extendedTextMessage.contextInfo.mentionedJid ?
					info.extendedTextMessage.contextInfo.mentionedJid : '';
			const cmd = msg.toLowerCase().startsWith('/') ? msg.split(' ')[0].slice(1) : null;
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
			const mention = (texto, mark) => client.sendMessage(jid, { text: texto, contextInfo: { mentionedJid: [addMentionsInArray(texto)] } }, (mark ? { quoted: dados } : {}));
			const mentionArray = (texto, ment, mark) => client.sendMessage(jid, { text: texto, contextInfo: { mentionedJid: ment } }, (mark ? { quoted: dados } : {}));
			const addMentionsInArray = (texto) => {
				const re = /@[0-9]+/g
				if (!re.test(texto)) return [];
				var mentioneds = [];
				for (let i of texto.match(re))
					mentioneds.push(i.replace(/@/g, '') + "@s.whatsapp.net");
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
						"jpegThumbnail": ""
					}
				}
			}
			const relayMsg = (content) => client.relayMessage(jid, content, { messageId: generateMessageID(), additionalAttributes: {} });
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
			if (cmd && !isGroup) console.log(`${verde}[CMD] ${reset}${msg} ${amarelo}de ${azul}${nick}${reset}`);
			if (cmd && isGroup) console.log(`${verde}[CMD] ${reset}${msg} ${amarelo}de ${azul}${nick} ${amarelo}em ${azul}${groupName}${reset}`);
			//================ [GATILHO] ==================
			client.sendReadReceipt(jid, id, [dados.key.id]);
			if (Block.includes(id) && cmd) return reply("*🚫 Você foi ~BLOQUEADO~ pelo meu Dono!*");
			if (Botao == 'alo') {
				reply('funcionando');
			}
			if (ListTitle === 'Ttt') {
				if (PartidaTtt.chat !== '' && PartidaTtt.chat !== jid) return reply("*Jogo da velha já esta sendo jogado em outro grupo!*");
				if (PartidaTtt.p1 === id && PartidaTtt.vez === 1) {
					let pos = parseInt(ListRow)
					let game = JogarTtt('p1', pos);
					let sections = [{ title: "Ttt", rows: [] }];
					Ttt.tabuleiro.match(/[0-9]/g).map(function (i) {
						sections[0].rows.push({ title: `${tab[parseInt(i) - 1]}`, rowId: `${i}` });
					})
					let listMessage = {
						title: "Escolha uma opção:",
						text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
						footer: "# Vez de: ⭕",
						buttonText: "Jogar 🎮",
						sections,
						contextInfo: { mentionedJid: [PartidaTtt.p1, PartidaTtt.p2] },
					}
					await client.sendMessage(jid, listMessage, { quoted: dados });
					if (game.err) return reply("*Posição já jogada!*");
					PartidaTtt.vez = 2;
					if (game.ganho === 1) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*❌: Player 1 ganhou🎉🎊*");
					} else if (game.ganho === 2) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*⭕: Player 2 ganhou🎉🎊*");
					} else if (game.ganho === 0) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*❌⬜⭕: Empate👵*");
					}
				} else if (PartidaTtt.p2 === id && PartidaTtt.vez === 2) {
					let pos = parseInt(ListRow)
					let game = JogarTtt('p2', pos);
					let sections = [{ title: "Ttt", rows: [] }];
					Ttt.tabuleiro.match(/[0-9]/g).map(function (i) {
						sections[0].rows.push({ title: `${tab[parseInt(i) - 1]}`, rowId: `${i}` });
					})
					let listMessage = {
						title: "Escolha uma opção:",
						text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
						footer: "# Vez de: ❌",
						buttonText: "Jogar 🎮",
						sections,
						contextInfo: { mentionedJid: [PartidaTtt.p1, PartidaTtt.p2] },
					}
					await client.sendMessage(jid, listMessage, { quoted: dados });
					if (game.err) return reply("*Posição já jogada!*");
					PartidaTtt.vez = 1;
					if (game.ganho === 1) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*❌: Player 1 ganhou🎉🎊*");
					} else if (game.ganho === 2) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*⭕: Player 2 ganhou🎉🎊*");
					} else if (game.ganho === 0) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*❌⬜⭕: Empate👵*");
					}
				} else if (PartidaTtt.p1 === '' && PartidaTtt.vez === 1 && PartidaTtt.p2 !== id) {
					PartidaTtt.p1 = id;
					let pos = parseInt(ListRow)
					let game = JogarTtt('p1', pos);
					let sections = [{ title: "Ttt", rows: [] }];
					Ttt.tabuleiro.match(/[0-9]/g).map(function (i) {
						sections[0].rows.push({ title: `${tab[parseInt(i) - 1]}`, rowId: `${i}` });
					})
					let listMessage = {
						title: "Escolha uma opção:",
						text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
						footer: "# Vez de: ⭕",
						buttonText: "Jogar 🎮",
						sections,
						contextInfo: { mentionedJid: [PartidaTtt.p1, PartidaTtt.p2] },
					}
					await client.sendMessage(jid, listMessage, { quoted: dados });
					if (game.err) return reply("*Posição já jogada!*");
					PartidaTtt.vez = 2;
					if (game.ganho === 1) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*❌: Player 1 ganhou🎉🎊*");
					} else if (game.ganho === 2) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*⭕: Player 2 ganhou🎉🎊*");
					} else if (game.ganho === 0) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*❌⬜⭕: Empate👵*");
					}
				} else if (PartidaTtt.p2 === '' && PartidaTtt.vez === 2 && PartidaTtt.p1 !== id) {
					PartidaTtt.p2 = id;
					let pos = parseInt(ListRow)
					let game = JogarTtt('p2', pos);
					let sections = [{ title: "Ttt", rows: [] }];
					Ttt.tabuleiro.match(/[0-9]/g).map(function (i) {
						sections[0].rows.push({ title: `${tab[parseInt(i) - 1]}`, rowId: `${i}` });
					})
					let listMessage = {
						title: "Escolha uma opção:",
						text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
						footer: "# Vez de: ❌",
						buttonText: "Jogar 🎮",
						sections,
						contextInfo: { mentionedJid: [PartidaTtt.p1, PartidaTtt.p2] },
					}
					await client.sendMessage(jid, listMessage, { quoted: dados });
					if (game.err) return reply("*Posição já jogada!*");
					PartidaTtt.vez = 1;
					if (game.ganho === 1) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*❌: Player 1 ganhou🎉🎊*");
					} else if (game.ganho === 2) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*⭕: Player 2 ganhou🎉🎊*");
					} else if (game.ganho === 0) {
						PartidaTtt.p1 = '';
						PartidaTtt.p2 = '';
						PartidaTtt.vez = 1;
						return reply("*❌⬜⭕: Empate👵*");
					}
				}
			}
			//============= [COMANDOS] ================
			if (!Menu.includes(cmd)) {
				Menu.push(cmd);
				fs.writeFileSync("db.json", JSON.stringify({ Menu, Block }, null, '\t'));
			}
			switch (cmd) {
				case 'savefig':
					if (!IsDono) return reply('Comando apenas para o dono!');
					if (text.legth < 1) return reply("Insira o nome da figurinha!");
					stream = await downloadContentFromMessage(info.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'image')
					buffer = Buffer.from([])
					for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk])
					fs.writeFileSync(`midia/${text}.webp`, Buffer.from(buffer))
					reply(`Figurinha *${text}* salva com sucesso!`);
					break
				case 'envfig':
					if (!IsDono) return reply('Comando apenas para o dono!');
					if (text.legth < 1) return reply("Insira o nome da figurinha!");
					await client.sendMessage(jid, { sticker: { url: `midia/${text}.webp` }, mimetype: 'image/webp' }, { quoted: dados })
					break
				case 's':
				case 'f':
				case 'figurinha':
				case 'sticker':
					if (criandoFig) return reply("Alguém já está criando figurinha, aguarde e tente novamente mais tarde!");
					let media = null, typeMedia = undefined, inp = undefined;
					if (info && info.imageMessage) media = info.imageMessage, [typeMedia, inp] = info.imageMessage.mimetype.split("/");
					if (info && info.videoMessage) media = info.videoMessage, [typeMedia, inp] = info.videoMessage.mimetype.split("/");
					if (info && info.extendedTextMessage && info.extendedTextMessage.contextInfo && info.extendedTextMessage.contextInfo.quotedMessage && info.extendedTextMessage.contextInfo.quotedMessage.imageMessage)
						media = info.extendedTextMessage.contextInfo.quotedMessage.imageMessage, [typeMedia, inp] = info.extendedTextMessage.contextInfo.quotedMessage.imageMessage.mimetype.split("/");
					if (info && info.extendedTextMessage && info.extendedTextMessage.contextInfo && info.extendedTextMessage.contextInfo.quotedMessage && info.extendedTextMessage.contextInfo.quotedMessage.videoMessage)
						media = info.extendedTextMessage.contextInfo.quotedMessage.videoMessage, [typeMedia, inp] = info.extendedTextMessage.contextInfo.quotedMessage.videoMessage.mimetype.split("/");
					if (!media) return await reply("*Marque uma mensagem com foto ou mande como legenda o comando!*");
					if (typeMedia === "video" && type === 'extendedTextMessage' && info.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds > 10) return reply("*Máximo 10 segundos!*");
					if (typeMedia === "video" && type === 'videoMessage' && info.videoMessage.seconds > 10) return reply("*Máximo 10 segundos!*");
					await reply("*Gerando figurinha...*");
					try {
						criandoFig = true;
						stream = await downloadContentFromMessage(media, typeMedia)
						buffer = Buffer.from([])
						for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk])
						rand = random(999, 99999);
						file = `midia/old-fig${rand}.${inp}`;
						file2 = `midia/fig${rand}.webp`;
						await fs.writeFileSync(file, Buffer.from(buffer))
						await ffmpeg(file)
							.toFormat('webp')
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.output(file2)
							.on('end', async () => {
								try {
									await client.sendMessage(jid, { sticker: { url: file2 }, mimetype: 'image/webp' }, { quoted: dados })
									await fs.unlinkSync(file);
									await fs.unlinkSync(file2);
									criandoFig = false;
								} catch (a) {
									console.log(a);
									criandoFig = false;
									reply('*Ouve um plobema ao mandar a figurinha, tente novamente!*');
								}
							})
							.run()
					} catch (a) {
						console.log(a);
						criandoFig = false;
						reply('*Error ao gerar a figurinha.*');
					}
					break
				case 'gostosos':
				case 'gostosas':
				case 'gostosa':
				case 'gostoso':
					let rands = [], t = "", c = 0, ids = [], vezes = 5;
					if (text.length > 0) vezes = parseInt(text);
					if (parseInt(text) > 100) vezes = 5;
					for (let i = 0; i < vezes; i++) rands.push(await random(0, groupMembers.length));
					for (let i of rands) {
						c++;
						ids.push(groupMembers[i].id);
						t += `#${c} @${groupMembers[i].id.split("@")[0]} \n`;
					}
					await mentionArray(`*Rank Gostosos😏*\n\n${t}`, ids, true);
					break;
				case 'menu':
					client.sendMessage(jid, { text: `*🖥️ 𝙼𝚎𝚗𝚞 𝙱𝚘𝚝 𝙽𝚎𝚐𝚞𝚒𝚗 2.0*\n\n*📎Comandos:*\n→ /${Menu.join("\n→ /")}` }, { quoted: selo });
					break;
				case 'sorteio':
					await reply("*Ruge-se os tambores🥁🥁*\n\n```Sorteando número...```");
					rand = await random(0, groupMembers.length);
					await sleep(5000);
					await mention(`*Resultado do Sorteio🎉:*\n${LerMais}\n@${groupMembers[rand].id.split("@")[0]} Ganhou o sorteio??🎉!!`, true)
					break;
				case 'base64':
					if (!IsDono) return reply('Comando apenas para o dono!');
					stream = await downloadContentFromMessage(info.imageMessage, 'image')
					buffer = Buffer.from([])
					for await (const chunk of stream) {
						buffer = Buffer.concat([buffer, chunk])
					}
					reply(Buffer.from(buffer).toString("base64"))
					break
				case 'jdv':
					if (!isGroup) return reply("*Só pode ser usado em grupo!*");
					if (text === "i" || text === "iniciar" || text === "start") {
						if (PartidaTtt.chat !== '' && PartidaTtt.chat !== jid) return reply("*Jogo da velha já esta sendo jogado em outro grupo!*");
						if (PartidaTtt.p1 === '' || PartidaTtt.p2 === '') {
							if (PartidaTtt.p1 === '') {
								PartidaTtt.p1 = id;
								PartidaTtt.vez = 1;
							} else if (PartidaTtt.p2 === '') {
								PartidaTtt.p2 = id;
								PartidaTtt.vez = 2;
							}
							PartidaTtt.chat = jid;
							let sections = [{ title: "Ttt", rows: [] }];
							Ttt.tabuleiro.match(/[0-9]/g).map(function (i) {
								sections[0].rows.push({ title: `${tab[parseInt(i) - 1]}`, rowId: `${i}` });
							})
							let listMessage = {
								title: "Escolha uma opção:",
								text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
								footer: `# Vez de: ${PartidaTtt.vez === 1 ? '❌' : PartidaTtt.vez === 2 ? '⭕' : ''}`,
								buttonText: "Jogar 🎮",
								sections,
								contextInfo: { mentionedJid: [PartidaTtt.p1, PartidaTtt.p2] },
							}
							return await client.sendMessage(jid, listMessage, { quoted: dados });
						} else reply("Alguém ja está jogando!");
					} else if (text === "f" || text === "fim" || text === "fin" || text === "finalizar" || text === "finish") {
						if (IsDono) {
							Ttt = { p1: '', p2: '', tabuleiro: 'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9' };
							PartidaTtt = { p1: '', p2: '', vez: 1, chat: '' };
							return reply("*Partida Finalizadas!*");
						} else if (PartidaTtt.p1 === id || PartidaTtt.p2 === id) {
							Ttt = { p1: '', p2: '', tabuleiro: 'ⓧ⠀①⠀②⠀③\nⓐ  1 2 3\nⓑ  4 5 6\nⓒ  7 8 9' };
							PartidaTtt = { p1: '', p2: '', vez: 1, chat: '' };
							return reply("*Partida Finalizadas!*");
						}
					} else if (text === "t" || text === "tab" || text === "tabuleiro") {
						let sections = [{ title: "Ttt", rows: [] }];
						Ttt.tabuleiro.match(/[0-9]/g).map(function (i) {
							sections[0].rows.push({ title: `${tab[parseInt(i) - 1]}`, rowId: `${i}` });
						})
						let listMessage = {
							title: "Escolha uma opção:",
							text: `${TabuleiroTtt()}

❌ = @${PartidaTtt.p1.split("@")[0]}
⭕ = @${PartidaTtt.p2.split("@")[0]}`,
							footer: `# Vez de: ${PartidaTtt.vez === 1 ? '❌' : PartidaTtt.vez === 2 ? '⭕' : ''}`,
							buttonText: "Jogar 🎮",
							sections,
							contextInfo: { mentionedJid: [PartidaTtt.p1, PartidaTtt.p2] },
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
						return reply('Porra muleke, tu acha q vai sair fazendo merda assim? só ADM rapa!');
					if (!isBotGroupAdmins) return reply('*To sem ademir😔*');
					if (mentions.length < 1 && mentioned === '' && text.length < 1) return reply("*Você precisa marcar alguem!*");
					if (mentions.length >= 1) {
						mentions.map(async function (i) {
							await client.groupParticipantsUpdate(jid, [i], 'remove');
						});
						reply('*Otário KKKKKKKKKKK. Foi banido kkkkkkk*');
					} else if (mentioned) {
						await client.groupParticipantsUpdate(jid, [mentioned], 'remove');
						reply('Otário KKKKKKKKKKK. Foi banido kkkkkkk!');
					} else {
						var query = text
							.split('+').join('')
							.split('-').join('')
							.split(' ').join('')
							.split('(').join('')
							.split(')').join('');
						if (query.length < 5) {
							console.log(dados)
							return reply('Número Invalido!');
						}
						if (isNaN(query)) return reply('*ERROR*\nApenas números!');
						try {
							await client.groupParticipantsUpdate(jid, [query + '@s.whatsapp.net'], 'remove');
							reply('Otário KKKKKKKKKKK. Foi banido kkkkkkk!!');
						} catch (e) {
							console.log(vermelho, "ERROR:", e);
							reply("Error!");
						}
					}
					break;
				case 'add':
				case 'adicionar':
					if (!(isGroupAdmins || IsDono))
						return reply('Porra muleke, tu acha q vai sair fazendo merda assim? só ADM rapa!');
					if (!isBotGroupAdmins) return reply('To sem ademir😔');
					if (mentions.length < 1 && mentioned === '' && text.length < 1) return reply("*Você precisa marcar alguem!*");
					if (mentions.length >= 1) {
						mentions.map(async function (i) {
							await client.groupParticipantsUpdate(jid, [i], 'add');
						});
						reply('*Número adicionado com sucesso😁*');
					} else if (mentioned) {
						await client.groupParticipantsUpdate(jid, [mentioned], 'add').catch(function (e) { console.log("N add:", e); });
						reply('*Número adicionado com sucesso😁*');
					} else {
						var query = text
							.split('+').join('')
							.split('-').join('')
							.split(' ').join('')
							.split('(').join('')
							.split(')').join('');
						if (query.length < 5) return reply('Número Invalido!');
						if (isNaN(query)) return reply('*ERROR*\nApenas números!');
						try {
							await client.groupParticipantsUpdate(jid, [query + '@s.whatsapp.net'], 'add');
							reply('*Número adicionado com sucesso😁*');
						} catch (e) {
							console.log(vermelho, "ERROR:", e);
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
						return reply('Porra muleke, tu acha q vai sair fazendo merda assim? só ADM rapa!');
					if (!isBotGroupAdmins) return reply('To sem ademir😔');
					if (mentions.length < 1 && mentioned === '' && text.length < 1) return reply("*Você precisa marcar alguem!*");
					if (mentions.length >= 1) {
						mentions.map(async function (i) {
							await client.groupParticipantsUpdate(jid, [i], 'promote');
						});
						reply('*Número promovido à admin com sucesso😁*');
					} else if (mentioned) {
						await client.groupParticipantsUpdate(jid, [mentioned], 'promote');
						reply('*Número promovido à admin com sucesso😁*');
					} else {
						var query = text
							.split('+').join('')
							.split('-').join('')
							.split(' ').join('')
							.split('(').join('')
							.split(')').join('');
						if (query.length < 5) return reply('Número Invalido!');
						if (isNaN(query)) return reply('*ERROR*\nApenas números!');
						try {
							await client.groupParticipantsUpdate(jid, [query + '@s.whatsapp.net'], 'promote');
							reply('*Número promovido à admin com sucesso😁*');
						} catch (e) {
							console.log(vermelho, "ERROR:", e);
							reply("Error!");
						}
					}
					break;
				case 'tiraradm':
				case 'removeradm':
				case 'promover-a-membro':
				case 'promovermembro':
					if (!(isGroupAdmins || IsDono))
						return reply('Porra muleke, tu acha q vai sair fazendo merda assim? só ADM rapa!');
					if (!isBotGroupAdmins) return reply('To sem ademir😔');
					if (mentions.length < 1 && mentioned === '' && text.length < 1) return reply("*Você precisa marcar alguem!*");
					if (mentions.length >= 1) {
						mentions.map(async function (i) {
							await client.groupParticipantsUpdate(jid, [i], 'demote');
						});
						reply('*Número promovido à membro com sucesso😁*');
					} else if (mentioned) {
						await client.groupParticipantsUpdate(jid, [mentioned], 'demote');
						reply('*Número promovido à membro com sucesso😁*');
					} else {
						var query = text
							.split('+').join('')
							.split('-').join('')
							.split(' ').join('')
							.split('(').join('')
							.split(')').join('');
						if (query.length < 5) return reply('Número Invalido!');
						if (isNaN(query)) return reply('*ERROR*\nApenas números!');
						try {
							await client.groupParticipantsUpdate(jid, [query + '@s.whatsapp.net'], 'demote');
							reply('*Número promovido à membro com sucesso😁*');
						} catch (e) {
							console.log(vermelho, "ERROR:", e);
							reply("Error!");
						}
					}
					break;
				case 'block':
					if (!IsDono)
						return reply('Porra muleke, tu acha q vai sair fazendo merda assim? só ADM rapa!');
					if (mentions.length < 1 && mentioned === '' && text.length < 1) return reply("*Você precisa marcar alguem!*");
					if (mentions.length >= 1) {
						mentions.map(async function (i) {
							Block.push(i);
						});
						fs.writeFileSync("db.json", JSON.stringify({ Menu, Block }, null, '\t'));
						reply('*Número bloqueado com sucesso😁*');
					} else if (mentioned) {
						Block.push(mentioned);
						fs.writeFileSync("db.json", JSON.stringify({ Menu, Block }, null, '\t'));
						reply('*Número bloqueado com sucesso😁*');
					} else {
						var query = text
							.split('+').join('')
							.split('-').join('')
							.split(' ').join('')
							.split('(').join('')
							.split(')').join('');
						if (query.length < 5) return reply('Número Invalido!');
						if (isNaN(query)) return reply('*ERROR*\nApenas números!');
						try {
							Block.push(query + '@s.whatsapp.net');
							fs.writeFileSync("db.json", JSON.stringify({ Menu, Block }, null, '\t'));
							reply('*Número bloqueado com sucesso😁*');
						} catch (e) {
							console.log(vermelho, "ERROR:", e);
							reply("Error!");
						}
					}
					break;
				case 'desblock':
					if (!IsDono)
						return reply('Porra muleke, tu acha q vai sair fazendo merda assim? só ADM rapa!');
					if (mentions.length < 1 && mentioned === '' && text.length < 1) return reply("*Você precisa marcar alguem!*");
					if (mentions.length >= 1) {
						mentions.map(async function (i) {
							Block.splice(Block.indexOf(i), 1);
						});
						fs.writeFileSync("db.json", JSON.stringify({ Menu, Block }, null, '\t'));
						reply('*Número desbloqueado com sucesso😁*');
					} else if (mentioned) {
						Block.splice(Block.indexOf(mentioned), 1);
						fs.writeFileSync("db.json", JSON.stringify({ Menu, Block }, null, '\t'));
						reply('*Número desbloqueado com sucesso😁*');
					} else {
						var query = text
							.split('+').join('')
							.split('-').join('')
							.split(' ').join('')
							.split('(').join('')
							.split(')').join('');
						if (query.length < 5) return reply('Número Invalido!');
						if (isNaN(query)) return reply('*ERROR*\nApenas números!');
						try {
							Block.splice(Block.indexOf(query + '@s.whatsapp.net'), 1);
							fs.writeFileSync("db.json", JSON.stringify({ Menu, Block }, null, '\t'));
							reply('*Número desbloqueado com sucesso😁*');
						} catch (e) {
							console.log(vermelho, "ERROR:", e);
							reply("Error!");
						}
					}
					break;
				case 'bloqueados':
				case 'blocks':
					if (Block.length === 0) return reply("*Nenhum número bloqueado!*");
					await mention(`*🚫 ~Bloqueados~*\n\n→ @${Block.map(i => i.split("@")[0]).join("\n→ @")}`);
					break
				case 'all':
					if (!Puxada) return reply('Puxadas foram desativadas pelo meu dono');
					var query = text
						.split('.').join('')
						.split('-').join('');
					if (query.length < 11 || query.length > 11)
						return reply('*ERROR*\nUso: /all 00000000868');
					if (isNaN(query)) return reply('*ERROR*\nUso: /all 00000000868');
					reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
					res = await axios(`${LinkAPI}/all/${query}`);
					if (res && res.data && res.data.base64 && res.data.image) {
						return await client.sendMessage(jid, { image: Buffer.from(res.data.base64, 'base64'), caption: "" });
					}
					if (res && res.data && res.data.base64 && res.data.file) {
						return await client.sendMessage(jid, { image: Buffer.from(res.data.base64, 'base64'), caption: "" });
					}
					if (res && res.data && res.data.error) {
						return send(`*ERROR:* ${res.data.error}`);
					}
					break;
				case 'test':
					if (!IsDono) return reply('Puxadas foram desativadas pelo meu dono');
					reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
					res = await axios(`${LinkAPI}/test/${text}`);
					//console.log(res.data);
					if (res && res.data && res.data.base64 && res.data.image) {
						await client.sendMessage(jid, { image: Buffer.from(res.data.base64, 'base64'), caption: "" });
					}
					if (res && res.data && res.data.base64 && res.data.file) {
						await client.sendMessage(jid, { text: Buffer.from(res.data.base64, 'base64').toString("ascii") });
					}
					break;
				case 'cpf':
					if (!Puxada) return reply('Puxadas foram desativadas pelo meu dono');
					var query = text
						.split('.').join('')
						.split('-').join('');
					if (query.length < 11 || query.length > 11)
						return reply('*ERROR*\nUso: /cpf 00000000868');
					if (isNaN(query)) return reply('*ERROR*\nUso: /cpf 00000000868');
					reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
					res = await axios(`${LinkAPI}/cpf3/${query}`);
					keys = Object.keys(res.data);
					a = '*Consulta CPF*\n\n';
					keys.map(function (i) {
						a += `*${i}:* ${res.data[i]}\n`;
					});
					reply(a);
					break;
				case 'telefone':
					if (!Puxada) return reply('Puxadas foram desativadas pelo meu dono');
					var query = text
						.split('+').join('')
						.split('-').join('')
						.split(' ').join('')
						.split('(').join('')
						.split(')').join('');
					if (query.length < 11 || query.length > 11)
						return reply('*ERROR*\nO número deve conter 11 dígitos!\nUso: /telefone 16996273400');
					if (isNaN(query)) return reply('*ERROR*\nUso: /telefone 16996273400');
					reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
					res = await axios(`${LinkAPI}/telefone/${query}`);
					keys = Object.keys(res.data);
					a = '*Consulta Telefônica*\n\n';
					keys.map(function (i) {
						a += `*${i}:* ${res.data[i]}\n`;
					});
					reply(a);
					break;
				case 'nome':
					if (!Puxada) return reply('Puxadas foram desativadas pelo meu dono');
					if (text.length < 1) return reply('*ERROR*\nUso: /nome Jair Messias Bolsonaro');
					reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
					res = await axios(`${LinkAPI}/nome/${text}`);
					if (res && res.data && res.data.base64 && res.data.file) {
						return await client.sendMessage(jid, { text: Buffer.from(res.data.base64, 'base64').toString("utf-8") });
					}
					keys = Object.keys(res.data);
					a = '*Consulta Nome*\n\n';
					keys.map(function (i) {
						a += `*${i}:* ${res.data[i]}\n`;
					});
					reply(a);
					break;
				case 'placa':
					if (!Puxada) return reply('Puxadas foram desativadas pelo meu dono');
					var query = text
						.split('+').join('')
						.split('-').join('')
						.split(' ').join('')
						.split('(').join('')
						.split(')').join('');
					if (query.length < 7 || query.length > 7) return reply('*ERROR*\nUso: /placa FRD4486');
					reply('*Consultando...*\nCaso não retorne nada, nao foi encontrado.');
					res = await axios(`${LinkAPI}/placa/${query}`);
					keys = Object.keys(res.data);
					a = '*Consulta Placa*\n\n';
					keys.map(function (i) {
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
				case 'mesclaremoji':
				case 'juntaremoji':
				case 'joinemoji':
					if (criandoFig) return reply("Alguém já está criando figurinha, aguarde e tente novamente mais tarde!");
					if (text.length < 2) return reply(`*Uso: /${cmd} 😎+😝*`);
					[emoji1, emoji2] = text.split("+");
					if (!emoji1 || !emoji2) return reply(`*Uso: /${cmd} 😎+😝*`);
					try {
						criandoFig = true;
						res = await axios(encodeURI(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${emoji1}_${emoji2}`));
						if (!(res.data && res.data.results && res.data.results[0].url)) return reply('*Error ao gerar o Emoji.*');
						reply('*Gerando Emoji...*');
						file = `midia/emoji${random(999, 99999)}.webp`;
						ffmpeg(res.data.results[0].url)
							.size('512x512')
							.output(file)
							.on('end', async () => {
								await client.sendMessage(jid, { sticker: { url: file }, mimetype: 'image/webp' }, { quoted: dados })
								fs.unlinkSync(file);
								criandoFig = false;
							})
							.run()
					} catch (a) {
						console.log(a);
						criandoFig = false;
						reply('*Error ao gerar o Emoji.*');
					}
					break;
				case 'ttk':
				case 'tt':
				case 'tiktok':
					if (text.length < 2) reply('cade o link');
					reply("Baixando... Aguarde!");
					try {
						res = await axios(encodeURI(`https://bsbt-api-rest.herokuapp.com/api/tiktok?url=${text}`));
						client.sendMessage(jid, { video: { url: res.data.result.nowm } }, { quoted: dados });
					} catch (a) {
						console.log(a);
						reply('não foi possível baixar o video!');
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
					fs.writeFileSync("db.json", JSON.stringify({ Menu, Block }, null, '\t'));
			}
		} catch (e) {
			console.log(vermelho, "ERROR:", e);
		}
	});
};
connect();