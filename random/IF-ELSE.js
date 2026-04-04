/** 
 * create a function which accepts the age and tells 
 * whether a person is eligible to vote or not.
**/

function checkEligibility(age) {
    if(age < 0) {
        console.log("Invalid Input");
    } else if(age < 18) {
        console.log("Not Eligible to vote");
    } else {
        console.log("Eligible to vote");
    }
}

checkEligibility(-20);
checkEligibility(20);
checkEligibility(17);
checkEligibility(18);