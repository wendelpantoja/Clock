function date () {
    let date = new Date()
    let newDate = new Date(date)

    let showDate = document.getElementById('date')
    let month = date.toLocaleString('default', { month: 'long' }).split("")

    month[0] = month[0].toLocaleUpperCase() // ===== PRIMEIRA LETRA EM MAIÚSCULA =====
    showDate.innerText = `${("0" + newDate.getDate()).slice(-2)} ${month.join('')}`
}

function clock () {
    let date = new Date()

    let seconds = date.getSeconds() / 60;
    let minutes = (seconds + date.getMinutes()) / 60;
    let hour = (minutes + date.getHours()) / 12;

    // ===== MOVIMENTO DOS VETORES =====
    document.getElementById('hour').style.transform = `rotate(${hour * 360}deg)`
    document.getElementById('minutes').style.transform = `rotate(${minutes * 360}deg)`
    document.getElementById('seconds').style.transform = `rotate(${seconds * 360}deg)`
}

function activeDark () {
    const dark = document.getElementById('icon-dark')
    const clean = document.getElementById('icon-clear')
    const body = document.getElementById('body')
    const clock = document.getElementById('clock')
    const testeFont = document.querySelectorAll('.numbers')
    const date = document.getElementById('date')

    dark.addEventListener('click', () => {
        clean.classList.toggle('active')
        dark.classList.toggle('none')
        body.classList.toggle('dark')
        clock.classList.toggle('dark')
        testeFont.forEach(element => {
            element.classList.toggle('dark_font_size')   
        });
        date.classList.toggle('dark_font_size')
    })

    clean.addEventListener('click', () => {
        clean.classList.toggle('active')
        dark.classList.toggle('none')
        body.classList.toggle('dark')
        clock.classList.toggle('dark')
        testeFont.forEach(element => {
            element.classList.toggle('dark_font_size')   
        });
        date.classList.toggle('dark_font_size')
    })
}


activeDark()
date()
setInterval(clock)