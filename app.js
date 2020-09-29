var args = require("yargs")
    .option('location', {
        alias: 'l',
        demand: false,
        describe: 'location info for weather',
        type: 'string'
    })
    .help()
    .argv;
var weather = require("./weather");
var location = require("./location");
const { argv } = require("yargs");

if (typeof argv.l === 'string' && argv.l.length > 0) {

    console.log("Location ...")

    weather(argv.l, function(currentWeather) {
        console.log(currentWeather);
    });

} else {

    console.log("Searching...")

    location(function(location) {
        if (!location) {

            console.log("Location Error");
            return;

        } else {

            weather(location.city, function(currentWeather) {
                console.log(currentWeather);
            });

        }
    })

}