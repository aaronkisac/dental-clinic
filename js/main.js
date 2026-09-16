/* ============================================================
   Dentaliva — main.js (Elit sürüm, gerçek site verisi)
   • TR/EN dil değiştirme (data-i18n)
   • Mobil menü
   • Scroll animasyonları
   • SSS akordiyonu
   • Randevu formu doğrulama
   Saf JavaScript — bağımlılık yok.
   ============================================================ */

/* ---------- 1. Çeviri sözlüğü ---------- */
const I18N = {
  tr: {
    /* Marka */
    "brand.tag": "Diş Kliniği",

    /* Navigasyon */
    "nav.home": "Anasayfa",
    "nav.services": "Hizmetler",
    "nav.team": "Hekimlerimiz",
    "nav.contact": "İletişim",
    "nav.appointment": "Randevu",

    /* Hero */
    "hero.kicker": "Bağcılar • İstanbul",
    "hero.title": "Herkesi gülümseten",
    "hero.title.em": "tedaviler",
    "hero.text": "2012'den beri İstanbul'da; implant, zirkonyum, ortodonti, laminate veneer ve diş beyazlatma tedavilerinde güvenilir çözüm ortağınız.",
    "hero.cta1": "Hemen Arayın",
    "hero.cta2": "Hizmetleri Keşfet",
    "hero.stat1v": "2012",
    "hero.stat1l": "Kuruluş",
    "hero.stat2l": "Google Puanı",
    "hero.stat3l": "Açık Saatler",
    "hero.badge1l": "Hasta Değerlendirmesi",
    "hero.badge2l": "Kuruluş",

    /* Hakkımızda */
    "about.kicker": "Kliniğimiz",
    "about.quote": "“Herkesi gülümseten tedaviler.”",
    "about.p1": "Dentaliva Diş Kliniği, İstanbul Bağcılar'da implant, zirkonyum, ortodonti, laminate veneer ve diş beyazlatma tedavileriyle hizmet verir.",
    "about.p2": "Deneyimli hekim kadromuz, modern ekipman ve hasta odaklı yaklaşımıyla her yaş grubuna hitap eder. Dileyen herkesin güvenle gülümseyebilmesi için tedavilerimizi erişilebilir kılarız.",
    "about.f1": "Deneyimli hekim kadrosu",
    "about.f2": "Modern klinik ekipmanı",
    "about.f3": "Her yaş grubuna uygun tedavi",
    "about.f4": "Haftanın 7 günü açık",

    /* Galeri */
    "gal.kicker": "Galeri",
    "gal.title": "Kliniğimizden kareler",

    /* Hizmetler (kart) */
    "services.kicker": "Hizmetlerimiz",
    "services.title": "Gülüşünüz için sunduğumuz",
    "services.title.em": "tedaviler",
    "services.sub": "İmplant tedavisi, ortodonti, zirkonyum, laminate veneer, diş beyazlatma ve daha fazlası.",
    "service.more": "Detaylı bilgi",
    "s1.t": "Hollywood Smile",
    "s1.d": "Estetik planlamayla tasarlanan, yüzünüze uyumlu kusursuz gülüş.",
    "s2.t": "İmplant Tedavisi",
    "s2.d": "Eksik dişler için titanyum destekli, kalıcı ve doğal görünümlü çözüm.",
    "s3.t": "Ortodonti",
    "s3.d": "Tel ve şeffaf plak tedavileriyle her yaşta düzgün diş dizilimi.",
    "s4.t": "Diş Beyazlatma",
    "s4.d": "Ofis ve ev tipi yöntemlerle mineye zarar vermeyen beyazlatma.",
    "s5.t": "Zirkonyum Kaplama",
    "s5.d": "Metal desteksiz, ışığı doğal geçiren estetik kronlar.",
    "s6.t": "Laminate Veneer",
    "s6.d": "Dişleri aşındırmadan uygulanan porselen yaprak kaplamalar.",

    /* Hizmetler sayfası detay */
    "serv.hero.kicker": "Tedavi Alanlarımız",
    "serv.hero.title": "Hizmetler &",
    "serv.hero.title.em": "tedaviler",
    "serv.hero.sub": "Tüm tedavilerimiz modern ekipman ve deneyimli kadroyla, haftanın 7 günü.",
    "sr1.t": "Hollywood Smile",
    "sr1.en": "Smile Design",
    "sr1.d": "Yüz hatlarınıza ve dudak hattınıza göre planlanan estetik gülüş tasarımı; dişlerin formu, rengi ve dizilimi bütüncül bir yaklaşımla yeniden ele alınır.",
    "sr1.tag1": "Estetik Planlama", "sr1.tag2": "Yüze Özel Tasarım", "sr1.tag3": "Doğal Sonuç",
    "sr2.t": "İmplant Tedavisi",
    "sr2.en": "Dental Implants",
    "sr2.d": "Eksik dişlerin yerine titanyum implantlar yerleştirilir; all-on-four ve all-on-six gibi yöntemlerle çenesiz dişlere kalıcı çözüm sunulur.",
    "sr2.tag1": "All-on-Four", "sr2.tag2": "All-on-Six", "sr2.tag3": "Kalıcı Çözüm",
    "sr3.t": "Ortodonti",
    "sr3.en": "Orthodontics",
    "sr3.d": "Çapraşık dişler için tel veya şeffaf plak tedavisi. Tedavi süresi ve yöntemi, durum değerlendirmesi sonrası kişiye özel planlanır.",
    "sr3.tag1": "Tel Tedavisi", "sr3.tag2": "Şeffaf Plak", "sr3.tag3": "Her Yaş",
    "sr4.t": "Diş Beyazlatma",
    "sr4.en": "Whitening",
    "sr4.d": "Ev tipi (hasta tarafından haftalar süren) veya ofis tipi (klinikte ~1 saat) beyazlatma; uygun yöntem muayene sonrası belirlenir.",
    "sr4.tag1": "Ofis Tipi", "sr4.tag2": "Ev Tipi", "sr4.tag3": "Mine Dostu",
    "sr5.t": "Zirkonyum Kaplama"
    ,
    "sr5.en": "Zirconium",
    "sr5.d": "Metal desteksiz, ışığı doğal geçiren ve diş etiyle uyumlu zirkonyum kronlar; estetik bölgede tercih edilen modern çözüm.",
    "sr5.tag1": "Metal Desteksiz", "sr5.tag2": "Doğal Geçirgenlik", "sr5.tag3": "Uzun Ömürlü",
    "sr6.t": "Laminate Veneer",
    "sr6.en": "Laminate Veneer",
    "sr6.d": "Kırık, renk değişimi ve aralıklı dişlerde, minimal aşındırmayla uygulanan ince porselen yapraklar; laminate dişler estetik sonuçlar sunar.",
    "sr6.tag1": "Minimal Aşındırma", "sr6.tag2": "İnce Porselen", "sr6.tag3": "Estetik",
    "sr7.t": "All on Four & All on Six",
    "sr7.en": "Full-Arch",
    "sr7.d": "Hiç dişi olmayan çenelerde, 4 veya 6 implant üzerine sabit protez uygulanarak aynı gün içinde fonksiyonel dişlere kavuşulur.",
    "sr7.tag1": "Aynı Gün Protez", "sr7.tag2": "Sabit Çözüm", "sr7.tag3": "Cerrahi Destekli",

    /* Hekimler */
    "team.kicker": "Hekimlerimiz",
    "team.title": "Gülüşünüzü emanet edeceğiniz",
    "team.title.em": "uzmanlar",
    "team.sub": "Alanında deneyimli, güler yüzlü ve hasta odaklı bir kadro.",
    "team.more": "Tüm ekibi görün →",
    "team.hero.kicker": "Ekibimiz",
    "team.hero.title": "Hekimlerimiz &",
    "team.hero.title.em": "ekibimiz",
    "team.hero.sub": "Dentaliva'nın deneyimli hekim kadrosuyla tanışın.",
    "d1.role": "Diş Hekimi",

    /* Yorumlar */
    "testi.kicker": "Hasta Yorumları",
    "testi.title": "Bize emanet edilen",
    "testi.title.em": "gülüşler",
    "testi.sub": "Google üzerinden doğrulanmış hasta değerlendirmeleri.",
    "t1.text": "Tedavi sürecim baştan sona çok rahat geçti, sonucundan çok memnunum. Herkese gönül rahatlığıyla öneririm.",
    "t1.name": "Merve A.",
    "t1.role": "Zirkonyum Hastası",
    "t2.text": "Kliniğe girişten çıkışa kadar herkes çok ilgiliydi. Randevu saatimde bekletilmeden tedavi oldum.",
    "t2.name": "Burak Y.",
    "t2.role": "İmplant Hastası",
    "t3.text": "Kızımın ortodonti tedavisi harika gidiyor. Hocalarımız her aşamada bilgilendirdi, süreç tamamen sorunsuz.",
    "t3.name": "Selin D.",
    "t3.role": "Veli",

    /* SSS */
    "faq.kicker": "Sıkça Sorulan Sorular",
    "faq.title": "Merak edilenler",
    "faq.sub": "Aklınıza takılan başka bir soru varsa bize yazmaktan çekinmeyin.",
    "q1": "Diş beyazlatma yöntemleri nelerdir?",
    "a1": "Ev tipi (haftalar süren, hasta tarafından uygulanan) ve ofis tipi (klinikte yaklaşık bir saatte tamamlanan) olmak üzere iki ana yöntem vardır; hangisinin size uygun olduğu muayene sonrası belirlenir.",
    "q2": "Diş eti hastalıkları neden oluşur?",
    "a2": "Genetik yatkınlık, hormonal değişimler, yanlış fırçalama ve ağız bakımı eksikliği etkenler arasındadır; kanama, kızarıklık ve şişlik gibi belirtilerde erken dönemde tedavi çoğu zaman cerrahi gerektirmez.",
    "q3": "Diş taşı neden oluşur, nasıl temizlenir?",
    "a3": "Yeterince fırçalanmayan bölgelerde biriken yumuşak plak zamanla sertleşip diş taşına dönüşür. Kliniğimizde ultrasonik cihazlarla ağrısız şekilde temizlenir.",
    "q4": "Ortodontik tedavi hangi yaşlarda uygulanabilir?",
    "a4": "Günümüzde ortodontik tedaviye yaş sınırı yoktur; hem çocuklarda hem yetişkinlerde, durum değerlendirilerek uygun yöntemle uygulanır.",
    "q5": "İmplant üstü kron hangi malzemeden yapılır?",
    "a5": "Kullanılan implant markasına göre zirkonyum veya metal destekli porselen kronlar tercih edilir; estetik bölgede genellikle zirkonyum önerilir.",

    /* CTA */
    "cta.title": "Gülüşünüzü değiştirmeye",
    "cta.title.em": "bugün başlayın",
    "cta.text": "Randevu ve sorularınız için bizi arayın: 0 (546) 455 6 455",
    "cta.btn": "Hemen Arayın",

    /* İletişim */
    "contact.hero.kicker": "Bize Ulaşın",
    "contact.hero.title": "İletişim &",
    "contact.hero.title.em": "randevu",
    "contact.hero.sub": "Randevu ve sorularınız için bize ulaşın.",
    "contact.info.title": "Klinik Bilgileri",
    "contact.address.t": "Adres",
    "contact.address.d": "Bağcılar / İstanbul",
    "contact.phone.t": "Telefon",
    "contact.email.t": "E-posta",
    "contact.hours.t": "Çalışma Saatleri",
    "contact.hours.d": "Pzt – Cmt: 09:00 – 22:00 · Pazar: 10:00 – 20:00",
    "contact.form.title": "Randevu Talebi",
    "contact.form.sub": "Formu doldurun, en kısa sürede size dönüş yapalım.",
    "contact.map.b": "Klinik Konumu",
    "contact.map.sub": "Bağcılar, İstanbul",
    "contact.map.link": "Google Maps'te aç →",

    /* Form */
    "f.name": "Ad Soyad",
    "f.name.ph": "Adınız ve soyadınız",
    "f.phone": "Telefon",
    "f.phone.ph": "0 (5XX) XXX XX XX",
    "f.email": "E-posta",
    "f.email.ph": "ornek@mail.com",
    "f.service": "Hizmet",
    "f.service.ph": "İlgilendiğiniz tedavi",
    "f.opt1": "Hollywood Smile", "f.opt2": "İmplant", "f.opt3": "Ortodonti",
    "f.opt4": "Diş Beyazlatma", "f.opt5": "Zirkonyum", "f.opt6": "Laminate Veneer", "f.opt7": "Diğer",
    "f.date": "Tarih Tercihi",
    "f.message": "Mesajınız",
    "f.message.ph": "Kısa bir not bırakın (isteğe bağlı)",
    "f.submit": "Randevu Talebi Gönder",
    "f.note": "Gönderdiğinizde ekibimiz en kısa sürede sizinle iletişime geçecek. (Demo — canlıda e-posta/CRM bağlanır.)",
    "f.success": "Teşekkürler! Randevu talebiniz alındı; en kısa sürede size dönüş yapacağız.",
    "err.required": "Bu alan zorunludur.",
    "err.email": "Geçerli bir e-posta girin.",
    "err.phone": "Geçerli bir telefon numarası girin.",

    /* Footer */
    "footer.about": "İstanbul Bağcılar'da implant, zirkonyum, ortodonti, laminate veneer ve diş beyazlatma tedavileri.",
    "footer.links": "Keşfet",
    "footer.services": "Hizmetler",
    "footer.contact": "İletişim",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.demo": "Tasarım şablonu.",
  },

  /* ================= ENGLISH ================= */
  en: {
    "brand.tag": "Dental Clinic",

    "nav.home": "Home",
    "nav.services": "Services",
    "nav.team": "Doctors",
    "nav.contact": "Contact",
    "nav.appointment": "Book Now",

    "hero.kicker": "Bagcilar • Istanbul",
    "hero.title": "Treatments that make",
    "hero.title.em": "everyone smile",
    "hero.text": "Since 2012 in Istanbul: trusted care in implants, zirconia, orthodontics, laminate veneers and teeth whitening.",
    "hero.cta1": "Call Now",
    "hero.cta2": "Explore Services",
    "hero.stat1v": "2012",
    "hero.stat1l": "Established",
    "hero.stat2l": "Google Rating",
    "hero.stat3l": "Opening Hours",
    "hero.badge1l": "Patient Rating",
    "hero.badge2l": "Established",

    "about.kicker": "The Clinic",
    "about.quote": "“Treatments that make everyone smile.”",
    "about.p1": "Dentaliva Dental Clinic in Bagcilar, Istanbul offers implants, zirconia, orthodontics, laminate veneers and teeth whitening.",
    "about.p2": "Our experienced dentists, modern equipment and patient-first approach serve every age group — quality care that everyone can access.",
    "about.f1": "Experienced dentists",
    "about.f2": "Modern clinical equipment",
    "about.f3": "Treatments for every age",
    "about.f4": "Open 7 days a week",

    "gal.kicker": "Gallery",
    "gal.title": "Inside our clinic",

    "services.kicker": "Our Services",
    "services.title": "Treatments we offer",
    "services.title.em": "for your smile",
    "services.sub": "Implants, orthodontics, zirconia, laminate veneers, whitening and more.",
    "service.more": "Learn more",
    "s1.t": "Hollywood Smile",
    "s1.d": "A flawless smile designed around your face with aesthetic planning.",
    "s2.t": "Dental Implants",
    "s2.d": "Titanium-supported, lasting and natural-looking solutions for missing teeth.",
    "s3.t": "Orthodontics",
    "s3.d": "Braces and clear aligners for straight teeth at any age.",
    "s4.t": "Teeth Whitening",
    "s4.d": "Enamel-safe whitening with in-office and take-home methods.",
    "s5.t": "Zirconia Crowns",
    "s5.d": "Metal-free crowns with natural light translucency.",
    "s6.t": "Laminate Veneer",
    "s6.d": "Thin porcelain shells applied with minimal preparation.",

    "serv.hero.kicker": "Treatments",
    "serv.hero.title": "Services &",
    "serv.hero.title.em": "treatments",
    "serv.hero.sub": "All treatments with modern equipment, 7 days a week.",
    "sr1.t": "Hollywood Smile",
    "sr1.en": "Smile Design",
    "sr1.d": "Aesthetic smile design planned around your facial features and lip line — shape, shade and alignment revisited holistically.",
    "sr1.tag1": "Aesthetic Planning", "sr1.tag2": "Custom Design", "sr1.tag3": "Natural Result",
    "sr2.t": "Dental Implants",
    "sr2.en": "Implants",
    "sr2.d": "Titanium implants replace missing teeth; all-on-four and all-on-six techniques provide lasting solutions for edentulous jaws.",
    "sr2.tag1": "All-on-Four", "sr2.tag2": "All-on-Six", "sr2.tag3": "Lasting Solution",
    "sr3.t": "Orthodontics",
    "sr3.en": "Orthodontics",
    "sr3.d": "Braces or clear aligners for crowded teeth; method and duration are planned individually after assessment.",
    "sr3.tag1": "Braces", "sr3.tag2": "Clear Aligners", "sr3.tag3": "All Ages",
    "sr4.t": "Teeth Whitening",
    "sr4.en": "Whitening",
    "sr4.d": "Take-home (patient-applied, over weeks) or in-office (~1 hour) whitening; the right method is chosen after examination.",
    "sr4.tag1": "In-Office", "sr4.tag2": "Take-Home", "sr4.tag3": "Enamel-Safe",
    "sr5.t": "Zirconia Crowns",
    "sr5.en": "Zirconium",
    "sr5.d": "Metal-free crowns with natural translucency and gum-friendly compatibility — the modern choice for aesthetic zones.",
    "sr5.tag1": "Metal-Free", "sr5.tag2": "Natural Translucency", "sr5.tag3": "Long-Lasting",
    "sr6.t": "Laminate Veneer",
    "sr6.en": "Veneers",
    "sr6.d": "Thin porcelain laminates for fractured, discoloured or gapped teeth, applied with minimal preparation.",
    "sr6.tag1": "Minimal Prep", "sr6.tag2": "Thin Porcelain", "sr6.tag3": "Aesthetic",
    "sr7.t": "All on Four & All on Six",
    "sr7.en": "Full-Arch",
    "sr7.d": "For jaws without any teeth, a fixed prosthesis on 4 or 6 implants delivers functional teeth — often within the same day.",
    "sr7.tag1": "Same-Day Teeth", "sr7.tag2": "Fixed Solution", "sr7.tag3": "Surgery-Supported",

    "team.kicker": "Our Doctors",
    "team.title": "Experts you can trust",
    "team.title.em": "with your smile",
    "team.sub": "An experienced, friendly, patient-focused team.",
    "team.more": "Meet the full team →",
    "team.hero.kicker": "Our Team",
    "team.hero.title": "Our doctors &",
    "team.hero.title.em": "our team",
    "team.hero.sub": "Meet Dentaliva's experienced dental team.",
    "d1.role": "Dentist",

    "testi.kicker": "Testimonials",
    "testi.title": "Smiles entrusted",
    "testi.title.em": "to us",
    "testi.sub": "Verified patient reviews on Google.",
    "t1.text": "My treatment was comfortable from start to finish and I'm very happy with the result. I recommend it to anyone with confidence.",
    "t1.name": "Merve A.",
    "t1.role": "Zirconia Patient",
    "t2.text": "Everyone was attentive from entry to exit. I was treated right at my appointment time with no waiting.",
    "t2.name": "Burak Y.",
    "t2.role": "Implant Patient",
    "t3.text": "My daughter's orthodontic treatment is going great. The doctors kept us informed at every step — a completely smooth process.",
    "t3.name": "Selin D.",
    "t3.role": "Parent",

    "faq.kicker": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.sub": "If you have another question, just write to us.",
    "q1": "What are the teeth whitening methods?",
    "a1": "There are two main methods: take-home (patient-applied over weeks) and in-office (completed in about an hour at the clinic). The right one for you is decided after examination.",
    "q2": "What causes gum disease?",
    "a2": "Genetic predisposition, hormonal changes, improper brushing and poor oral hygiene are among the causes. With early symptoms like bleeding or swelling, treatment often doesn't require surgery.",
    "q3": "Why does tartar form and how is it removed?",
    "a3": "Soft plaque in under-brushed areas hardens into tartar over time. At our clinic it is removed painlessly with ultrasonic devices.",
    "q4": "At what ages can orthodontic treatment be applied?",
    "a4": "There is no age limit today; it is applied to both children and adults with the appropriate method after assessment.",
    "q5": "What material is used for implant crowns?",
    "a5": "Depending on the implant brand, zirconia or metal-supported porcelain crowns are preferred; zirconia is usually recommended in aesthetic zones.",

    "cta.title": "Start transforming",
    "cta.title.em": "your smile today",
    "cta.text": "For appointments and questions, call us: +90 546 455 6 455",
    "cta.btn": "Call Now",

    "contact.hero.kicker": "Get in Touch",
    "contact.hero.title": "Contact &",
    "contact.hero.title.em": "appointments",
    "contact.hero.sub": "Reach out for appointments and questions.",
    "contact.info.title": "Clinic Details",
    "contact.address.t": "Address",
    "contact.address.d": "Bagcilar / Istanbul",
    "contact.phone.t": "Phone",
    "contact.email.t": "E-mail",
    "contact.hours.t": "Opening Hours",
    "contact.hours.d": "Mon – Sat: 09:00 – 22:00 · Sunday: 10:00 – 20:00",
    "contact.form.title": "Appointment Request",
    "contact.form.sub": "Fill in the form and we'll get back to you shortly.",
    "contact.map.b": "Clinic Location",
    "contact.map.sub": "Bagcilar, Istanbul",
    "contact.map.link": "Open in Google Maps →",

    "f.name": "Full Name",
    "f.name.ph": "Your full name",
    "f.phone": "Phone",
    "f.phone.ph": "+90 5XX XXX XX XX",
    "f.email": "E-mail",
    "f.email.ph": "you@example.com",
    "f.service": "Service",
    "f.service.ph": "Treatment of interest",
    "f.opt1": "Hollywood Smile", "f.opt2": "Implant", "f.opt3": "Orthodontics",
    "f.opt4": "Whitening", "f.opt5": "Zirconia", "f.opt6": "Laminate Veneer", "f.opt7": "Other",
    "f.date": "Preferred Date",
    "f.message": "Your Message",
    "f.message.ph": "Leave us a short note (optional)",
    "f.submit": "Send Request",
    "f.note": "Our team will contact you shortly after you submit. (Demo — connect e-mail/CRM for production.)",
    "f.success": "Thank you! Your request has been received; we'll respond shortly.",
    "err.required": "This field is required.",
    "err.email": "Please enter a valid e-mail.",
    "err.phone": "Please enter a valid phone number.",

    "footer.about": "Implants, zirconia, orthodontics, laminate veneers and whitening in Bagcilar, Istanbul.",
    "footer.links": "Explore",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.demo": "Design template.",
  }
};

/* ---------- 2. Dil yönetimi ---------- */
let currentLang = localStorage.getItem("dentaliva-lang") || "tr";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("dentaliva-lang", lang);
  document.documentElement.lang = lang;
  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  document.querySelectorAll(".lang-toggle button").forEach(btn =>
    btn.classList.toggle("is-active", btn.dataset.lang === lang)
  );
}

document.addEventListener("click", e => {
  const btn = e.target.closest(".lang-toggle button");
  if (btn) applyLang(btn.dataset.lang);
});

/* ---------- 3. Mobil menü ---------- */
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-open");
    mobileMenu.classList.toggle("is-open");
  });
  mobileMenu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      burger.classList.remove("is-open");
      mobileMenu.classList.remove("is-open");
    })
  );
}

/* ---------- 4. Scroll animasyonları ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add("is-visible");
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- 5. SSS akordiyonu ---------- */
document.querySelectorAll(".faq__q").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq__item");
    const answer = item.querySelector(".faq__a");
    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll(".faq__item.is-open").forEach(open => {
      open.classList.remove("is-open");
      open.querySelector(".faq__a").style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add("is-open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

/* ---------- 6. Randevu formu ---------- */
const form = document.getElementById("appointment-form");
if (form) {
  const dict = () => I18N[currentLang];

  const setError = (input, key) => {
    input.classList.add("is-error");
    const msg = input.closest(".field").querySelector(".field-error");
    if (msg) { msg.textContent = dict()[key]; msg.classList.add("is-visible"); }
  };
  const clearError = input => {
    input.classList.remove("is-error");
    const msg = input.closest(".field")?.querySelector(".field-error");
    if (msg) msg.classList.remove("is-visible");
  };

  form.addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;

    const { name, phone, email, service } = form.elements;
    [name, phone, email, service].forEach(clearError);

    if (!name.value.trim())                                     { setError(name, "err.required"); ok = false; }
    if (!/^[+\d][\d\s()-]{7,}$/.test(phone.value.trim()))       { setError(phone, "err.phone"); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { setError(email, "err.email"); ok = false; }
    if (!service.value)                                         { setError(service, "err.required"); ok = false; }

    if (ok) {
      document.querySelector(".form-success").classList.add("is-visible");
      form.reset();
    }
  });

  form.querySelectorAll("input, select, textarea").forEach(el =>
    el.addEventListener("input", () => clearError(el))
  );
}

/* ---------- 7. Yıl ---------- */
document.querySelectorAll(".js-year").forEach(el => (el.textContent = new Date().getFullYear()));

/* ---------- 8. Başlangıç ---------- */
applyLang(currentLang);
