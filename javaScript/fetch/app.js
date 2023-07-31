// ==========================================
// AN OLDER WAY OF ADDING DEFAULT PARAM VALUE
// ==========================================

// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

// ============
// THE NEW WAY!
// ============
//function rollDie(numSides = 6) {
   // return Math.floor(Math.random() * numSides) + 1
////}

//function greet(person, msg = "Hey there", punc = '!') {
 //   console.log(`${msg}, ${person}${punc}`)
//}

// test using fetch JS by me

fetch("https://swapi.dev/api/people/1/")
.then((res)=> {
    console.log("resolved",res);
     return res.json();
})
.then((data) => {
    console.log("Now here the object data:",data);
})
.catch((e) => {
    console.log("error",e);
})