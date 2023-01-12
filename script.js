function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora é ${hora} horas`

if (hora >=6 && hora <=12) {
     img.src = 'manhaweb.png'
     document.body.style.background = '#fccb86'
} else if (hora >= 13 && hora < 18) {
    img.src = 'tardeweb.png'
    document.body.style.background = '#b06836'
} else if (hora >=18 && hora <23) {
    img.src = 'noiteweb.png'
    document.body.style.background = '#2b3f46'
}
    
   



}

