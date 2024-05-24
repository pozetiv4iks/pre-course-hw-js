let passport = {
    name: "Petr",
    surname: "Petrov",
};

let pas = {};
for (let i in passport) {
    pas[i] = passport[i];
  }
pas.name = "Ivan";

console.log(passport.name);
console.log(pas.name);