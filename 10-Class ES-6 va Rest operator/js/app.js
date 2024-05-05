function Person (ism, familiya) {
	this.ism = ism
	this.familiya = familiya
	
	
	
	this.hello = function(){
		console.log(`Meni ismim ${this.ism}`)
	}
}

const yangi = new Person('Muxriddin', 'UMarov')

console.log(yangi.hello())