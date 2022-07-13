function somaNumeros(arr) {
    return arr.reduce(function(prev, currrent) {
        console.log({ prev });
        console.log({ currrent });
        return prev + currrent;
    }, 0);
}

const arr = [1, 2];

console.log(somaNumeros(arr));

//	if (!arr || !arr.length) return;
//	const soma = arr.reduce((prev, curr) => prev + curr);
