const yargs = require('yargs');
const chalk = require('chalk');

// const argv = yargs(hideBin(ProcessingInstruction.argv)).argv
const argv = yargs
    // yargs is a Node.js library that simplifies building command-line interfaces
    .option('city', { // method ; parse city argument ; describe city in object; -- (option) command
        describe: 'City name to find weather info',
        demandOption: true, // is it required? YES
        type: 'String'
    })
    .help()
    .argv; // an argument; array that stores command-line arguments; makes the argument an object

function getWeatherData(city) {

    const weatherData = {
        'new york': {
            temperature: 72,
            condition: 'Partly Cloudy',
            humidity: 65,
            windSpeed: 8
        },
        'london': {
            temperature: 60,
            conditions: "Rainy",
            humidity: 80,
            windSpeed: 12
        },
        'tokyo': {
            temperature: 80,
            conditions: "Sunny",
            humidity: 40,
            windSpeed: 5
        }
    };
    return weatherData[city] || "Data is not available"; // OR ; one has to be true
}

// console.log(getWeatherData("new york"));
// console.log(getWeatherData("texas"));

function styleWeatherData(city, weatherData) {
    console.log(`Todays weather in ${city}!`);
    if (weatherData.temperature < 60) {
        console.log(chalk.blue(`It's ${weatherData.temperature} degrees out. It's Cold!`));
    } else if (weatherData.temperature >= 85) {
        console.log(chalk.red(`It's ${weatherData.temperature} degrees out. It's very hot out there!`));
    } else {
        console.log(chalk.green(`It's ${weatherData.temperature} degrees out. It's a nice day.`));
    }
    console.log(chalk.italic.magenta(`The conditions in ${city} will be ${weatherData.condition}.`));
    console.log(chalk.white(`The humidity in ${city} is ${weatherData.humidity}.`)); // humidity
    console.log(chalk.bgCyan(`The wind speed is currently ${weatherData.windSpeed} mph in ${city}.`)); // wind speed
}

function main() {
    const city = argv.city;
    console.log(chalk.dim(`Fetching weather data for ${city}... `));
    const weatherData = getWeatherData(city);

    styleWeatherData(city, weatherData);
}

main();

// node app.js --city="new york"

