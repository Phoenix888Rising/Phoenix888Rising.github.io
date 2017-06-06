;(function(){
  let elem = document.getElementsByTagName('img')[0];
  console.log(elem);
  elem.addEventListener('click', function(e){
    e.target.parentNode.removeChild(e);
  });
})();
