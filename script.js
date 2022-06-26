
window.addEventListener("DOMContentLoaded",function(evt){
  const main = document.getElementById("main");
  const object = document.getElementById("map-object");
  let object2 = object.contentDocument;

  const svg = object2.getElementsByTagName("*")[2].getElementsByTagName("*");
  console.log(svg);
});
