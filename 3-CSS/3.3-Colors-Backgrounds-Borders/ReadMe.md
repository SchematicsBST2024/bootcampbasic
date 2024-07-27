# Advance CSS - Colors, Backgrounds, Borders

## Before You Start

### Fonts Family

```css
/* CSS Font Family */
body {
  font-family: Arial, sans-serif;
}

span {
  font-family: "Times New Roman", Times, serif;
}
```

- Seluruh nilai font yang bukan merupakan generic font families harus dituliskan secara kapital. Contohnya, “Arial” bukan dituliskan “arial”.
- Gunakan tanda koma (,) untuk memisahkan antara nilai font yang digunakan. 
- Selalu tanda kutip (“) untuk membungkus nilai font yang memiliki spasi pada namanya. Contohnya “Open Sans”.

> Kenapa kita harus menggunakan lebih dari satu font family? Karena jika font pertama tidak tersedia di perangkat pengguna, maka browser akan mencari font kedua yang tersedia.

> Bagaimana urutan prioritasnya? Dimulai dari jenis font yang pertama dituliskan. Jika font pertama didukung oleh browser, ia akan digunakan. Jika tidak, lantas browser akan memeriksa nilai font yang kedua dan menggunakannya apabila didukung, begitupun selanjutnya.

Hal yang perlu kita perhatikan adalah pastikan untuk menggunakan generic font families pada akhir nilai properti font-family. Nilai ini dipastikan didukung oleh seluruh browser saat ini. Lantas, apa saja nilai dari generic font families ini? Berikut adalah nilai-nilai generic font families yang dapat kita gunakan untuk fallback mechanism.

- Serif: jenis font yang memiliki runcing pada garis akhir karakternya. Times New Roman merupakan salah satu jenis serif font.
- Sans-serif: jenis font yang tidak meruncing pada garis akhir karakternya. Contohnya, “Open Sans”, “Fira Sans” dan lainnya.
- Monospace: jenis font yang memiliki nilai lebar tiap karakternya sama. Consolas merupakan salah satu jenisnya.
- Cursive: jenis font yang tampak seperti handwriting atau hasil tulisan tangan.
- Fantasy: jenis font yang merepresentasikan karakteristik yang menyenangkan.
- System-ui: jika menerapkan nilai ini maka font yang diterapkan akan sama seperti font yang digunakan pada sistem operasi kita.
- Math: jenis font yang digunakan untuk penulisan rumus-rumus matematika.
- Emoji: jenis font yang digunakan untuk menampilkan emoji.
- Fangsong: jenis font yang menampilkan gaya penulisan Chinese.

### Font-face

Apa itu @font-face? @font-face adalah aturan CSS yang memungkinkan kita untuk memuat font dari server dan menggunakannya pada halaman web. Dengan menggunakan @font-face, kita dapat menggunakan font yang tidak tersedia di perangkat pengguna.

```css
/* CSS @font-face */
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular.ttf");
}

body {
  font-family: "Open Sans", sans-serif;
}
```

- Pada contoh di atas, kita mendefinisikan font-family “Open Sans” dengan menggunakan @font-face. Kemudian, kita menggunakannya pada elemen body.
- Pada properti src, kita menuliskan URL dari font yang akan digunakan. Pastikan untuk menuliskan path yang benar agar font dapat dimuat dengan baik.

### Font-size
Mengubah nilai font pada sebuah dokumen adalah hal yang sangat wajar terjadi, begitu pula pada website. Untuk menetapkan ukuran font, kita perlu menerapkan properti font-size dengan menetapkan nilai dari properti ini dengan menuliskan langsung nilai dan satuannya.

```css
/* CSS Font Size */
h1 {
  font-size: 24px;
}

p {
  font-size: 16px;
}
```

Satuan dalam menetapkan ukuran font terbagi dua jenis.

- Relative Unit : Satuan yang nilainya tergantung pada suatu hal. Contohnya, ukuran viewport, induk elemen, atau ukuran teks standar.
- Absolute Unit : Satuan yang nilainya telah ditentukan atau digunakan dalam dunia nyata.

#### Relative Unit

Berikut adalah tabel yang merangkum satuan CSS relatif dan fungsinya:

| Satuan | Relative to          | Fungsi                                                                                                                                   |
|--------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| em     | Font size            | Satuan relatif terhadap ukuran font yang sedang digunakan pada elemen (contohnya, 2em berarti 2 kali lebih besar dari ukuran font seharusnya). |
| ex     | Font height          | Satuan relatif terhadap tinggi font saat ini, satuan ini sangat jarang sekali digunakan.                                                  |
| rem    | Font size            | Mirip seperti em, tetapi rem merupakan satuan relatif terhadap ukuran font dari root element.                                             |
| ch     | Font width           | Satuan relatif terhadap lebar dari karakter “0” nol.                                                                                      |
| vw     | Viewport width       | Satuan relatif terhadap 1% lebar viewport. Contoh 1vw = 1% dari lebar viewport. Satuan ini tidak didukung pada browser IE8 ke bawah.       |
| vh     | Viewport height      | Satuan relatif terhadap 1% tinggi viewport. Contoh 1vh = 1% dari tinggi viewport. Satuan ini tidak didukung pada browser IE8 ke bawah.     |


#### Absolute Unit

Berikut adalah tabel yang merangkum satuan CSS absolut dan fungsinya:

| Satuan | Fungsi                                                        |
|--------|---------------------------------------------------------------|
| px     | Menetapkan nilai font berdasarkan ukuran pixel.               |
| pt     | Menetapkan nilai font berdasarkan points (1/72 inch di CSS2.1). |
| pc     | Menetapkan nilai font berdasarkan picas (1 pica = 12 point).  |
| mm     | Menetapkan nilai font berdasarkan millimeters.                |
| cm     | Menetapkan nilai font berdasarkan centimeters.                |
| in     | Menetapkan nilai font berdasarkan inches.                     |

Tabel ini memberikan panduan tentang berbagai satuan absolut dalam CSS dan penggunaannya untuk menetapkan nilai font.

Contoh Penggunaan % pada Font Size

```css
body {
  font-size: 16px;
}
 
h1 {
  font-size: 150%; /* 150% dari 16 = 24px */
}
```

## Colors

```css
/* Warna hijau menggunakan format RGB */
color: rgb(78,231,23);
 
/* Warna hijau Menggunakan format HEX */
color: #4ee717;
 
/* Warna hijau menggunakan format HSL (hanya di CSS3)*/
color: hsl(104, 82%, 50%);
```

HTML Color Names secara lengkap dapat dilihat di [HTML Color Names](https://www.w3schools.com/colors/colors_names.asp)