
function openSignup() {
    document.getElementById("signupModal").style.display = "block";
}
window.onclick = function(exit) {
    let modal = document.getElementById("signupModal");
    if (exit.target == modal) {
        modal.style.display = "none";
    }
};
