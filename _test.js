// Impor fungsi dari boundaries.js
const calculateBoundaries = require('./index');

// Contoh penggunaan:
const centerLatitude = -6.238087662171829;
const centerLongitude = 107.01942823624692;
const radius = 10; // Radius dalam kilometer

const boundaries = calculateBoundaries(centerLatitude, centerLongitude, radius);

// Cek apakah ada error
if (boundaries.error) {
    console.error("Error:", boundaries.error);
} else {
    console.log(boundaries);
}
