var menu = document.querySelector(".menu")
var drop = document.querySelector(".dropdown")


menu.addEventListener("click", function(){
    if(!drop.classList.contains('active')){
        drop.classList.add('active')
    }else{
        drop.classList.remove('active')
    }
    
});

var card = document.querySelector(".card")
/*card.addEventListener("click", function(){
    if(!card.classList.contains('active')){
        card.classList.add('active')
    }else{
        card.classList.remove('active')
    }
});*/

//scroll trigger animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        return;
      }
      card.classList.remove('active');
    });
  });
  
  observer.observe(document.querySelector('.card'));
