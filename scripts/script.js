function calculateWindChill(tempF, windSpeedMPH) {
  return 35.74 + 0.6215 * tempF
       - 35.75 * Math.pow(windSpeedMPH, 0.16)
       + 0.4275 * tempF * Math.pow(windSpeedMPH, 0.16);
}

// Leer los valores desde el HTML
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Aplicar la fórmula solo si temp ≤ 50°F y viento > 3 mph
if (temp <= 50 && wind > 3) {
  const chill = calculateWindChill(temp, wind).toFixed(1);
    document.getElementById("windChill").textContent = `${chill} °F`;
} else {
  document.getElementById("windChill").textContent = "N/A";
}
