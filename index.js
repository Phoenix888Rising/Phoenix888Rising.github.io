//;(function(){
//  let els = document.getElementsByTagName('img'); // locator
//  console.log(els);
  // for, while
//  Array.from(els).forEach(function(el,k){
//    el.addEventListener('click', function(e){
//      e.target.parentNode.removeChild(e.target);
//    });
//  });
//})();

;(function(){
  let els = document.querySelectorAll('img');
  els.forEach(function(el,k){
    el.addEventListener('click', function(e){
      e.target.parentNode.removeChild(e.target);
    });
  });
})();
