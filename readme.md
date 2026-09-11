# Derece Dönüşüm Uygulaması

Kullanıcıdan girilen bir dereceyi Celsius'tan Fahrenhayt'a veya Fahrenhayt'tan Celsius'a çeviren, saf HTML, CSS ve JavaScript ile geliştirilmiş basit bir web uygulaması.

## Demo

https://github.com/user-attachments/assets/8b7c30cd-c9d1-4ba2-a066-3134145b718b

## Özellikler

- **Celsius → Fahrenhayt** ve **Fahrenhayt → Celsius** dönüşümü
- Sonucun hem **konsola** hem de **ekrana** yazdırılması
- Boş girdi kontrolü (kullanıcı değer girmeden butona basarsa uyarı gösterilir)
- **Enter tuşu desteği** — kullanıcının en son seçtiği dönüşüm yönüne göre işlemi tekrar tetikler
- Dönüşüm sonrası input alanının otomatik temizlenmesi

## Kullanılan Teknolojiler

- HTML5
- Vanilla JavaScript (herhangi bir framework/kütüphane kullanılmadı)

## Proje Yapısı

```
js-derece-donusum/
├── index.html          # Uygulamanın arayüzü (input, butonlar, sonuç alanı)
├── derece-donusum.js   # Dönüşüm mantığı ve DOM etkileşimleri
└── README.md
```

## Nasıl Çalışır

1. `index.html` dosyasını bir tarayıcıda açın.
2. Input alanına bir derece değeri girin.
3. `C -> F` veya `F -> C` butonuna tıklayın (ya da daha önce tıkladığınız yönü tekrar kullanmak için `Enter` tuşuna basın).
4. Sonuç hem ekranda hem de tarayıcı konsolunda (F12 → Console) görüntülenir.

## Öğrenilen / Uygulanan JavaScript Kavramları

- `document.getElementById` ile DOM elementlerine erişim
- `const` / `let` kullanım ayrımı (değişmeyen referanslar vs. değişen değerler)
- `addEventListener` ile click ve keydown event yönetimi
- Fonksiyonlarla kodun modüler hale getirilmesi (`celciusToFahrenhayt`, `fahrenhaytToCelcius`)
- String'den sayıya dönüşüm (`Number()`)
- `if-else` ile girdi doğrulama (validation)
- `.textContent` ile DOM içeriğini güncelleme
- Programatik olarak `.click()` metodu ile event tetikleme

## Geliştirme Süreci

Proje, farklı git branch'leri üzerinde adım adım geliştirilmiştir:
- Buton ve input elementlerinin tanımlanması
- Dönüşüm fonksiyonlarının yazılması
- Event listener'ların bağlanması ve test edilmesi
- Girdi doğrulama (boş değer kontrolü) eklenmesi
- Ekrana sonuç yazdırma özelliğinin eklenmesi
- Enter tuşu desteğinin eklenmesi

## Olası Geliştirmeler

- Ondalıklı sonuçların yuvarlanması (örn. `toFixed(2)`)
- Negatif mutlak sıfır altı değerler için ek doğrulama
- Basit bir CSS ile arayüzün görsel olarak geliştirilmesi
- Dönüşüm geçmişinin listelenmesi