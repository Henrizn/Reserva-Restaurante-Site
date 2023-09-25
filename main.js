function openReserve() {
    document.getElementById('reserve').classList.remove("closedReserve")
    document.getElementById('reserve').classList.add("openedReserve")
}

function closeReserve() {
    document.getElementById('reserve').classList.remove('openedReserve')
    document.getElementById('reserve').classList.add('closedReserve')
}

function openConfirmReserve() {
    closeReserve()
    document.getElementById('confirmedReserve').classList.remove("closedReserve")
    document.getElementById('confirmedReserve').classList.add("openedReserve")
}

function closeConfirmReserve() {
    document.getElementById('confirmedReserve').classList.remove("openedReserve")
    document.getElementById('confirmedReserve').classList.add("closedReserve")
}

function startReserve() {
    const buttonCloseReserve = document.getElementById('close-reserve')
    const buttonOpenReserve = document.getElementById('open-reserve')
    const buttonMakeReserve = document.getElementById('make-Reserve')
    const buttonCloseConfReserve = document.getElementById('close-ConfReserve')

    buttonCloseReserve.addEventListener("click", closeReserve)
    buttonOpenReserve.addEventListener("click", openReserve)
    buttonMakeReserve.addEventListener("click", reservar)
    buttonCloseConfReserve.addEventListener("click", closeConfirmReserve)
}

function reservar() {
    openConfirmReserve()
    let num = getRandomNum(1000, 2000)
    let letter = getRandomString(1)
    let tdate = new Date(document.getElementById("txtdate"))
    let tsalao = document.getElementById("txtsalao")
    let tpessoas = Number(document.getElementById("txtpessoas"))
    let thora = document.getElementById("txthora")

    let codigo = letter + num
    /* let cod = document.getElementById('cod')
    let dia = document.getElementById('dia')
    let salao = document.getElementById('salao')
    let pessoas = document.getElementById('pessoas')
    let horario = document.getElementById('horario')
    

    dia.innerHTML = `${tdate}`
    salao.innerHTML = `${tsalao}`
    pessoas.innerHTML = `${tpessoas}`
    horario.innerHTML = `${thora}` */
    cod.innerHTML = `#${codigo}`
}

function getRandomNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
} // Essa função gera um número inteiro para o código

function getRandomString(tamanho) {
    var stringAleatoria = ''
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    return stringAleatoria
}

startReserve()