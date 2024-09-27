# Translate App

Bu proje ile istenen kelimeyi, cümleyi veya paragrafı istenilen dile çevirir.<br />
Birçok dil seçeneği bulunmaktadır.<br />

Tailwindcss ile arayüz geliştirildi.<br />
React projesinde, Vite.js kullanıldı.<br />
Redux Toolkit kullanıldı. React mimarisinin karmaşık yapısını kolaylaştırır.<br />
Api'ye [buradan](https://rapidapi.com/dickyagustin/api/text-translator2) ulaşabilirsiniz.<br />
## Gif

![](/public/translate-app-toolkit.gif)

## Projenin Çalıştırılması
Projeyi indiriniz veya fork ediniz. 'Visual Studio Code' editörü ile projeyi açınız. 
```
git clone https://github.com/evinoguz/translate-app.git
```

Proje dizininde .env adında dosya oluşturunuz. Bu dosyada ortam değişkenlerini tanımlayınız.
```
VITE_API_KEY = yourApiKey
VITE_API_URL = https://yt-api.p.rapidapi.com
```

  Terminalde;
```
npm install

```
komutu ile projede kullanılan paketlerin yüklenmesini sağlar, ardından
```
npm run dev
```
komutu ile proje ayağa kaldırılır.
