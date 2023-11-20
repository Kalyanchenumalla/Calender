let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById('year');
let selectMonth = document.getElementById('month');

let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

let monthAndYear = document.getElementById("monthAndYear");
showCalender(currentMonth, currentYear);

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) %12;
    showCalender(currentMonth, currentYear);
}
function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalender(currentMonth, currentYear);
}
function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalender(currentMonth, currentYear);
}
function showCalender(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tb1 = document.getElementById("calender-body");

    tb1.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;
   
    // selectYear.value = year;
    // selectMonth.value = month;

    let date = 1;
    for(let i=0;i<6;i++) {
        let row = document.createElement("ul");
        for(let j=0;j<7;j++){
            if(i===0 && j< firstDay) {
                let cell = document.createElement("li");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                console.log(row);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }
            else {
                let cell = document.createElement("li");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("color");
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                console.log(cell)
                date++;              
            }
        }
        tb1.appendChild(row);
    }
}