;(function(){
  let elem = document.getElementsByTagName('img')[0];
  console.log(elem);
  elem.addEventListener('click', function(e){
    e.parentNode.removeChild(e);
  });
})();
