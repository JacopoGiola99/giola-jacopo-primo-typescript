interface IPerson {
    age: number;
    name: string;
    say(): string;
}

let mike = {
    age: 25,
    name: 'Mike',
    say: function() {
        return 'My name is ' + this.name + ' and Im ' + this.age + ' years old!';   
    },
};

const sayIt = (person: IPerson) => {
    console.log(person.name);
    console.log(person.age);
    console.log(person.say());
}

type PersonType = {
    age: number;
    name: string;
    say: () => string;
    say2?: () => string;
}

// Usato nelle props di un componente react
const sayIt2 = ({ name, age }:PersonType) => {
    console.log(name);
    console.log(age);
};

// Union types  nella return della funzione
// @returns

const getArray = ():number[]|null => {
    return [1, 2, 3, 4, 5];
}

const arr = getArray();

// Operatore ?  verifica se arr è undefined
arr?.map(x => x * 2);

sayIt(mike);
sayIt2(mike);