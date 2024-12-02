
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#apresentacao", {  
    speed: 90,
    loop: false
  })
  .type('Olá, me chamo <span class="destaque"> Jonatas</span>.', {delay:900}).break()
  .type('E sou Desenvolvedor <span class="destaque"> Web</span>.', {delay:900})
  .go()

})
