/** 
    check if a number is Even or Odd
*/

function checkEvenOdd(num) {
    let result = Math.floor(num%2);
    if(result === 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}

checkEvenOdd(2);
checkEvenOdd(3);
checkEvenOdd(234455432);