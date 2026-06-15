document.getElementById("calculateBtn").addEventListener("click", () => {

    const elevation =
        Number(document.getElementById("elevation").value);

    const temperature =
        Number(document.getElementById("temperature").value);

    const pressureAltitude =
        Number(document.getElementById("pressureAltitude").value);

    const densityAltitude =
        pressureAltitude +
        (120 * (temperature - 15));

    document.getElementById("result").innerHTML =
        `Estimated Density Altitude: ${densityAltitude.toFixed(0)} ft`;

});
