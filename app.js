//what's wrong - setTimeout(событие начнеться выполняться только после функции
// а значит никогда не начнеться так как while)

function sleep(timeout) {
    return new Promise(resolve => setTimeout(() => resolve(), timeout))
}

function f1() {
    console.log('f1 performed')
}

function f2() {
    console.log('f2 performed')
}

function f3() {
    console.log('f3 performed')
}

const promise = sleep(200);
promise.then(() => f1()).then(() => f2()).then(() => f3())

function getId(predicate) {
    const ids = [123, 124, 125, 126];
    const index = ids.findIndex(predicate);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return index < 0 ? reject('id not found') : resolve(ids[index])
        }, 1000);
    })
}

function getCar(id) {
    const cars = {
        '123': 'suzuki',
        '124': 'hunday',
        '125': 'honda'
    }
    const car = cars[id];
    return new Promise((resolve, reject) => setTimeout(() => car ? resolve(car) : reject('no car found'), 1000))
}

// function displayCar(predicate){
//     return(getId(predicate))
//     .then(id => getCar(id))
//     .then(car => console.log(car))
//     .catch(err => console.log(err))
// }

//new syntax:

async function displayCar(predicate) {
    try {
        const id = await getId(predicate);
        const car = await getCar(id);
        console.log(car);

    } catch (error) {
        console.log(error);
    }

}

displayCar(id => id == 126).then(() => console.log('thanks & good bye'));
console.log('waiting for the data ...')

