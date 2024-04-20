(function () {

    let day = document.getElementById("day");
    let year = document.getElementById("year");
    let month = document.getElementById("month");
    let inputDay = document.getElementById("input-day");
    let inputYear = document.getElementById("input-year");
    let inputMonth = document.getElementById("input-month");
    let dayError = document.getElementById("day-error");
    let yearError = document.getElementById("year-error");
    let monthError = document.getElementById("month-error");
    let showDay = document.getElementById("showDay");
    let showYear = document.getElementById("showYear");
    let showMonth = document.getElementById("showMonth");
    let submit = document.getElementById("submitImg");

    submit.addEventListener("click", () => {

        // check the day
        function validDay() {

            if (inputDay.value >= 1 && inputDay.value <= 31) {
                dayError.innerHTML = "";
                dayError.classList.remove("txtColor");
                day.classList.remove("txtColor");
                inputDay.classList.remove("borderColor");

                return true;
            }
            else if (inputDay.value === "" || inputDay.value === null) {
                dayError.innerHTML = "This field is required";
                dayError.classList.add("txtColor");
                day.classList.add("txtColor");
                inputDay.classList.add("borderColor");

                return false;
            }
            else {
                dayError.innerHTML = "Must be a valid day!";
                dayError.classList.add("txtColor");
                day.classList.add("txtColor");
                inputDay.classList.add("borderColor");

                return false;
            }
        }

        validDay();

        // check the month
        function validMonth() {

            if ((inputMonth.value >= 1) && (inputMonth.value <= 12)) {
                monthError.innerHTML = "";
                monthError.classList.remove("txtColor");
                month.classList.remove("txtColor");
                inputMonth.classList.remove("borderColor");

                return true;
            }
            else if (inputMonth.value === "" || inputMonth.value === null) {
                monthError.innerHTML = "This field is required";
                monthError.classList.add("txtColor");
                month.classList.add("txtColor");
                inputMonth.classList.add("borderColor");

                return false;
            }
            else {
                monthError.innerHTML = "Must be a valid month";
                monthError.classList.add("txtColor");
                month.classList.add("txtColor");
                inputMonth.classList.add("borderColor");

                return false;
            }
        }

        validMonth();

        // check the year
        function validYear() {
            let currentYear = new Date().getFullYear();
            let givenYear = parseInt(inputYear.value);

            if (inputYear.value === "" || inputYear.value === null) {
                yearError.innerHTML = "This field is required";
                yearError.classList.add("txtColor");
                year.classList.add("txtColor");
                inputYear.classList.add("borderColor");

                return false;
            }
            else if (isNaN(givenYear) || givenYear > currentYear) {
                yearError.innerHTML = "Must be a valid year";
                yearError.classList.add("txtColor");
                year.classList.add("txtColor");
                inputYear.classList.add("borderColor");

                return false;
            }
            else {
                yearError.innerHTML = " ";
                yearError.classList.remove("txtColor");
                year.classList.remove("txtColor");
                inputYear.classList.remove("borderColor");

                return true;
            }
        }

        validYear();

        // if birthday valid result will show otherwise error will occur
        if (!validDay() || !validMonth() || !validYear()) {
            // alert("problem found")
        }
        else {
            let d1 = inputDay.value;
            let m1 = inputMonth.value;
            let y1 = inputYear.value;

            let today = new Date();

            let d2 = today.getDate();
            let m2 = today.getMonth() + 1;
            let y2 = today.getFullYear();

            console.log(d2, m2, y2)

            let d3, m3, y3;

            y3 = y2 - y1;

            if (m2 >= m1) {
                m3 = m2 - m1;
            } else {
                y3--;
                m3 = 12 + m2 - m1;
            }

            if (d2 >= d1) {
                d3 = d2 - d1;
            } else {
                m3--;
                d3 = getDaysInMonth(y1, m1) + d2 - d1;
            }

            if (m3 < 0) {
                m3 = 11;
                y3--;
            }

            showDay.innerHTML = d3;
            showMonth.innerHTML = m3;
            showYear.innerHTML = y3;

        }

        function getDaysInMonth(year, month) {
            return new Date(year, month, 0).getDate();
        }

    });

})()







