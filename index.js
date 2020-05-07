#!/usr/bin/env node

const axios = require('axios');

const {
    getCode
} = require('country-list');


let currentTime = new Date()
let year = currentTime.getFullYear()
let countryCode = process.argv[2]
let tab = []
if (countryCode) {
    countryCode = getCode(countryCode)
    if (countryCode) {
        axios.get('https://date.nager.at/api/v2/publicholidays/' + year + '/' + countryCode)
            .then((response) => {
                response.data.forEach(el => {
                    /*console.log(el.date)
                    console.log(el.localName)*/
                    tab.push([el.date, el.name, el.localName]) // je pousse les valeurs de date, nom et nom locale qui sont dans un array dans un autre array nommé tab
                    if (tab.length == response.data.length) { // je console.log l'array seulement quand toute les valeurs s'y trouvent
                        console.log(tab)
                    }
                    //console.log(tab)
                });

            });
    } else {
        console.log("Erreur de saisie ! Assurez-vous d'entrer un pays en anglais correctement orthographié !!!")
    }
} else {
    console.log("Veuillez renseigner au moins un pays en anglais !!!")
}










/*console.log(year)
console.log(countryCode);
console.log('https://date.nager.at/api/v2/publicholidays/' + year + '/' + countryCode)*/

/*axios.get('https://date.nager.at/api/v2/publicholidays/' + year + '/' + countryCode)
    .then((response) => {
        response.data.forEach(el => {
            console.log(el.date)
            console.log(el.localName)
        });

    });*/