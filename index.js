;(function(){
  let elem = document.getElementsByTagName('img');
  console.log(elem);
  elem.addEventListener('click', function(e){
    e.parentNode.removeChild(e);
  });
})();
