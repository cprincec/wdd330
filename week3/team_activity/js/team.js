
// // Get your shorts on - this is an array workout!
// // ## Array Cardio Day 1

// // Some data we can work with

// const inventors = [
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// const people = [
//     'Beck, Glenn',
//     'Becker, Carl',
//     'Beckett, Samuel',
//     'Beddoes, Mick',
//     'Beecher, Henry',
//     'Beethoven, Ludwig',
//     'Begin, Menachem',
//     'Belloc, Hilaire',
//     'Bellow, Saul',
//     'Benchley, Robert',
//     'Benenson, Peter',
//     'Ben-Gurion, David',
//     'Benjamin, Walter',
//     'Benn, Tony',
//     'Bennington, Chester',
//     'Benson, Leana',
//     'Bent, Silas',
//     'Bentsen, Lloyd',
//     'Berger, Ric',
//     'Bergman, Ingmar',
//     'Berio, Luciano',
//     'Berle, Milton',
//     'Berlin, Irving',
//     'Berne, Eric',
//     'Bernhard, Sandra',
//     'Berra, Yogi',
//     'Berry, Halle',
//     'Berry, Wendell',
//     'Bethea, Erin',
//     'Bevan, Aneurin',
//     'Bevel, Ken',
//     'Biden, Joseph',
//     'Bierce, Ambrose',
//     'Biko, Steve',
//     'Billings, Josh',
//     'Biondo, Frank',
//     'Birrell, Augustine',
//     'Black, Elk',
//     'Blair, Robert',
//     'Blair, Tony',
//     'Blake, William'
// ];

// // Array.prototype.filter()
// // 1. Filter the list of inventors for those who were born in the 1500's
// const inventors1500s = inventors.filter(inventor => {
//     let year = String(inventor.year);
//     if (year[0] === "1" && year[1] === "5") {
//         return inventor;
//     }
// });
// console.log(inventors1500s);

// // Array.prototype.map()
// // 2. Give us an array of the inventors' first and last names
// const firstAndLastNames = inventors.map((inventor) => inventor.first + " " + inventor.last);
// console.log(firstAndLastNames);

// // Array.prototype.sort()
// // 3. Sort the inventors by birthdate, oldest to youngest
// inventors.sort((a, b) => a.year - b.year);
// console.log(inventors);

// // Array.prototype.reduce()
// // 4. How many years did all the inventors live?
// const totalYears = inventors.map(inventor => inventor.passed - inventor.year)
// .reduce((pre, cur) => pre + cur);
// console.log(totalYears);

// // 5. Sort the inventors by years lived
// inventors.sort( (a, b) =>
// (a.passed - a.year) - (b.passed - b.year)
// );

// console.log(inventors);
// // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// // goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
// // const category = document.querySelector('.mw-category');
// // const links = Array.from(category.querySelectorAll('a'));
// // const de = links.filter(link => {if (link.innerHTML.includes("de")) {return link};});

// // 7. sort Exercise
// // Sort the people alphabetically by last name

// people.sort((a, b) => {
//     let namesA = a.split(" "); 
//     let namesB = b.split(" ");
//     return (namesA[1].localeCompare(namesB[1]));
// });

// console.log(people);

// // 8. Reduce Exercise
// // Sum up the instances of each of these
// const data = [
//     'car',
//     'car',
//     'truck',
//     'truck',
//     'bike',
//     'walk',
//     'car',
//     'van',
//     'bike',
//     'walk',
//     'car',
//     'van',
//     'car',
//     'truck'
// ];

// for (const item in data)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRndInteger(3, 10));
console.log(Math.random())