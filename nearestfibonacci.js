function nearestFibonacci(num){
	// Base Case
	if (num == 0) {
		return num;
	}

	// mendefinisikan angka pertama dan kedua
	let first = 0, second = 1;

	// mendefinisikan angka ketiga
	let third = first + second;

	// mengulang langkah di atas sepanjang angka yang diinputkan
	while (third <= num) {

		// memperbarui angka pertama
		first = second;

		// memperbarui angka kedua
		second = third;

		// memperbarui angka ketiga
		third = first + second;
	}

	// menyimpan angka yang merupakan nearest fibonacci
	// memperoleh hasil yang paling dekat dengan num
	let result = (Math.abs(third - num)
			>= Math.abs(second - num))
				? second
				: third;

	// Print the result
	return result;
}

// menampung input dari pengguna (argumen)
const number = prompt('Enter a number: ');

// membuat instance dari fungsi nearestFibonacci dan memasukkan number sebagai argumennya
const value = nearestFibonacci(number);

// mencetak value
console.log(value);