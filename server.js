const express = require("express")
const app = express()
const PORT = 5111;

app.get("/", (req, res) => {
	res.send("Hello Express")
})

app.listen(PORT, () => {
	console.log("サーバーを起動中・・・");
});
