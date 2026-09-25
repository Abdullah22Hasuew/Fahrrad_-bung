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
