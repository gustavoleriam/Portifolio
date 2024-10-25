const seta = document.querySelector('.seta')
const scrollAltura = 450
export function setaScroll (){

console.log(scrollY)

if(window.scrollY > scrollAltura){
   
  seta.classList.add('ativo')
}

else {
    seta.classList.remove('ativo')
}

    
}



window.addEventListener('scroll',setaScroll)


seta.addEventListener('click', ()=> {
    window.document.body.style.scrollBehavior = 'smooth'
    window.scrollTo({ top: 0, behavior: 'smooth' })})