# derece-donusum

## Video

<video src="https://github.com/user-attachments/assets/8b7c30cd-c9d1-4ba2-a066-3134145b718b" controls muted width="600"></video>

## Bu projede neler öğrendim?

- `function isim(parametre) { return ...; }` şeklinde, kendi isimlendirdiğim fonksiyonları tanımlamayı ve `return` ile bir değer döndürmeyi öğrendim.
- Celsius-Fahrenheit dönüşüm formüllerini (`(derece × 9/5) + 32` ve `(derece − 32) × 5/9`) ayrı, tekrar kullanılabilir fonksiyonlar haline getirmeyi öğrendim.
- Kullanıcının **en son hangi butona bastığını** ayrı bir değişkende (`sonSecilenYon`) saklayıp, bu bilgiyi daha sonra (Enter tuşuna basıldığında) tekrar kullanmayı öğrendim.
- `addEventListener("keydown", ...)` ile klavye tuşlarını dinlemeyi, ve `event.key === "Enter"` ile hangi tuşa basıldığını kontrol etmeyi öğrendim.
- Bir butona **kod içinden**, kullanıcı tıklamadan, `buton.click()` ile "tıklanmış gibi" davranmasını sağlamayı öğrendim — böylece Enter tuşu, mevcut buton mantığını tekrar yazmadan tetikleyebiliyor.
- Girdi kontrolü (boş mu değil mi) yapıp, hem `alert` ile kullanıcıyı uyarmayı hem de sonuç alanını temizlemeyi öğrendim.
- İşlem tamamlandıktan sonra input'u otomatik temizlemeyi ve sonucu hem ekrana (`textContent`) hem konsola yazdırmayı pekiştirdim.

## Kullanılan teknolojiler

| Teknoloji | Amaç |
| --- | --- |
| HTML5 | Sayfa yapısı ve form elemanları |
| JavaScript (vanilla) | Derece dönüşüm mantığı, klavye/tıklama olayları, girdi kontrolü |

## Klasör yapısı

    js-derece-donusum/
    ├── assets/
    │   └── donusum.mp4
    ├── derece-donusum.js
    ├── index.html
    └── readme.md

## English

## Demo Video

<video src="https://github.com/user-attachments/assets/8b7c30cd-c9d1-4ba2-a066-3134145b718b" controls muted width="600"></video>

## What did I learn in this project?

- I learned how to define my own named functions using `function name(parameter) { return ...; }`, and how to return a value with `return`.
- I turned the Celsius-Fahrenheit conversion formulas (`(degree × 9/5) + 32` and `(degree − 32) × 5/9`) into separate, reusable functions.
- I learned how to store which button the user pressed most recently in a separate variable (`sonSecilenYon`), and reuse that information later (when the Enter key is pressed).
- I learned how to listen for keyboard input using `addEventListener("keydown", ...)`, and check which key was pressed with `event.key === "Enter"`.
- I learned how to trigger a button "as if it was clicked" from within the code, using `button.click()` — this lets the Enter key reuse the existing button logic without duplicating it.
- I practiced input validation (checking for empty input), warning the user with `alert`, and clearing the result area when needed.
- I reinforced clearing the input automatically after a successful operation, and displaying the result both on the page (`textContent`) and in the console.

## Technologies used

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure and form elements |
| JavaScript (vanilla) | Temperature conversion logic, keyboard/click events, input validation |

## Folder structure

    js-derece-donusum/
    ├── assets/
    │   └── donusum.mp4
    ├── derece-donusum.js
    ├── index.html
    └── readme.md
    