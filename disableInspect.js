// Disables access to page inspect.
window.onload = function(){
  document.addEventListener("contextmenu", function(obj){
    obj.preventDefault();
  });
  document.addEventListener("keydown", function(obj){
    // ctrl +  shift + i
    if(obj.ctrlKey && obj.shiftKey && obj.keyCode == 73){
      obj.preventDefault();
    }
    // ctrl +  shift + j
    if(obj.ctrlKey && obj.shiftKey && obj.keyCode == 74){
      obj.preventDefault();
    }
    // ctrl +  s
    if(obj.ctrlKey && obj.keyCode == 83){
      obj.preventDefault();
    }
    // ctrl +  u
    if(obj.ctrlKey && obj.keyCode == 85){
      obj.preventDefault();
    }
    // f12
    if(event.keyCode == 123){
      obj.preventDefault();
    }
  });
};
