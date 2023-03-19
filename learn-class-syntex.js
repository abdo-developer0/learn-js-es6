
class Car {

    constructor(name, color) {
        this._name = name
        this._color = color
    }
    
    getName = () => this._name;

    setName = (v) => this._name = v;

    getColor = () => this._color;

    setColor = (v) => this._color = v;
}


// get instance
let car1 = new Car('anon', 'red');
// print instance
console.log(car1);

// print _name using geter method.
console.log("name of car is " + car1.getName());
// print _color using geter method.
console.log( "color of car is " + car1.getColor())

class Tuta extends Car {
    constructor(color) {
        super("Tuta", color);
    }
}

// get instance
let tuta = new Tuta("green");
// print instance
console.log(tuta);

// print _name using geter method.
console.log("name of car is " + tuta.getName());
// print _color using geter method.
console.log( "color of car is " + tuta.getColor())
