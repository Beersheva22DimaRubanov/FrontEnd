class Rectangle {
    #width;
    #height;
    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }
    square() {
        return this.#width * this.#height;
    }
    perimiter() {
        return 2 * (this.#height + this.#width);
    }
};

const rectangle = new Rectangle(3, 4);

console.log(rectangle.square());

class Square extends Rectangle{
    constructor(width){
        super(width, width);
    }
}

const square = new Square(10);
console.log(square.perimiter());
console.log(square.square());

Array.prototype.map = function(){
    console.log(this)
    return 'kuku'
};

const ar = [1,2,3];
console.log(ar.map())

console.log('for each: ' + [1,2,3].forEach(f => f*2));

Array.prototype.forEach = function(f){
    for(let i = 0; i<this.length; i++){
      f(this[i], i, this )
    }
};

const array1 = [1, 2, 3, 4];

const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log('Reduce: ' + sumWithInitial);

Array.prototype.filter = function(fun){
    let res =[];
    let index = 0;
    for(let i =0; i<this.length; i++){
        if(fun(this[i])){
            res.push(this[i]);
        }
    }
    return res;
};

Array.prototype.map = function(fun){
    let res =[];
   for(let i = 0; i<this.length; i++){
    res.push(fun(this[i], i, this));
   };
   return res;
};

// Array.prototype.reduce = function(fun, initial){
//     let accum;
//     accum = initial ? initial: this[0];
//     for(let i = initial? 0: 1; i< this.length; i++){
//         accum = fun(accum, this[i]);
//     }
//     return accum;
// };
let arr = [];

[1,2,3].forEach(f => arr.push(f));
console.log(arr)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

console.log([1,2,3,4].map(f=>f+3));

const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    ["Alphabet"]
  );
  
  console.log('Reduce: ' + sumWithInitial + typeof sumWithInitial);
  console.log('Reduce: ' + array1);


class Deferred{
    arr =[];
    constructor(){
        // this.#arr = ['a','b','c']
    }

    then(fun){
        // return fun(this.#arr[0])
        this.arr.push(fun)
        
    }

    resolve(word){
       this.arr.forEach(fun => word = fun(word));
    }
}

  const d = new Deferred()
d.then(function(res){ console.log("1 ", res); return "a"; });

d.then(function(res){ console.log("2 ", res); return "b"; });

d.then(function(res){ console.log("3 ", res); return "c"; });
d.resolve('hello');
// 1  hello
// 2  a
// 3  b