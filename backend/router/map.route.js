const express = require("express");
const authMiddleWare = require("../middleware/auth.middleware");
const router = express.Router();
const mapController = require("../controller/map.controller")

router.route('/get-coordinates').get(authMiddleWare.authUser, mapController.getCoordinaties);
router.get('/get-distance-time',
    authMiddleWare.authUser,
    mapController.getDistanceTime
);
router.get("/get-suggetion", authMiddleWare.authUser, mapController.getAutoCompleteSuggestions);
module.exports = router