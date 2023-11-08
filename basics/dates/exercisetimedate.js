const now = new Date();

function showDate() {
    let showdate = document.getElementById('date');
    let localdate = now.toLocaleDateString();
    console.log(localdate);
    showdate.innerHTML = localdate;

}
function showTime() {
    let showtime = document.getElementById('time');
    let localtime = now.toLocaleTimeString();
    console.log(localtime);
    showtime.innerHTML = localtime;
}