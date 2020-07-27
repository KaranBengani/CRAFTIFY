// Get the modal
var modal = document.getElementById('background');
var cart = document.getElementById('cart');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == cart) {
    cart.style.display = "none";
  }
}

// function inshow(){
//     document.getElementById('signin').style.display = "block";
//     document.querySelector('.signup').style.display = "none";
// }

// function upshow(){
//     document.getElementById('signin').style.display = "none";
//     document.querySelector('.signup').style.display = "block";
// }
function update(element){
  var comp= element.title;
  var el = document.getElementById('popupsection');
  if(comp==='post')
  el.src= comp+".html";
  else if(comp=='flyppd')
    el.src= comp+".html";
  else if(comp=='karachi')
    el.src= comp+".html";
  else if(comp=='tea')
    el.src= comp+".html";
  else if(comp=='glint')
    el.src= comp+".html";
  else if(comp=='closet')
    el.src= comp+".html";
  else if(comp=='preserva')
    el.src= comp+".html";
  else if(comp=='mitti')
    el.src= comp+".html";
  else if(comp=='limon')
    el.src= comp+".html";
  else if(comp=='peach')
    el.src= comp+".html";
  else el.src="index.html"
}