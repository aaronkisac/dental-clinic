# Dentaliva Chatbot API

Dentaliva demo sitesinin chatbot otomasyonu tarafından kullanılacak uç noktalar.
Tüm GET uçları GitHub Pages üzerinden yayınlanır ve **CORS açıktır** (`Access-Control-Allow-Origin: *`)
— chatbot'u n8n, Botpress, Make veya tarayıcı içi widget'tan çağırabilirsiniz.

**Base URL:** `https://aaronkisac.github.io/dental-clinic`

## Uç noktalar (GET)

| Uç | Ne döner | Chatbot kullanımı |
|---|---|---|
| `/api/clinic.json` | Klinik bilgileri: telefon, adres, saatler, puan | "Telefonunuz ne?", "Pazar açık mısınız?" gibi sorular |
| `/api/services.json` | 7 tedavi (id, TR/EN ad-açıklama, süre, etiket, görsel) | Hizmet listeleme, tedavi önerisi, menü butonları |
| `/api/doctors.json` | 4 hekim (ad, uzmanlık, foto, puan) | "Hekimleriniz kim?" soruları |
| `/api/faq.json` | 5 SSS (TR/EN soru-yanıt) | Bilgi kartları / hızlı yanıtlar |
| `/api/slots.json` | 7 günlük demo müsait saatler (30 dk slot) | Randevu akışında tarih/saat quick-reply üretimi |

### Örnek istek

```bash
curl https://aaronkisac.github.io/dental-clinic/api/services.json
```

Tüm dosyalar `{"updated": "...", "count": N, ...}` zarfıyla döner; dil alanları
`name.tr` / `name.en` biçimindedir — chatbot dil seçimine göre okur.

## Randevu oluşturma (POST)

GitHub Pages statiktir; POST edilemez. İki seçenek:

1. **Demo (kurulum yok):** Chatbot randevu akışını bitirirken doğrulamayı kendisi yapar
   ve `api/appointments/demo-response.json` içeriğini sabit yanıt olarak kullanır.
   İstek gövdesinin sözleşmesi: `api/appointments/schema.json`
   (zorunlu alanlar: `full_name`, `phone`, `service_id`).

2. **Gerçek uç (ücretsiz):** `serverless/appointments.js` Netlify Functions
   formatındadır. Klasörü Netlify'a bağlayıp fonksiyon dizini olarak `serverless`
   seçin → `https://<site>.netlify.app/api/appointments` adresi hazır.
   Doğrulama yapar, `201` + booking kimliği döner. `DEMO_MODE=false` ortam
   değişkeniyle canlı moda geçer; kayıt hedefi (Sheets webhook / e-posta) kodda
   işaretli yerdedir.

### Örnek POST gövdesi

```json
{
  "full_name": "Ayşe Yılmaz",
  "phone": "+905321112233",
  "email": "ayse@ornek.com",
  "service_id": "implant",
  "preferred_date": "2026-09-22",
  "preferred_slot": "10:30",
  "source": "chatbot",
  "language": "tr"
}
```

### Yanıt (201)

```json
{
  "ok": true,
  "demo": true,
  "booking": { "id": "RND-20260920-A1B2", "status": "pending_confirmation", "...": "..." },
  "message": { "tr": "Randevu talebiniz alındı...", "en": "Your request has been received..." }
}
```

Hata durumları: `400 invalid_json`, `405 method_not_allowed`,
`422 validation_failed` (+ `fields` alanında alan bazlı hatalar).

## Önerilen chatbot akışı

1. Karşılama → dil seçimi (TR/EN) → `/api/services.json`'dan menü
2. SSS intent'leri → `/api/faq.json` eşleşmeleri
3. Randevu: hizmet seç → `/api/slots.json`'dan 2-3 gün quick-reply →
   ad/telefon topla → POST (veya demo yanıt) → booking id'yi göster
4. Kapanış: `/api/clinic.json`'dan telefon/WhatsApp yönlendirmesi

## Test sayfası

`/api-test.html` tüm GET uçlarını tek ekranda çağırıp yanıtları gösterir —
demo sunumunda uçların çalıştığını kanıtlamak için kullanın.
