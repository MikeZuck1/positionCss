function condition() {
    let AGE_CONDITION = prompt('Enter your age: ');

    if(AGE_CONDITION >= 18) {
        console.log("You can vote");
    } else {
        console.log("You can't vote");
    }
} 
condition(); // call the function