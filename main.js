const submit = document.querySelector("button");

submit.addEventListener('click', function () {
    // Select the inputs
    const year = document.querySelector("#Year").value;
    const month = document.querySelector("#Month").value;
    const day = document.querySelector("#Day").value;

    // Select the result elements
    const resultYear = document.querySelector(".Year");
    const resultMonth = document.querySelector(".Month");
    const resultDay = document.querySelector(".Days");

    // Select all error messages
    const erD = document.querySelector("#erD");
    const erM = document.querySelector("#erM");
    const erY = document.querySelector("#erY");

    // Clear previous results and errors
    if (resultYear) resultYear.innerText = "--";
    if (resultMonth) resultMonth.innerText = "--";
    if (resultDay) resultDay.innerText = "--";
    if (erD) erD.innerText = "";
    if (erM) erM.innerText = "";
    if (erY) erY.innerText = "";

    // Check if the inputs are valid
    if (!year) {
        document.querySelector(".lYear").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#Year").style.borderColor = "hsl(0, 100%, 67%)";
        if (erY) erY.innerText = "Please enter a valid year";
        return;
    }
    if (!month) {
        document.querySelector(".lMonth").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#Month").style.borderColor = "hsl(0, 100%, 67%)";
        if (erM) erM.innerText = "Please enter a valid month";
        return;
    }
    if (!day) {
        document.querySelector(".lDay").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#Day").style.borderColor = "hsl(0, 100%, 67%)";
        if (erD) erD.innerText = "Please enter a valid day";
        return;
    }

    if (year > new Date().getFullYear()) {
        document.querySelector(".lYear").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#Year").style.borderColor = "hsl(0, 100%, 67%)";
        if (erY) erY.innerText = "Year is in the future";
        return;
    }

    if (month < 1 || month > 12) {
        document.querySelector(".lMonth").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#Month").style.borderColor = "hsl(0, 100%, 67%)";
        if (erM) erM.innerText = "Month is not valid";
        return;
    }

    if (day < 1 || day > 31) {
        document.querySelector(".lDay").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#Day").style.borderColor = "hsl(0, 100%, 67%)";
        if (erD) erD.innerText = "Day is not valid";
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate > today) {
        document.querySelector(".lYear").style.color = "hsl(0, 100%, 67%)";
        document.querySelector("#Year").style.borderColor = "hsl(0, 100%, 67%)";
        if (erY) erY.innerText = "Date is in the future";
        return;
    }

    // Calculate age
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Display the results
    if (resultYear) resultYear.innerText = `${ageYears}`;
    if (resultMonth) resultMonth.innerText = `${ageMonths}`;
    if (resultDay) resultDay.innerText = `${ageDays}`;
});
