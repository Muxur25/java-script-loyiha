class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}
	
	greeting() {
		return `Full name: ${this.firstName} ${this.lastName}`
	}
}

class StatusPerson extends Person {
	constructor(firstName, lastName, isMarried) {
		super(firstName, lastName)
		this.isMarried = isMarried
	}

	get() {
		return `Full name: ${this.firstName} ${this.lastName}. Married: ${this.isMarried}`
	}
}

const firstPerson = new Person("Samar", "Badriddinov")
const secondPerson = new Person("Yusuf", "Khamdamov")

console.log(firstPerson.greeting())
console.log(secondPerson.greeting())

const thirdPerson = new StatusPerson("Muhammad", "Abdulloh", true)

console.log(thirdPerson.get())

function logger(a, b, ...rest) {
	console.log(a)
	console.log(b)
	console.log(rest)
}

logger(12, 10, 1,2,3,4,5,6,7)

const calc = (a, b = 2) => {
	return a + b
}

console.log(calc(1))

