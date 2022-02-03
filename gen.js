const twofactor = require("node-2fa");
const QRCode = require('qrcode')
const secret = twofactor.generateSecret({ name: "code-server" });
QRCode.toString(secret.uri, {type:'terminal'}, function (err, url) {
    if(err) return console.log("error occured")
    console.log(url)
    console.log("YOUR SERCET:",secret.secret)
})