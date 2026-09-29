# Twitter Clone - Frontend

Workintech FSWEB-s19-Challenge kapsamındaki backend'i test etmek için yazdığım basit bir React arayüzü.
Backend'deki `/tweet/findByUserId` endpoint'ine istek atıp gelen tweetleri ekrana basıyor. Amacı CORS
hatasını gözlemleyip çözmekti.

## Kullanılan teknolojiler

- React
- Vite

## Nasıl çalıştırılır

Önce backend'in çalışıyor olması gerekiyor: https://github.com/sinembaglar/twitter-clone-backend

```
npm install
npm run dev
```

Uygulama `http://localhost:3200` adresinde açılır (port `vite.config.js` içinde 3200 olarak ayarlı,
backend'deki CORS izni de bu porta göre verilmiş durumda).
