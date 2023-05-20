this.x = 100;

//console.log(this);
function f1  () {
    return this
}

const f2 = () =>{
    return(this)
}

console.log('f1 call result', f1())
console.log('f2 call result', f2())

const x = {f1: function(){
    return this;
}, f3: () => {return this}};
console.log('x.f1 call result ', x.f1());
console.log('x.f2 call ', x.f2);

const rectangle1 = {width: 20, height: 20, square: function(){
    return this.width * this.height;
}, perimeter: ()=> 2* (this.width + this.height)};

const rectangle2 = {width: 20, height: 20, square: function(){
    return this.width * this.height;
}, perimeter: ()=> 2* (this.width + this.height)};

console.log('square = ' + rectangle1.square());
console.log('perimeter = ' + rectangle1.perimeter());

const point ={x: 3, y: 4};
function displayPoint(z, t){
    console.log(`x = ${this.x}, y = ${this.y}, z = ${z}, t =${t}`)
}

displayPoint.bind(point, 100, 200)();
displayPoint.call(point, 200, 300);
displayPoint.apply(point, [300,400]);


Function.prototype.myBind = function(context, ...bindeArgs){
    return(...args) => {
        context.boundFunc = this;
        const res = context.boundFunc(...bindeArgs, ...args);
        delete context.bindeArgs;
        return res;
    }

}

const mydisplayPoint1 = displayPoint.myBind(point, 100, 200)();
