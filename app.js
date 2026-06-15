document
.getElementById("calculateBtn")
.addEventListener("click", () => {

    const aircraft =
        document.getElementById("aircraft").value;

    const temperature =
        Number(
            document.getElementById("temperature").value
        );

    const pressureAltitude =
        Number(
            document.getElementById("pressureAltitude").value
        );

    const densityAltitude =
        pressureAltitude +
        (120 * (temperature - 15));

    let condition = "";
    let color = "";

    if (densityAltitude < 3000) {
        condition = "SAFE";
        color = "#22c55e";
    }
    else if (densityAltitude < 6000) {
        condition = "CAUTION";
        color = "#f59e0b";
    }
    else {
        condition = "HIGH RISK";
        color = "#ef4444";
    }

    const result =
        document.getElementById("result");

    result.innerHTML =
        `${densityAltitude.toFixed(0)} ft`;

    result.style.color = color;

    document
        .getElementById("conditionBox")
        .innerHTML =
        `
        Aircraft: ${aircraftDatabase[aircraft].name}<br>
        Condition: ${condition}<br>
        Cruise Speed: ${aircraftDatabase[aircraft].cruiseSpeed} knots
        `;
});
