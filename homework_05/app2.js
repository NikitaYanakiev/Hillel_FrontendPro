// 2. Известны два расстояния. Одно в километрах, другое - в футах (1 фут = 0,305м). Какое расстояние меньше?

let distance1 = +prompt('Write the distance in km', '');
let distanceFeet = +prompt('Write the distance in ft', '');

let distance2 = (distanceFeet * 0.305) / 1000; 

if (distance1 < distance2) {
    alert(`${distance1} less`);
} else if (distance2 < distance1) {
    alert(`${distance2} less`);
}
else {
    alert(`${distance2} less`);
}