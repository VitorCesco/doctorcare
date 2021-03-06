// String ( Textos )
// Number ( Numeros )
// Boolean ( True | False )

window.addEventListener('scroll', onScroll )

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  // activateMenuAtCurrentSection(services)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2
  
// verificar se a secão passou da linha
// quais dados vou precisar?

// o topo da secão 
const sectionTop = section.offsetTop

// a altura da secão
const sectionHeight = section.offsetHeight

// o topo da secão chegou ou ultrapassou a linha alvo
const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

//informacões dos dados e da lógica
console.log('O topo da secão chegou ou passou da linha?', sectionTopReachOrPassedTargetline)



// verificar se a base está abaixo da linha alvo
// quais dados vou precisar?

// a secão termina onde?
const sectionEndsAt = sectionTop + sectionHeight

// o final da secão passou da linha alvo
const sectionEndPassedTargetline = sectionEndsAt <= targetLine

console.log('O fundo da secão passou da linha?', sectionEndPassedTargetline)

// limites da secão
const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

const sectionId = section.getAttribute('id')
const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

menuElement.classList.remove('active')
if (sectionBoundaries) {
menuElement.classList.add('active')
}

}































function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800
}).reveal(`
 #home,
 #home img,
 #home .stats,
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content`)
