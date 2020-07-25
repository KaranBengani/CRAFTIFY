//
// //search bar
// function myFunction() {
//  // document.getElementById('myInput').style.display ="block";
//  var b = document.querySelector('#myUL');
//    "none" == b.style.display ? (b.style.display = "") : (b.style.display = "none");
//  // var box=document.getElementById("myUL");
//  // //Get the input
//  // var inp=document.getElementById("myInput");
//  //
//  // //Check if the user enterred something
//  // if(!inp.value==""){
//  //   //If its the case set the box to visible
//  //   box.style.display="";
//  // }else{
//  //   //Else we want it gone
//  //   box.style.display="none";
//  // }
// var input, filter;
// input = document.getElementsByTagName('li');
// filter = document.getElementById('myInput').value.toUpperCase();
// // Loop through all list items, and hide those who don't match the search query
// for (i = 0; i < input.length; i++) {
//     var currentElem = input[i];
//     var currentElemChild = input[i].children[0]
//     if (currentElemChild.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         currentElem.style.display = "";
//     } else {
//         currentElem.style.display = "none";
//     }
//   }
// }
// document.querySelector('#myInput').addEventListener('keyup', myFunction);
function myFunction(){
  var b = document.querySelector('#myUL');
input = document.getElementById('myInput').value;
  var letters = /^[A-Za-z]+$/;
   if(input.match(letters))
     {
      b.style.display = "block";
     }
   else { b.style.display = "none";}
  var input, filter;
  input = document.getElementsByTagName('li');
  filter = document.getElementById('myInput').value.toUpperCase();
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < input.length; i++) {
    var currentElem = input[i];
    var currentElemChild = input[i].children[0]
    if (currentElemChild.innerHTML.toUpperCase().indexOf(filter) > -1)
      currentElem.style.display = "";
    else
      currentElem.style.display = "none";
  }
}
