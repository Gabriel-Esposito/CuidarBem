function Trocar(id){
    let btns = document.querySelectorAll('.btn')

    let cards = document.querySelectorAll('.card')

    let img1 = document.getElementById('imgExercicos')
    let img2 = document.getElementById('imgVideos')
    let img3 = document.getElementById('imgAlimento')

    cards[0].style.display = 'none'
    cards[1].style.display = 'none'
    cards[2].style.display = 'none'

    cards[id].style.display = 'block'

    btns[0].removeAttribute('id', 'exercicos')
    btns[1].removeAttribute('id', 'videos')
    btns[2].removeAttribute('id', 'alimentacao')

    img1.src = 'exercicio.png'
    img2.src = 'marketing-de-video.png'
    img3.src = 'maca.png'

    if(id == 0){
        btns[0].setAttribute('id', 'exercicos')
        img1.src = 'exercicio (1).png'

    }else if(id == 1){
        btns[1].setAttribute('id', 'videos')
        img2.src = 'marketing-de-video (1).png'

    }else if(id == 2){
        btns[2].setAttribute('id', 'alimentacao')
        img3.src = 'maca (1).png'

    }
}