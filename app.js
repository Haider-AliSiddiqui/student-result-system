const fullname = document.getElementById("fullname");
const matricmarks = document.getElementById("matricmarks");

function datasubmit() {
    localStorage.setItem("fullname", JSON.stringify(fullname.value));
    localStorage.setItem("matricmarks", JSON.stringify(matricmarks.value));
    window.location.href = "./result.html";
}