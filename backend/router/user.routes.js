const express = require("express");
const { register, login, getUserProfile, logout } = require("../controller/user.controller");
const { authUser } = require("../middleware/auth.middleware");

const router = express.Router();


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile').get(authUser, getUserProfile);
router.route('/logout').post(authUser, logout);


module.exports = router;