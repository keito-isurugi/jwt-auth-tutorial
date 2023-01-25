const router = require("express").Router()
const { body, validationResult } = require('express-validator');

router.get("/", (req, res) => {
	res.send("Hello Authjs")
})

// ユーザー新規登録用のAPI
router.post(
	"/register", 
	body("email").isEmail(), 
	body("password").isLength({min: 6}),
	(req, res) => {
	const email = req.body.email
	const password = req.body.password

	const errors = validationResult(req)
	if(!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	// console.log(email, password)
})

module.exports = router