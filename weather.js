var request = require("request");

module.exports = function(location, callback) {


    var encodedLocation = encodeURIComponent(location)

    var url = "http://api.weatherapi.com/v1/current.json?key=1b282254f22842dfa9b210949202909&q=" + encodedLocation;

    if (!location) {
        return callback("Location is empty")
    }

    request({
        url: url,
        json: true,
    }, function(error, response, body) {
        if (error) {
            callback(" API error! ");
        } else {
            callback(body.location.name + " is weather : " + body.current.temp_c + " C");
        }
    });
}