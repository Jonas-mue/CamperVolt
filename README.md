# CamperVolt auf Netlify hochladen

Diese Version ist für Netlify vorbereitet. GitHub kann als Code-Ablage dienen, aber GitHub Pages kann keine PDF-/Mail-Funktion ausführen.

## Schnellster Weg

1. Den kompletten Ordner `campervolt` zu GitHub hochladen.
2. In Netlify ein neues Projekt aus diesem GitHub-Repo erstellen.
3. Build settings:
   - Build command: `npm install`
   - Publish directory: `.`
   - Functions directory: `netlify/functions`
4. In Netlify unter `Site configuration > Environment variables` diese Werte eintragen:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - optional: `LEAD_COPY_TO`
   - optional: `MAIL_SUBJECT`

Ohne SMTP-Daten läuft die Website, aber es wird keine E-Mail verschickt. Mit SMTP-Daten erzeugt die Netlify Function ein PDF und sendet es als Anhang an den User.

## Wichtige Dateien

- `index.html`: Website und Rechner
- `netlify/functions/lead.js`: PDF- und Mail-Funktion
- `netlify.toml`: Netlify-Konfiguration
- `package.json`: Abhängigkeiten für PDF und E-Mail

## SMTP-Hinweis

Für Gmail brauchst du ein App-Passwort, nicht dein normales Passwort. Bei IONOS, Strato, All-Inkl usw. nimmst du die SMTP-Daten aus deinem Mailhosting.
