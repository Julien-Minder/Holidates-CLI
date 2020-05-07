const axios = require('axios');

const {
    getCode
} = require('country-list');


let currentTime = new Date()
let year = currentTime.getFullYear()
let countryCode = getCode(process.argv[2])
while (countryCode === undefined) {
    console.log("Veuillez entrer un nom de pays valide (en anglais)"


    )
};


/*console.log(year)
console.log(countryCode);
console.log('https://date.nager.at/api/v2/publicholidays/' + year + '/' + countryCode)*/

axios.get('https://date.nager.at/api/v2/publicholidays/' + year + '/' + countryCode)
    .then((response) => {
        response.data.forEach(el => {
            console.log(el.date)
            console.log(el.localName)
        });

    });