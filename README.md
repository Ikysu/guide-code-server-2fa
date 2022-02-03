# [GUIDE] How to add simple 2fa on code-server by @coder
1. Use (gen.js) to generate secret
2. In your config.yaml add the option
```yaml
tfa: [YOUR_SERCET]
```
3. Go to "/usr/lib/code-server/out/node/"
4. Open "cli.js"
5. After 161 lines, write:
```js
tfa: {type: "string", description:"2fa secret key"}
```
6. Save and open "login.js" in "routes" folder
7. Require node-2fa (between lines 31-32)
```js
const twofactor = require("node-2fa");
```
8. Change "const password" to "var password" (85-86 line)
9. After line 95 (after "if (!password) {...}"), insert
```js
if(twofactor.verifyToken(req.args.tfa, password)){
      password=req.args.password
}
```
