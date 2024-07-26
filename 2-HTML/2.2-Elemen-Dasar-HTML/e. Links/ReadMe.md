# Links

Pada standarnya, elemen HTML memiliki dua sifat, yaitu block dan inline. Elemen yang bersifat block selalu membuat baris baru ketika di-render. Contohnya seperti elemen paragraf, list, heading, dan lainnya. Lawan dari elemen tersebut, yaitu elemen inline. Elemen ini tidak menambahkan baris baru ketika di-render. Apa saja elemen tersebut? Mari kita bahas satu persatu.

## Anchor

Apa itu anchor? Anchor (jangkar) merupakan elemen yang digunakan untuk membuat sebuah hyperlink ke halaman atau website lain, file, alamat email, atau URL lainnya. Untuk menggunakan elemen ini kita gunakan <a> sebagai tag pembuka dan </a> sebagai tag penutup. Berikut adalah contoh penggunaan elemen anchor [Contoh Penggunaan Anchor](<Elemen Links HTML.html>)

Berikut adalah daftar atribut khusus yang dapat digunakan pada elemen ini.

Berikut adalah tabel dalam format Markdown:

| Atribut        | Nilai                                                                                                                                  | Deskripsi                                                                                                                                                                                                |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| download       | filename                                                                                                                               | Menginstruksikan browser untuk mengunduh pada URL yang ditetapkan daripada mengarahkannya.                                                                                                               |
| href           | URL                                                                                                                                     | Menetapkan target yang akan diarahkan/unduh ketika pengguna menekan hyperlink.                                                                                                                           |
| hreflang       | language_code                                                                                                                           | Menetapkan bahasa dari dokumen target.                                                                                                                                                                   |
| ping           | list_of_URLs                                                                                                                            | Menetapkan URL yang akan diberitahu dengan mengirimkan post request ping pada body oleh browser (berjalan di belakang layar) ketika target URL pada hyperlink ditekan. Biasanya atribut ini digunakan untuk pelacakan. |
| referrerpolicy | no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, unsafe-url                                                   | Menetapkan referensi untuk dikirim pada target.                                                                                                                                                          |
| rel            | alternate, author, bookmark, external, help, license, next, nofollow, noreferrer, noopener, prev, search, tag                            | Menetapkan hubungan antara halaman yang ditampilkan dengan target.                                                                                                                                       |
| target         | _blank, _parent, _self, _top                                                                                                             | Menetapkan lokasi ketika membuka target contohnya pada sebuah tab, window, atau tab itu sendiri.                                                                                                         |
| media          | media_type                                                                                                                              | Menetapkan tipe media yang digunakan pada target.                                                                                                                                                        |

## Contoh 

```html
<p>Hubungi kami di</p>
<ul>
  <li><a href="https://example.com">Website</a></li>
  <li><a href="mailto:info@example.com">Email</a></li>
  <li><a href="tel:+62123456">Telepon</a></li>
  <li><a href="#address">Alamat</a></li>
</ul>
```