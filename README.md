# [GUIDE] How to add simple 2fa on code-server by coder
1. Use gen.js to generate secret
2. In your config.yaml add the option
```yaml
tfa: [YOUR_SERCET]
```
3. Go to "/usr/lib/code-server/out/node/"
4. Open "cli.js"
5. Add to const "options":
```js
tfa: {
      type: "string", 
      description: "2fa secret key"
}
```
6. Save and open "login.js" in "routes" folder
7. Require node-2fa (between lines 36-44)
```js
const twofactor = require("node-2fa");
```
8. Change "const password" to "var password" (89-91 line)
9. After "if (!password) {throw new Error("Missing password");}" (97-99 line), insert
```js
if(req.args.tfa&&req.args.password&&twofactor.verifyToken(req.args.tfa, password)){
      password=req.args.password
}
```

# [Auther]
1. Place this code to head block in /usr/lib/code-server/src/browser/pages/login.html 
```html
<!-- QR Auth Libs -->
<script>var auther="auther_id/app-name",
i=document.createElement("div");i.innerText="Loading";i.style.marginTop="3em";i.style.backgroundColor="white";
i.style.borderRadius="1em";i.style.border="white solid";i.style.padding="0.5em";i.style.textAlign="center";i.
style.fontSize="1em";window.onload=()=>{var $=new WebSocket("wss://auther.iky.su/"+auther);$.onmessage=(d)=>{
d=d.data.split(":");if(d[0]=="t"){i.innerText="Auther: "+d[1]}else{document.getElementsByClassName("password"
)[0].value=d[1];document.getElementsByClassName("submit")[0].click()}};$.onclose=(e)=>i.innerText="Auther: "+
e.reason;document.getElementsByClassName("center-container")[0].appendChild(i)}</script>
<!-- QR Auth Libs -->
```
2. Go to Telegram bot: [@iki_auther_bot](https://t.me/iki_auther_bot)
