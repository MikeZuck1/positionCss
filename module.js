const stringSayHello = "     Hello World     ";
const trimmedString = stringSayHello.trim();

console.log(trimmedString); 

const objectJavaScript = () => {
    const myObjectPerson = {
        name: "John",
        age: 16,
        city: "New York",
        married: true,
    }
    
    console.log(myObjectPerson.married);
    // Accessing properties of an Object

    if(myObjectPerson.age === 16 && myObjectPerson.city === "New York") {
        console.log(`I can vote in my city : ${myObjectPerson.city}`);
    } else {
        console.log('I can\'t vote'); 
    }
}
objectJavaScript(); // call the function 