export function getRandomInt(min, max) {
    if (min == max) {
        max++;
    } else if (min > max) {
        [min, max] = [max, min];
    }
    return Math.trunc(min + Math.random() * (max - min));
}

export function getRandomElement(array) {
    return array[getRandomInt(0, array.length)]
}

export function getRandomEmployee() {
    const persons = [{ name: 'Vasia', gender: 'male' },
    { name: 'Oleg', gender: 'male' },
    { name: 'Dima', gender: 'male' },
    { name: 'Alex', gender: 'male' },
    { name: 'Andrew', gender: 'male' },
    { name: 'Tanya', gender: 'female' },
    { name: 'Irina', gender: 'female' },
    { name: 'Olga', gender: 'female' },
    { name: 'Alina', gender: 'female' }];
    const departments = ['QA', 'Development', 'Audit', 'Accounting', 'Management']
    const person = getRandomElement(persons);
    return {
        id: getRandomInt(100000, 1000000), name: person.name,
        birthYear: getRandomInt(1970, 2000), gender: person.gender, salary: getRandomInt(6000, 15000),
        department: getRandomElement(departments)
    };
}