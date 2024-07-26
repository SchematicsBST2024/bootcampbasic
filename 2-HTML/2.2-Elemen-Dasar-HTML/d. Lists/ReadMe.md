# List

Pada HTML terdapat tiga tipe list.

- Unordered lists: daftar yang ditampilkan tidak memiliki urutan. 
- Ordered lists: daftar yang ditampilkan secara terurut.
- Description lists: daftar yang terbuat dari beberapa istilah diikuti dengan deskripsi dari istilah tersebut.

Contoh penggunaan ketiga tipe list tersebut adalah sebagai berikut: [Pengunaan List](<Elemen List HTML.html>)

## Atribut Type pada List

Pada ordered list, tipe urutan angkanya dapat kita atur melalui sebuah atribut type. Contohnya, selain nomor, urutan angka dapat diganti dengan alfabet ataupun angka romawi.

| Nilai | Deskripsi                                    |
|-------|----------------------------------------------|
| 1     | Menggunakan angka dalam urutan item (default)|
| a     | Menggunakan huruf kecil dalam urutan item    |
| A     | Menggunakan huruf besar dalam urutan item    |
| i     | Menggunakan huruf romawi kecil dalam urutan item |
| I     | Menggunakan huruf romawi besar dalam urutan item |

Contoh penggunaan atribut type pada ordered list adalah sebagai berikut: 

```html
<ol type="I">
  <li>Langkah pertama</li>
  <li>Langkah kedua</li>
  <li>Langkah ketiga</li>
  <li>Langkah selanjutnya</li>
</ol>
 
<ol type="A">
  <li>Langkah pertama</li>
  <li>Langkah kedua</li>
  <li>Langkah ketiga</li>
  <li>Langkah selanjutnya</li>
</ol>
```

## Atribut Start pada List

Atribut start digunakan untuk menentukan angka awal pada ordered list. Contoh penggunaan atribut start pada ordered list adalah sebagai berikut:

```html
<ol start="7">
  <li>Langkah ketujuh</li>
  <li>Langkah kedelapan</li>
  <li>Langkah kesembilan</li>
  <li>Langkah selanjutnya</li>
</ol>
```

## Atribut Reverse pada List

Atribut reverse digunakan untuk membalik urutan item pada ordered list. Contoh penggunaan atribut reverse pada ordered list adalah sebagai berikut:

```html
<ol start="7" reversed>
  <li>Langkah ketujuh</li>
  <li>Langkah keenam</li>
  <li>Langkah kelima</li>
  <li>Langkah keempat</li>
</ol>
```