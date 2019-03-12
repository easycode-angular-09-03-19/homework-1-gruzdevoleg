//Создать функцию которая принимает число и считает факториал этого числа.
const factorial = (num?: number):number => {
	if(!num) return 0;
	let fact = 1;
	for (let i = 1; i <= num; i++) fact *= i;
	return fact;
};

console.log(factorial(6));

//Создать функцию multiply, которая будет принимать любое количество чисел
//и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
//Если нет ни одного аргумента, вернуть ноль: multiply() // 0
const multiply = (...rest) => (rest.length === 0) ? 0 : rest.reduce((mul, currentItem) => mul * currentItem);

console.log(multiply(1,2,3));

//Создать функцию, которая принимает строку и возвращает строку-перевертыш:
// reverseString(‘test’) // “tset”.
const reverseString = (userString: string): string => userString.split('').reverse().join('');

console.log(reverseString('test'));

//Создать интерфейс Админа
interface Admin {
	name: string;
	email: string;
	password: string;
	type: string;
};

//Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка)
//а также с двумя свойствами mileage (общий пробег машины) и fuel (количество бензина в машине).
//Наследоваться от абстрактного класса Car и реализовать методы абстрактного класса
//drive (ехать) и refuel (заправка). Метод drive должен принимать количество километров
//и обновлять свойство mileage и уменьшать значение свойства fuel.
//Если бензин закончился, то нужно вернуть сообщение о том что нужно заправиться.
//Метод refuel должен увеличивать свойство fuel. Обязательно делать проверку переданных данных.
//Свойства fuel и mileage должны быть protected.
//Создать публичный get для получения свойств fuel и mileage.
abstract class Car {
	constructor(
		protected _mileage: number,
		protected _fuel: number
		) {}
	
	abstract drive(addMileage);
	abstract refuel(addGasoline);
	public abstract getStatus();
};

class Track extends Car {

	constructor(_mileage, _fuel) {
		super(_mileage, _fuel);
	}

	drive(addMileage: number = 0) {
		if (addMileage < 0) return;
		this._mileage += addMileage;
		this._fuel -= addMileage/10; //пусть расход 10л/100км 
		if (this._fuel <= 0) console.log('You need refuel'); 
	}

	refuel(addGasoline: number = 0) {
		if (addGasoline < 0) return 'Don\'t mind draining gasoline!';
		this._fuel += addGasoline;
		if (this._fuel > 100) {
			this._fuel = 100;
			console.log('Gasoline tank is full (100 liters)!');
		}
	}

	public getStatus() { 
		return `Total mileage is ${this._mileage}, gasoline tank is ${this._fuel} liters`;
	}
};

const BMW = new Track(500, 80);
BMW.drive(100);
BMW.refuel(5);
console.log(BMW.getStatus());