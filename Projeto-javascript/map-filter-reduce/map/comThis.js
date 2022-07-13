const laranja = {
	price: 2,
};

const maca = {
	price: 1.5,
};

function mapcomThis() {
	const arr = [1, 2, 3, 4, 5];

	return arr.map(function (item) {
		return item * this.price;
	}, maca);
}

console.log(mapcomThis());