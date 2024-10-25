export function menuMobile (){
    const menuMobile = document.querySelector('.menu-mobile')
    const menuGrande = document.querySelectorAll('header nav ')
    

    menuMobile.addEventListener('click', ()=> {
        menuGrande.forEach(item => {
            item.classList.toggle('ativo')
        })
    })
}








