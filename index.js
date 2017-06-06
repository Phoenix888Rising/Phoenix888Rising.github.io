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
  let els = document.querySelectorAll("img[src='https://media.giphy.com/media/ci0uDcGQtBh0k/giphy.gif']");
  els.forEach(function(el,k){
    el.addEventListener('click', function(e){
      e.target.parentNode.removeChild(e.target);
    });
  });
})();

;(function(){
  let newEl = document.createElement("span");
  let txt = prompt("What's your name?");
  newEl.innerText = `, ${txt}!`;
  let h1 = document.querySelector("h1");
  h1.appendChild(newEl);
})();
