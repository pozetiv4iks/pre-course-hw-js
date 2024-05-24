let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let newPassportMarried = JSON.parse(JSON.stringify(passportMarried));

newPassportMarried.married = true;

console.log(passportMarried);
console.log(newPassportMarried);