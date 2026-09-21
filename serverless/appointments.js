// Dentaliva — Randevu API (Netlify Functions formatı)
// GitHub Pages statik olduğu için POST burada çalışmaz; bu dosyayı
// Netlify'a (veya Vercel/Cloudflare'e uyarlayarak) deploy edince
// gerçek POST /api/appointments ucu elde edilir.
//
// Netlify deploy: klasörü Netlify'a bağlayın, fonksiyon dizini olarak
// "serverless" seçin → uç: https://<site>.netlify.app/api/appointments
//
// Demo modu: process.env.DEMO_MODE !== "false" iken kayıt yapmaz,
// geçerli bir yanıt döner. Canlıda DEMO_MODE=false yapıp bir hedef
// (ör. Google Sheets webhook / e-posta servisi) ekleyin.

const REQUIRED = ["full_name", "phone", "service_id"];
const SERVICE_IDS = [
  "hollywood-smile", "implant", "ortodonti", "dis-beyazlatma",
  "zirkonyum", "laminate-veneer", "all-on-four-six", "genel-muayene",
];
const PHONE_RE = /^[+0][0-9 ()-]{9,17}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const SLOT_RE = /^\d{2}:\d{2}$/;

const json = (status, body) => ({
  statusCode: status,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "method_not_allowed", hint: "Use POST." });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { ok: false, error: "invalid_json" });
  }

  const errors = {};
  for (const field of REQUIRED) {
    if (!payload[field] || String(payload[field]).trim() === "") errors[field] = "required";
  }
  if (payload.phone && !PHONE_RE.test(String(payload.phone).trim())) errors.phone = "invalid_phone";
  if (payload.service_id && !SERVICE_IDS.includes(payload.service_id)) errors.service_id = "unknown_service";
  if (payload.preferred_date && !DATE_RE.test(payload.preferred_date)) errors.preferred_date = "invalid_date";
  if (payload.preferred_slot && !SLOT_RE.test(payload.preferred_slot)) errors.preferred_slot = "invalid_slot";

  if (Object.keys(errors).length > 0) {
    return json(422, { ok: false, error: "validation_failed", fields: errors });
  }

  const id = "RND-" + new Date().toISOString().slice(0, 10).replace(/-/g, "") +
    "-" + Math.random().toString(36).slice(2, 6).toUpperCase();

  // Canlı kayıt noktası: DEMO_MODE=false iken buraya kendi hedefinizi ekleyin
  // (Google Sheets webhook, e-posta API, CRM vb.).
  const demoMode = process.env.DEMO_MODE !== "false";
  if (!demoMode) {
    // await fetch(process.env.BOOKING_WEBHOOK_URL, { method: "POST", ... })
  }

  return json(201, {
    ok: true,
    demo: demoMode,
    booking: {
      id,
      status: "pending_confirmation",
      created_at: new Date().toISOString(),
      full_name: payload.full_name,
      phone: payload.phone,
      service_id: payload.service_id,
      preferred_date: payload.preferred_date || null,
      preferred_slot: payload.preferred_slot || null,
      source: payload.source || "chatbot",
    },
    message: {
      tr: "Randevu talebiniz alındı. Kliniğimiz en kısa sürede sizi arayarak teyit edecek.",
      en: "Your appointment request has been received. Our clinic will call you shortly to confirm.",
    },
  });
};
