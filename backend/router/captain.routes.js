const express = require("express")
const { register, login, getCaptainProfile, logoutCaptain } = require('../controller/captain.controller');
const { authCaptain } = require("../middleware/auth.middleware");
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile').get(authCaptain, getCaptainProfile );
router.route('/logout').post(authCaptain, logoutCaptain);


module.exports = router;