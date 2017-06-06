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
  
  function joiner (...args) { return args.join(""); }
  
  document.querySelector("h1").innerText = joiner(
    "Hello, ",
    prompt("What's your name?"),
    "!! ",
    document.querySelector("h1").innerText,
    "!"
  );
})();
