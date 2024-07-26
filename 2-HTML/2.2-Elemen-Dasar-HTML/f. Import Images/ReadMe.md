# Gambar

## Jenis Format Gambar

Berikut adalah jenis format gambar yang umum digunakan pada pembuatan website.

| Nama                               | Ekstensi Format File                 | Keterangan                                                                                                                                                                       |
|------------------------------------|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Graphics Interchange Format        | .gif                                 | Dapat digunakan untuk gambar animasi. Ukuran file biasanya kecil. Kualitas gambar terbatas.                                                                                      |
| Joint Photographic Expert Group    | .jpg, .jpeg, .jfif, .pjpeg, .pjp     | Kualitas teks pada gambar dapat menjadi buruk. Ukuran file lumayan kecil. Pada website biasanya digunakan untuk gambar yang tidak banyak teks.                                   |
| Portable Network Graphics          | .png                                 | Teks lebih bisa terbaca dibandingkan jenis jpeg. Ukuran file dapat menjadi besar sehingga mengurangi kecepatan memuat situs.                                                     |
| WebP                               | .webp                                | Dibandingkan dengan gambar berkualitas sama pada jpeg atau png, ukuran file pada webp dapat menjadi lebih kecil. Namun, tidak semua web browser dapat membaca webp.              |
| Scalable Vector Graphics           | .svg                                 | Kualitas gambar terjaga dan ukuran file kecil. Namun, tidak cocok untuk gambar yang terlalu kompleks, seperti foto. Pada website biasanya digunakan untuk logo atau ikon.         |

## Mengatur Ukuran pada Gambar

- Contoh gambar yang tidak proporsional:

```html
<!-- Jangan lakukan hal ini! -->
<img src="gambar.jpg" width="200" height="100">
```

Contohnya, jika kita tetap memaksa untuk menentukan ukuran panjang dan lebar sebuah gambar tanpa menyesuaikan rasionya, gambar yang ditampilkan tidak akan proporsional.

- Contoh gambar yang proporsional:

```html
<!-- Lakukan hal ini! -->
<img src="gambar.jpg" height="100">
<!-- atau -->
<img src="gambar.jpg" width="200">
```

Opsi lainnya, kita juga bisa tetapkan ukuran gambar berdasarkan tingginya atau lebarnya. Dengan begitu nilai lebar atau tingginya akan menyesuaikan nilainya berdasarkan rasio gambar aslinya.

