// NURSERY RHYME LOOP
var count = 10;

while (count > 1) {
    console.log(count + " currant buns in a baker’s shop, " + count + " big and round with a cherry on the top. Along came a boy with a penny one day, bought a currant bun and took it away.");
    count = count - 1;
    if (count === 1) {
        console.log(count + " currant bun in a baker’s shop, " + count + " big and round with a cherry on the top. Along came a girl with a penny another day, bought a currant bun and took it away.");

        console.log("Now there are no more currant buns that have been baked in the sun.");
        break;
    }
}


// WHILE LOOP IN CLASS EXAMPLE

// var count = 99;

// while (count > 1) {
//     console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down, pass it around " + (count - 1) + " bottles of beer on the wall.");
//     count = count - 1;
//     if (count === 1) {
//         console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. Take one down, pass it around " + (count - 1) + " bottle of beer on the wall.");

//         console.log("No more bottles of beer on the wall.");
//         break;
//     }
// }

// else {
//     console.log("No more bottles of beer on the wall.");
//     break;
// }



// FOR LOOP TEST

// for (var count=99; count >= 0; count--) {
//     if (count === 1) {
//         console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. take one down, pass it around" + (count - 1) + " " + " bottle of beer on the wall.");
//     }
//     else if(count > 0) {
//         console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. take one down, pass it around" + (count - 1) + " " + " bottles of beer on the wall.");
//     }
//     else if(count === 0) {
//         console.log("No more bottles of beer on the wall.");
//         count -= 1;
//     }
// }


// for ( beer ==99; beer >= 1; beer--) {
//     console.log(beer + "bottles of beer on the wall," )
// }