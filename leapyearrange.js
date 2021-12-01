// membuat function untuk menerima parameter inputan range tahun dan menampung hasil berupa leap year
function leap_year_range(start_year, end_year) {
    // membuat variabel bertipe array untuk menampung semua tahun dalam range
    var year_range = [];
    // membuat perulangan untuk memasukkan semua tahun ke dalam year_range
    for (var i = start_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    // membuat array untuk menampung leap year
    var leap_year = [];

// melakukan perulangan year_range dengan callback function
year_range.forEach(
function(year)
{
    // menguji data yang benar dari test_LeapYear
   if (test_LeapYear(year))
   // memasukkan data yang benar dari test_LeapYear
   leap_year.push(year);
});

// mengembalikan hasil akhir berupa leap year
return leap_year;
 }

// membuat function untuk menguji apakah year merupakan leap year
function test_LeapYear(year) {
// membuat pengujian leap year menggunakan if
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    // jika benar akan mengembalikan year itu sendiri
            return year;
    } else {
            return false;
    }
}

// menampung input dari pengguna (argumen)
const sy = prompt('Masukkan tahun mulai: ');
const ey = prompt('Masukkan tahun akhir: ');

// membuat instance dari fungsi leap_year_range dan memasukkan sy dan ey sebagai argumennya
const value = leap_year_range(sy, ey);

// mencetak value
console.log(value);