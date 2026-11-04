# Borç Takip — Tanıtım Sayfası

**Ürün sayfası:** https://gururorkun.github.io/borc-takip/

Bu dizin, Borç Takip iOS uygulamasının **herkese açık tanıtım, destek ve gizlilik** sayfalarını barındırır. Uygulamanın özel kaynak kodu burada değildir.

- [Ürün ve özellikler](./)
- [Destek](support.html)
- [Gizlilik politikası](privacy.html)

## Tanıtılan özellikler

- Kredi, kredi kartı, düzenli ve tek seferlik ödeme planları
- Taksit, kısmi ödeme, yaklaşan ve geciken ödeme görünümleri
- Düzenli/tek seferlik gelir planları ve tahsilatlar
- 12 aylık nakit akışı projeksiyonu
- Kart harcaması ve ekstre ödemesinin ayrı kayıtları
- Çevrimdışı yerel çalışma alanı ve kullanıcı kontrollü dışa aktarma/geri yükleme

Tanıtım sayfasındaki finansal tutarlar **temsili örneklerdir**; görsel gerçek bir uygulama ekran görüntüsü değildir.

## Yayın ve gizlilik notları

Bu tanıtım sayfası uygulamanın **App Store'da indirilebilir olduğunu iddia etmez**. Ana sayfadaki “Yakında / Coming soon” etiketi, mağaza yayını doğrulanana kadar korunur. Önceden kullanılan App Store kayıt numarası `6830702159` public mağazada doğrulanmış bir yayın bağlantısı olmadığı için henüz indirme düğmesine dönüştürülmedi.

Uygulama banka hesabına bağlanmaz ve gerçek para transferi yapmaz. iCloud eşitleme/paylaşım yalnızca ayrıca hazırlanıp etkinleştirilen sürümlerde mümkündür; tanıtım sayfası bunu canlı bir özellik gibi sunmaz.

## Tasarım ve bakım

- Ortak tema: [../assets/site.css](../assets/site.css); sayfaya özgü CSS `.borc` sınıfında
- Dil değiştirme: [../assets/language.js](../assets/language.js); `data-tr` ve `data-en`
- Mevcut gerçek uygulama ikonu: `assets/icon.png`
- Duyarlı: masaüstü/tablet/telefon; CSS illüstrasyon, harici font veya JS kütüphanesi gerektirmez

Yayına alınmadan önce her iki dil, mobil boyut, bağlantılar ve gerçek ekran görüntüsü ihtiyacı kontrol edilmelidir.
