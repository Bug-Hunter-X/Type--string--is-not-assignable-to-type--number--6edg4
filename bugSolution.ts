function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", 25];
let userName = user[0]; // Access the string element of the array
console.log(greeter(userName));