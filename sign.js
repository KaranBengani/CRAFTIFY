// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function inshow(){
    document.getElementById('signin').style.display = "block";
    document.querySelector('.signup').style.display = "none";
}

function upshow(){
    document.getElementById('signin').style.display = "none";
    document.querySelector('.signup').style.display = "block";
}