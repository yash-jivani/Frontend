// example 1 :
const tmp = {
  firstName: "Yash",
  lastName: "Jivani",
  hobbies: ["coding", "nothing", "etc"],
  calAge: function () {
    // console.log(this);
    this.age = 18;
    return this.age - 5;
  },
  summry: function () {
    return `${this.firstName} ${this.lastName} hobbies are ${this.hobbies} calcAge is ${this.calAge()} and age is ${this.age}`;
  },
};

let key = "Name";
let key2 = 'hobbies';

console.log(tmp.key2);       // can not evaluate
console.log(tmp[key2]);     // evaluate var. value

// note
console.log(tmp[key2] + "yash");        // + convert into string
console.log(tmp[key2] , "yash");        // , simply print

console.log(tmp["first" + key]);    // 1st concat thn access
console.log(tmp.first + key);       // 1st access thn concat

// ! NOTE : agr hum calAge() ko pehle call nhi karenge to tohh age ki value undefined hogi
console.log('calling age : beofre calAge() ->>',tmp.age); // beofre calAge called | undefined

console.log(tmp["calAge"]());
console.log(tmp.calAge());

console.log('calling age : after calAge() ->>',tmp["age"]); // after calAge called

console.log(tmp["summry"]());
console.log(tmp.summry())
