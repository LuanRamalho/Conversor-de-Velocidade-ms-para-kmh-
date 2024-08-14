function converter() {
    const metrosPorSegundo = parseFloat(document.getElementById('metrosPorSegundo').value);
    const quilometrosPorHora = metrosPorSegundo * 3.6;

    document.getElementById('resultado').innerHTML = `${metrosPorSegundo} m/s equivalem a ${quilometrosPorHora.toFixed(2)} km/h`;
}
