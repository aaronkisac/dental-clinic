# Dentaliva — Diş Kliniği HTML Tasarım Şablonu (Elit / Premium sürüm)

dentaliva.com'dan esinlenilmiş, **lacivert + şampanya altın** renkli, zarif serif tipografili
modern klinik şablonu. Gerçek site verileri kullanıldı: hekim fotoğrafları, hizmet görselleri,
iletişim bilgileri ve SSS konuları. Kurulum gerekmez — **`index.html`'e çift tıklayın**.

## Sayfalar

| Dosya | İçerik |
|---|---|
| `index.html` | Hero, hizmetler, hakkımızda, hekimler, galeri, yorumlar, SSS, CTA |
| `hizmetler.html` | 7 tedavi detayı (Hollywood Smile, implant, ortodonti, beyazlatma, zirkonyum, laminate, all-on-four/six) |
| `ekip.html` | Hekim kadrosu (gerçek fotoğraflarla) |
| `iletisim.html` | İletişim bilgileri, harita bağlantısı, randevu formu |

## Özellikler

- **TR / EN** — header'daki düğmeyle anında geçiş, seçim hatırlanır
- **Gerçek veriler** — dentaliva.com'daki hekim fotoğrafları, hizmet görselleri, telefon
  (0 546 455 6 455), e-posta ve çalışma saatleri
- **Elit tasarım** — derin lacivert + altın gradyan, Cormorant Garamond + Montserrat
- SSS akordiyonu, scroll animasyonları, form doğrulama, tam responsive

## Notlar

- Görseller doğrudan dentaliva.com CDN'inden çekilir (internet gerekir).
  Kalıcı kullanım için `img` klasörüne indirip URL'leri değiştirebilirsiniz.
- Uzun metinler birebir kopya değil, aynı bilgiyi veren özgün/kısaltılmış yazımlardır.
- Form demo amaçlıdır; canlıda e-posta/CRM servisine bağlanması gerekir.

## Düzenleme

- **Renkler**: `css/style.css` → `:root` değişkenleri
- **Metinler/çeviriler**: `js/main.js` → `I18N` sözlüğü
- **Telefon/e-posta**: sayfalarda `tel:` / `mailto:` bağlantıları

## Yayınlama (ücretsiz)

Klasörü [Netlify Drop](https://app.netlify.com/drop) veya GitHub + Vercel/Netlify ile
ücretsiz yayınlayabilirsiniz; ek yapılandırma gerekmez.
