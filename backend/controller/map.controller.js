const mapService = require("../service/map.service")

module.exports.getCoordinaties = async(req, res, next) => {
    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        next(error);
    }
}

module.exports.getDistanceTime = async (req, res, next) => {
    try {

        const { origin, destination } = req.query;

        const distanceTime = await mapService.getDistanceTime(origin, destination);

        res.status(200).json(distanceTime);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports.getAutoCompleteSuggestions = async (req, res, next) => {

    try {
        const { input } = req.query;

        const suggestions = await mapService.getAutoCompleteSuggestions(input);

        res.status(200).json(suggestions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}