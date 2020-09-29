var request = require("request");
const { callbackify } = require("util");
var url = "http://ipinfo.io";

module.exports = function(callback) {
    request({
        url: url,
        json: true,
    }, function(err, response, body) {

        if (err) {
            callback();
        } else {
            callback(body);
        }
    });
}