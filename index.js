const axios = require('axios');

const {
    getCode
} = require('country-list');

/*if (process.argv[2] = undefined) {                     
    console.log("Veuillez entrer un nom de pays valide (en anglais)")
} else {
    console.log(getCode(process.argv[2]))
};*/
let currentTime = new Date()
let year = currentTime.getFullYear()
let countryCode = getCode(process.argv[2])

console.log(year)
console.log(countryCode);
console.log('https://date.nager.at/api/v2/publicholidays/' + year + '/' + countryCode)

axios.get('https://date.nager.at/api/v2/publicholidays/' + year + '/' + countryCode)
    .then((response) => {
        console.log(response.date)
        console.log(response.name)
    });