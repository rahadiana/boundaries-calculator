// Fungsi untuk menghitung boundaries berdasarkan titik pusat (latitude, longitude) dan radius dalam kilometer.
function calculateBoundaries(latitude, longitude, radiusInKm) {
    try {
        // Validasi input latitude (harus berada di antara -90 hingga 90)
        if (typeof latitude !== 'number' || latitude < -90 || latitude > 90) {
            return {code:400,message:"Invalid latitude. Latitude must be a number between -90 and 90."};
        }

        // Validasi input longitude (harus berada di antara -180 hingga 180)
        if (typeof longitude !== 'number' || longitude < -180 || longitude > 180) {
            return {code:400,message:"Invalid longitude. Longitude must be a number between -180 and 180."};
        }

        // Validasi radius (harus bilangan positif)
        if (typeof radiusInKm !== 'number' || radiusInKm <= 0) {
            return {code:400,message:"Invalid radius. Radius must be a positive number."};
        }

        const earthRadiusKm = 6371; // Jari-jari bumi dalam kilometer
        const latDegree = 1 / (earthRadiusKm / 360); // 1 derajat lintang dalam km
        const lonDegree = 1 / (earthRadiusKm * Math.cos(latitude * (Math.PI / 180)) / 360); // 1 derajat bujur dalam km

        // Hitung boundaries berdasarkan radius
        let north = latitude + (radiusInKm * latDegree);
        let south = latitude - (radiusInKm * latDegree);
        let east = longitude + (radiusInKm * lonDegree);
        let west = longitude - (radiusInKm * lonDegree);

        // Periksa dan batasi nilai agar tetap berada dalam rentang valid untuk latitude
        if (north > 90) north = 90;  // Tidak bisa lebih dari 90 derajat lintang
        if (south < -90) south = -90;  // Tidak bisa kurang dari -90 derajat lintang

        // Periksa dan batasi nilai agar tetap berada dalam rentang valid untuk longitude
        if (east > 180) east = 180;  // Tidak bisa lebih dari 180 derajat bujur
        if (west < -180) west = -180;  // Tidak bisa kurang dari -180 derajat bujur

        // Kembalikan boundaries yang telah dihitung
        return {
            code: 200,
            data: {
                north,
                south,
                east,
                west,
                input_longitude: longitude,
                input_latitude: latitude,
                input_radius: radiusInKm
            },
            message: "success"
        };

    } catch (error) {
        // Tangkap error dan kembalikan pesan error
        return { error: error.message };
    }
}

// Ekspor fungsi agar bisa digunakan di file lain
module.exports = calculateBoundaries;
