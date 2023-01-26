const router = require("express").Router()
const { publicPosts, privatePosts } = require("../db/Post")
const JWT = require("jsonwebtoken");
const { application } = require("express");
const checkJWT = require("../middleware/checkJWT")

// 誰でも見れる記事用のAPI
router.get("/public", (req, res) => {
	res.json(publicPosts)
})

// JWTを持っていないと見れない記事用のAPI
router.get("/private", checkJWT, (req, res) => {
	res.json(privatePosts)
})

module.exports = router