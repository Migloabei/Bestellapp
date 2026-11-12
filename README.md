# Bestellapp

Eine Bestell-App im Stil von Lieferando, entstanden als Projekt in der Weiterbildung bei der Developer Akademie. Umgesetzt mit HTML, CSS und JavaScript, ohne Frameworks.

## Funktionen

- Speisekarte mit drei Kategorien, die per JavaScript aus einem Array gerendert wird
- Warenkorb: Gerichte hinzufügen, Menge erhöhen und verringern, einzelne Gerichte löschen
- Zwischensumme, Liefergebühr und Gesamtsumme
- Testbestellung mit Bestätigung als Dialog
- Warenkorb bleibt auf dem Desktop beim Scrollen sichtbar
- Responsive bis 320 px Breite, auf kleinen Bildschirmen öffnet sich der Warenkorb als Dialog

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | Grundgerüst der Seite |
| `scripts/db.js` | Gerichte und Kategorien |
| `scripts/template.js` | HTML-Templates |
| `script.js` | Logik für Speisekarte und Warenkorb |
| `style.css`, `styles/` | Layout, Warenkorb und Grundeinstellungen |

## Starten

Repository herunterladen und `index.html` im Browser öffnen, zum Beispiel mit der VS-Code-Erweiterung Live Server.
