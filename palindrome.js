// Program untuk memeriksa apakah sebuah string merupakan palindrome atau bukan

// mendefinisikan sebuah fungsi untuk memeriksa palindrome yang menerima parameter (str)
function checkPalindrome(str) {

    // mendefinisikan variabel yang menampung panjang string
    const len = string.length;

    // perulangan string sampai setengahnya
    for (let i = 0; i < len / 2; i++) {

        // mencari perbedaan setengah pertama (dimulai dari index pertama maju) dengan setengah kedua (dimulai dari index terakhir mundur)
        if (string[i] !== string[len - 1 - i]) {
            // teks yang dimunculkan apabila perbedaan ditemukan
            return 'Ini';
        }
    }
    // teks yang dimunculkan apabila perbedaan tidak
    return 'It is a palindrome';
}

// menampung input dari pengguna (argumen)
const string = prompt('Enter a string: ');

// membuat instance dari fungsi checkPalindrome dan memasukkan string sebagai argumennya
const value = checkPalindrome(string);

// mencetak value
console.log(value);