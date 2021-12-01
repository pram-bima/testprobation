function reverseWords(str) {
  // memisahkan string menjadi kata, kemudian memisahkan kata menjadi huruf dan direverse, kemudian disatukan jadi kata lagi
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    // mengembalikan kata yang sudah direverse dan menyatukannya menjadi string utuh
    return reverseWordArr.join(" ");
}

// menampung input dari pengguna (argumen)
const string = prompt('Enter a string: ');

// membuat instance dari fungsi reverseWords dan memasukkan string sebagai argumennya
const value = reverseWords(string);

// mencetak value
console.log(value);