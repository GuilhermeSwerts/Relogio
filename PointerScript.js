const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");
const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${(hh)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
}
setClock();
setInterval(()=>setClock(),500);

const digitalWatch = document.getElementById("digital-watch");
digitalWatch.addEventListener("click",(e)=>{
    e.preventDefault();
    sectionPointerClock.classList.remove("hidden");
    digitalWatch.classList.add("hidden");
});
