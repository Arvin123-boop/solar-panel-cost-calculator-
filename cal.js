function calc() {
    let a = parseFloat(document.getElementById("area").value);
    let e = parseFloat(document.getElementById("eff").value)/100;
    let s = parseFloat(document.getElementById("sun").value);
    let d = parseFloat(document.getElementById("days").value);
    let p = parseFloat(document.getElementById("price").value);

    let power_kw = a * e; 
    let daily_kwh = power_kw * s;
    let yearly_kwh = daily_kwh * d;
    let yearly_savings = yearly_kwh * p;

    document.getElementById("out").innerHTML =
        "Leistung: " + power_kw.toFixed(3) + " kW<br>" +
        "Tägliche Produktion: " + daily_kwh.toFixed(3) + " kWh<br>" +
        "Jährliche Produktion: " + yearly_kwh.toFixed(1) + " kWh<br>" +
        "Jährliche Ersparnis: " + yearly_savings.toFixed(2) + " €";
}

// alert("JS läuft!");