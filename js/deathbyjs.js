//STEP 1

// let initialString = "webmaster";

// function sortletters(str) {
//     let letters = str.split("");

//     letters.sort();

//     let sortedString = letters.join("");

//     return sortedString;
// }

// let newString = sortletters(initialString);

// console.log("The original string, " + initialString + ", becomes " + newString);



//STEP 2

// let initialString = "The quick brown fox jumps over the lazy dog";

// function capletters(str) {
//     let words = str.split(" ");

//     for (i = 0; i < words.length; i++) {
//         let firstletter = words[i].charAt(0).toUpperCase();
//         let restOfTheWord = words[i].slice(1);
//         words[i] = firstletter + restOfTheWord;
//     }

//     let cappedString = words.join(" ");

//     return cappedString;
// }

// let newString = capletters(initialString);

// console.log("Before: " + initialString);
// console.log("After: " + newString);



//STEP 3

// let initialString = "The quick brown fox jumps over the lazy dog";

// function countVowel(str) {
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for (i = 0; i <str.length; i++) {
//         if (vowels.indexOf(str[i]) !== -1) {
//             count++;
//         }
//     }
//     return count;
// }

// let newString = countVowel(initialString);

// console.log("The number of vowels counted is " + newString);



//STEP 4

// function generateRandomId(length) {
//     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
//     let id = "";
//     for (i = 0; i< length; i++) {
//         let randomResult = Math.floor(Math.random() * characters.length);
//         id += characters.charAt(randomResult);
//     }
//     return id;
// }

// let randomId = generateRandomId(8);

// console.log(randomId);



//STEP 5

// let countries = ["United States", "United Kingdom", "United Arab Emirates", "The Netherlands", "Brazil", "Canada", "France", "India", "South Africa", "Tajikistan"];

// function longCountryNameFind(countryNames) {
//     let longestName = "";

//     for (i = 0; i < countryNames.length; i++) {
//         let currentName = countryNames[i];
//         if (currentName.length > longestName.length) {
//             longestName = currentName;
//         }
//     }
//     return longestName;
// }

// let longestCountryName = longCountryNameFind(countries);

// console.log(longestCountryName);