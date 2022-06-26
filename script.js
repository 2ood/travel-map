const visited_list = ["원주시","서귀포시","포항시","횡성군","이천시","강릉시","삼척시","울진군","경주시","북구_3_","제주시","서귀포시","울릉도","독도","창원시","강남구","안양시"];


window.addEventListener("load",function(evt){
  const main = document.getElementById("main");
  const object = document.getElementById("map-object");
  const monitor = document.getElementById("monitor");
  const region_name = document.getElementById("region-name");
  const region_passage = document.getElementById("region-passage");
  let object2 = object.contentDocument;
  const svg = object2.getElementById("Layer_1");

  const paths = [].slice.call(svg.getElementsByTagName("path"));


  paths.forEach(function(path){
    path.addEventListener("click",function(evt){
      const group = path.parentNode;
      region_name.textContent = `${group.id} ${path.id}`;
      region_passage.textContent = `passage`;
    });
  });

  visited_list.forEach(function(id){
    const visited_dom = svg.getElementById(`${id}`);
    visited_dom.classList.add("visited");
  });
});
