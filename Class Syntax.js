function makeClass(){
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    return Person;
}

const Person = makeClass();
const child = new Person("Olive");
console.log(child.name)