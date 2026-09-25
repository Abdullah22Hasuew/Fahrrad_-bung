const fs = require('fs');

function zeigeFahrradDaten(dateipfad) {
    try {
        const rawData = fs.readFileSync(dateipfad, 'utf-8');
        const fahrraeder = JSON.parse(rawData);

        // Kleine Änderung: Neuer Titel für die Abgabe
        console.log("=== FAHRRAD-DATENBANK (AKTUELLER STAND) ===\n");

        fahrraeder.forEach((fahrrad, index) => {
            // Kleine Änderung: Ausgabe-Format angepasst
            console.log(`[Eintrag ${index + 1}] ID: ${fahrrad.fahrrad_id} - ${fahrrad.typ} (${fahrrad.farbe})`);
            console.log(`Preis: ${fahrrad.stundenpreis} €/Std. | Status: ${fahrrad.status}`);
            console.log("----------------------------------------");
        });

    } catch (error) {
        console.error("Fehler beim Lesen der Datei:", error.message);
    }
}

zeigeFahrradDaten('fahrraeder.json');
const fs = require('fs');
const path = require('path');

// Funktion zum Einlesen der Datei (Part 2)
function readDataset(filePath) {
	try {
		const absolutePath = path.join(__dirname, filePath);
		const rawData = fs.readFileSync(absolutePath, 'utf8');
		return JSON.parse(rawData);
	} catch (error) {
		console.error("Fehler beim Lesen der Datei:", error.message);
		return null;
	}
}

// Funktion zur Anzeige der einzelnen Objekte (Part 3)
function displayDataset(data) {
	if (!data || !Array.isArray(data)) {
		console.log("Keine gültigen Daten vorhanden.");
		return;
	}

	console.log("=== Einzelne Fahrrad-Objekte ===\n");
	data.forEach((item, index) => {
		console.log(`--- Datensatz ${index + 1} ---`);
		console.dir(item, { depth: null, colors: true });
	});
}

// Hauptablauf
const dataPath = 'fahrräder_json';
const bikesData = readDataset(dataPath);

if (bikesData) {
	displayDataset(bikesData);
}
