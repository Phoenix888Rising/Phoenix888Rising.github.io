;(function(){
  let els = document.getElementsByTagName('img');
  console.log(els);
  els.forEach(function(el,k){
    el.addEventListener('click', function(e){
      e.target.parentNode.removeChild(e.target);
    });
  });
})();
