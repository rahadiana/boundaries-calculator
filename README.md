
---

# Geographical Boundaries Calculator

This Node.js module calculates geographical boundaries (north, south, east, west) based on a given center point (latitude, longitude) and radius in kilometers.

## Install
   ```bash
   npm i https://github.com/rahadiana/boundaries-calculator
   ```


## Usage

1. **Install Node.js**.
2. Create a file `boundaries.js` with the function provided.
3. Import the function in your script:

   ```javascript
   const calculateBoundaries = require('@rahadiana/boundaries-calculator');
   
   const centerLatitude = -6.238087662171829;
   const centerLongitude = 107.01942823624692;
   const radius = 10; // in kilometers

   const boundaries = calculateBoundaries(centerLatitude, centerLongitude, radius);

   if (boundaries.error) {
       console.error("Error:", boundaries.error);
   } else {
       console.log(boundaries);
   }
   ```

4. **Run** the script:

   ```bash
   node app.js
   ```

## Error Handling

The function validates:
- **Latitude**: Must be between `-90` and `90`.
- **Longitude**: Must be between `-180` and `180`.
- **Radius**: Must be a positive number.

## License

MIT License

--- 

This version keeps the description concise and focused on essential details.