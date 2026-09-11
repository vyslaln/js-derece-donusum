console.log("Derece Dönüşüm Uygulamamız Başlamıştır.")

//butonlarımızı js'ye değişken olarak tanımlıyoruz.
const celciusFahrenhaytBtn = document.getElementById("celciusFahrenhaytBtn");
const fahrenhaytCelciusBtn = document.getElementById("fahrenhaytCelciusBtn");

//Input elementini bir kez seçip değişkende tutuyoruz, tekrar tekrar arama yaptırmıyoruz.
const dereceDonusum = document.getElementById("dereceDonusum");

//Sonucun ekrana yazdırılacağı alanı da aynı mantıkla bir kez seçip değişkende tutuyoruz.
const sonucAlani = document.getElementById("sonucAlani");

//Kullanıcının en son hangi dönüşüm yönünü seçtiğini burada tutuyoruz, Enter tuşu bu bilgiyi kullanacak.
let sonSecilenYon = null;

//Burada derece dönüşüm formüllerini ayrı birer fonksiyon olarak tutuyoruz.
function celciusToFahrenhayt(derece){
    return (derece * 9/5) + 32;
}

function fahrenhaytToCelcius(derece){
    return (derece - 32) * 5/9
}


//Burada butonlarımızın click eventini dönüşümler için aktif ediyoruz.

celciusFahrenhaytBtn.addEventListener("click", function(){
    //Kullanıcının bu yönü seçtiğini kaydediyoruz, Enter tuşu bunu kullanacak.
    sonSecilenYon = "C-F";

    //Burada kullanıcıdan dereceyi isteyeceğimiz kısmı tanımlıyoruz.
    let derece = dereceDonusum.value;

    //Burada bir if-else bloğu oluşturuyoruz ve kullanıcının veri girmeden butona basmasına engel oluyoruz
    //ve kullanıcın boş bir değer ile butona basıp basmadığını kontrol ediyoruz, eğer boş bir değer ile butona bastıysa hata alıyor, eğer değer girip bastıysa sonucunu alıyor.
    if(derece.trim() === ""){
        alert("Lütfen derece değerini giriniz!");
        sonucAlani.textContent = "";
    }
    else{
        const sonuc  = celciusToFahrenhayt(Number(derece));
        dereceDonusum.value = "";
        console.log("Derece dönüşümünüz başarılı bir şekilde tamamlandı. (C -> F) : " + sonuc);
        sonucAlani.textContent = "Sonuç (C -> F): " + sonuc;
    }

})

fahrenhaytCelciusBtn.addEventListener("click", function(){
    //Kullanıcının bu yönü seçtiğini kaydediyoruz, Enter tuşu bunu kullanacak.
    sonSecilenYon = "F-C";

    //Burada kullanıcıdan dereceyi isteyeceğimiz kısmı tanımlıyoruz.
    let derece = dereceDonusum.value;

    //Burada bir if-else bloğu oluşturuyoruz ve kullanıcının veri girmeden butona basmasına engel oluyoruz
    //ve kullanıcın boş bir değer ile butona basıp basmadığını kontrol ediyoruz, eğer boş bir değer ile butona bastıysa hata alıyor, eğer değer girip bastıysa sonucunu alıyor.
    if(derece.trim() === ""){
        alert("Lütfen bir derece değeri giriniz!");
        sonucAlani.textContent = "";
    }
    else{
        const sonuc = fahrenhaytToCelcius(Number(derece));
        dereceDonusum.value = "";
        console.log("Derece dönüşümünüz başarılı bir şekilde tamamlandı. (F -> C) : " + sonuc)
        sonucAlani.textContent = "Sonuç (F -> C): " + sonuc;
    }
})

//Kullanıcı input içindeyken Enter tuşuna basınca, en son seçtiği yöne göre ilgili butonu tetikliyoruz.
dereceDonusum.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        console.log("Enter tuşuna basıldı. Son seçilen yön: " + sonSecilenYon);

        if(sonSecilenYon === "C-F"){
            celciusFahrenhaytBtn.click();
        }
        else if(sonSecilenYon === "F-C"){
            fahrenhaytCelciusBtn.click();
        }
        else{
            alert("Lütfen önce bir dönüşüm yönü seçin (C->F veya F->C butonuna tıklayın).");
        }
    }
})