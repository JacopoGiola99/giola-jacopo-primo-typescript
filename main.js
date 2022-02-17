"use strict";
let mike = {
    age: 25,
    name: 'Mike',
    say: function () {
        return 'My name is ' + this.name + ' and Im ' + this.age + ' years old!';
    },
};
const sayIt = (person) => {
    console.log(person.name);
    console.log(person.age);
    console.log(person.say());
};
const sayIt2 = ({ name, age }) => {
    console.log(name);
    console.log(age);
};
const getArray = () => {
    return [1, 2, 3, 4, 5];
};
const arr = getArray();
arr === null || arr === void 0 ? void 0 : arr.map(x => x * 2);
sayIt(mike);
sayIt2(mike);
