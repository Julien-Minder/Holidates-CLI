const axios = require('axios');

const {
    getCode
} = require('country-list');

/*if (process.argv[2] = undefined) {                     
    console.log("Veuillez entrer un nom de pays valide (en anglais)")
} else {
    console.log(getCode(process.argv[2]))
};*/

console.log(getCode(process.argv[2]));