export function portifolio () {
    const portifolioImg = document.querySelectorAll('.portifolio1-img')
    const portifolio2 = document.querySelectorAll('.portifolio2-titulo')
    
    portifolio2[0].classList.add('ativo')
    
    portifolioImg.forEach((item,index) => {
        item.addEventListener('click',() => portifolioSelecionado(index))
    })
    
    function portifolioSelecionado(index){
        portifolio2.forEach(titulo => titulo.classList.remove('ativo'))
        portifolio2[index].classList.add('ativo')
    
    
    }
}






