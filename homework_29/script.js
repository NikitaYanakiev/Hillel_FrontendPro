function Human(name, age) {
    this.name = name;
    this.age = age;

    this.showInfo = function() {
        let personInfo = document.getElementById('personInfo');
        personInfo.innerHTML = `
            <h2>Person Information:</h2>
            <p>Name: ${this.name}</p>
            <p>Age: ${this.age}</p>
        `;
    };
}

function Car(brand, length, color, bodyType) {
    this.brand = brand;
    this.color = color;
    this.length = length;
    this.bodyType = bodyType;
    this.owner = null;

    this.showInfo = function() {
        let carInfo = document.getElementById('carInfo');
        carInfo.innerHTML = `
            <h2>Car Information:</h2>
            <p>Brand: ${this.brand}</p>
            <p>Color: ${this.color}</p>
            <p>Length: ${this.length}</p>
            <p>Body Type: ${this.bodyType}</p>
        `;
        if (this.owner) {
            carInfo.innerHTML += `
                <h2>Owner Information:</h2>
                <p>Name: ${this.owner.name}</p>
                <p>Age: ${this.owner.age}</p>
            `;
        }
    };

    this.newOwner = function(owner) {
        this.owner = owner;
    };
}

let userName = prompt('Enter name');
let userAge = prompt('Enter age');

if (userName && userAge && !isNaN(userAge) && parseInt(userAge) >= 18) {
    let user = new Human(userName, userAge);
    user.showInfo();

    const carBrand = prompt('Enter car brand');
    const carLength = prompt('Enter car length');
    const carColor = prompt('Enter car color');
    const carBodyType = prompt('Enter car body type');

    if (carBrand && carLength && carColor && carBodyType) {
        let car = new Car(carBrand, carLength, carColor, carBodyType);
        car.newOwner(user);
        car.showInfo();
    } else {
        let carInfo = document.getElementById('carInfo');
        carInfo.innerHTML = `<h2 class='error'>Invalid input for car details</h2>`;
    }
} else {
    let personInfo = document.getElementById('personInfo');
    personInfo.innerHTML = `<h2 class='error'>Invalid input. Age must be more than 18</h2>`;
}