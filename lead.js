const PDFDocument = require("pdfkit");
const nodemailer = require("nodemailer");

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    },
    body: JSON.stringify(body)
  };
}

function labelFor(key) {
  const labels = {
    email: "E-Mail",
    Systemtyp: "Systemtyp",
    Fahrzeuggroesse: "Fahrzeuggröße",
    Tagesbedarf_Ah: "Tagesbedarf Ah",
    Tagesbedarf_Wh: "Tagesbedarf Wh",
    Empfohlene_Station: "Empfohlene Powerstation",
    Empfohlene_Solartasche: "Empfohlene Solartasche",
    Empfohlene_Batterie: "Empfohlene Batterie",
    Empfohlene_Solar: "Empfohlene Solarleistung",
    Batterietyp: "Batterietyp",
    Schaltplan_PDF: "Schaltplan PDF"
  };
  return labels[key] || key.replace(/_/g, " ");
}

function productItems(data) {
  const items = [];
  for (let i = 1; i <= 12; i += 1) {
    const title = data[`Produkt_${i}`];
    const link = data[`Produktlink_${i}`];
    if (title) items.push({ title, link });
  }
  return items;
}

function writeLine(doc, label, value) {
  if (!value) return;
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#0d2b35")
    .text(`${label}: `, { continued: true });
  doc
    .font("Helvetica")
    .fillColor("#1a2820")
    .text(String(value));
}

function createPdf(data) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    const doc = new PDFDocument({ size: "A4", margin: 48 });

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc
      .font("Helvetica-Bold")
      .fontSize(24)
      .fillColor("#0d2b35")
      .text("CamperVolt Auswertung");

    doc.moveDown(0.5);
    doc
      .font("Helvetica")
      .fontSize(11)
      .fillColor("#5a6e66")
      .text("Deine Konfiguration, Komponenten-Vorschau und Hinweise fuer den Detailplan.");

    doc.moveDown(1.2);
    doc.font("Helvetica-Bold").fontSize(15).fillColor("#0d2b35").text("Systemempfehlung");
    doc.moveDown(0.4);

    [
      "email",
      "Systemtyp",
      "Fahrzeuggroesse",
      "Tagesbedarf_Ah",
      "Tagesbedarf_Wh",
      "Empfohlene_Station",
      "Empfohlene_Solartasche",
      "Empfohlene_Batterie",
      "Empfohlene_Solar",
      "Batterietyp",
      "Schaltplan_PDF"
    ].forEach((key) => writeLine(doc, labelFor(key), data[key]));

    const products = productItems(data);
    if (products.length) {
      doc.moveDown(1.2);
      doc.font("Helvetica-Bold").fontSize(15).fillColor("#0d2b35").text("Kaufliste und Produktbeispiele");
      doc.moveDown(0.4);
      products.forEach((item, index) => {
        doc.font("Helvetica-Bold").fontSize(10).fillColor("#1a2820").text(`${index + 1}. ${item.title}`);
        if (item.link) {
          doc.font("Helvetica").fontSize(8).fillColor("#e8703a").text(item.link, { link: item.link });
        }
        doc.moveDown(0.45);
      });
    }

    doc.moveDown(1);
    doc.font("Helvetica-Bold").fontSize(15).fillColor("#0d2b35").text("Wichtiger Hinweis");
    doc.moveDown(0.3);
    doc
      .font("Helvetica")
      .fontSize(10)
      .fillColor("#1a2820")
      .text(
        "Kabelquerschnitte, Sicherungen und Einbaupositionen muessen final zur realen Leitungslaenge, zum Montageort und zu den Herstellerdaten passen. Der optionale Schaltplan ist fuer diesen Detail-Schritt gedacht."
      );

    doc.end();
  });
}

function mailConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.SMTP_FROM
  );
}

async function sendMail(data, pdfBuffer) {
  if (!mailConfigured()) return false;

  const recipient = String(data.email || "").trim();
  if (!recipient) return false;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const wantsPlan = data.Schaltplan_PDF === "angefragt";
  const text = [
    "Hey,",
    "",
    "anbei findest du deine CamperVolt Auswertung als PDF.",
    "",
    "Enthalten sind deine Systemempfehlung, Produktbeispiele und die vorbereitete Kaufliste.",
    wantsPlan ? "" : null,
    wantsPlan ? "Du hast außerdem Interesse am Schaltplan-PDF markiert. Antworte einfach auf diese Mail, dann kann daraus ein bezahlter Detailplan gemacht werden." : null,
    "",
    "Viele Grüße",
    "CamperVolt"
  ].filter((line) => line !== null).join("\n");

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: recipient,
    bcc: process.env.LEAD_COPY_TO || process.env.SMTP_FROM,
    subject: process.env.MAIL_SUBJECT || "Deine CamperVolt Auswertung",
    text,
    attachments: [
      {
        filename: "CamperVolt-Auswertung.pdf",
        content: pdfBuffer,
        contentType: "application/pdf"
      }
    ]
  });

  return true;
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(200, { ok: true });
  if (event.httpMethod !== "POST") return json(405, { ok: false, error: "Method not allowed" });

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch (error) {
    return json(400, { ok: false, error: "Ungültige Anfrage." });
  }

  const email = String(data.email || "").trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json(400, { ok: false, error: "Bitte eine gültige E-Mail-Adresse eintragen." });
  }

  try {
    const pdf = await createPdf(data);
    const emailSent = await sendMail(data, pdf);
    return json(200, {
      ok: true,
      emailSent,
      message: emailSent
        ? "PDF wurde erstellt und per E-Mail versendet."
        : "PDF wurde erstellt. Mailversand ist noch nicht konfiguriert."
    });
  } catch (error) {
    console.error(error);
    return json(500, {
      ok: false,
      error: "PDF oder E-Mail konnte nicht erstellt werden."
    });
  }
};
