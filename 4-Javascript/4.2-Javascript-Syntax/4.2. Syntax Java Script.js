//Variables
//Contoh pembuatan variabel menggunakan var (Sangat tidak disarankan)
var count = 12;
var c = "New Shipment";
console.log(c, ":", count);

//Contoh pembuatan variabel menggukan let dan const (Disarankan)
let dumbo;
dumbo = 12;

let sequel = 2;
let squirtle = dumbo - sequel;
const pi =  3.14;

{
    var dollar = 5;
    let swan = 2;   //Variabel ini tidak adan ada diluar kurung kurawal ini.
    console.log(swan);
}
let swan = 12;
console.log(swan);

//Tipe data
//String
let a = "Dumbo";

//Number
let b = 12; let c = 10.5; //Keduanya akan disimpan sebagai float (angka desimal), ada dan tiadanya koma

//Bigint
let x = BigInt("123456789012345678901234567890");

//Boolean
let y = false;

//Array
let andong = [12,1];

//Objects
const benda = {
    nama:"William", 
    volume:12
};