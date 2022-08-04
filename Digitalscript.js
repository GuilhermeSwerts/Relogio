const hrDigital = document.getElementById("digital-hr");
const mnDigital = document.getElementById("digital-min");
const scDigital = document.getElementById("digital-sec");

const setDigitalClock = () => {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    if (hh < 10) hh = '0' + hh;
    if (mm < 10) hh = '0' + mm;
    if (ss < 10) hh = '0' + ss;

    hrDigital.textContent = hh;
    mnDigital.textContent = mm;
    scDigital.textContent = ss;
}
setInterval(() => setDigitalClock(), 500);

const sectionPointerClock = document.getElementById("pointer-clock");
sectionPointerClock.addEventListener("click", (e) => {
    e.preventDefault();
    sectionPointerClock.classList.add("hidden");
    digitalWatch.classList.remove("hidden");
});