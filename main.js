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
    buttonMakeReserve.addEventListener("click", makeReserve)
    buttonCloseConfReserve.addEventListener("click", closeConfirmReserve)
}

function makeReserve() {
    let tdate = new Date(document.getElementById("txtdate").value).toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    let tsalao = document.getElementById("txtsalao").value
    let tpessoas = Number(document.getElementById("txtpessoas").value)
    let thora = document.getElementById("txthora").value
    let error = document.getElementById('error')

    if (tdate == 'Invalid Date' || tsalao == '' || tpessoas <= 0 || thora == 0) {
        error.innerHTML = `Informações incompletas!`
    } else {
        reservar()
    }
}

function reservar() {
    openConfirmReserve()
    let num = getRandomNum(1000, 2000)
    let letter = getRandomString(1)
    let tdate = new Date(document.getElementById("txtdate").value).toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    let tsalao = document.getElementById("txtsalao").value
    let tpessoas = Number(document.getElementById("txtpessoas").value)
    let thora = document.getElementById("txthora").value

    let codigo = letter + num

    let pdate = document.getElementById('pdate')
    let psalao = document.getElementById('psalao')
    let ppessoas = document.getElementById('ppessoas')
    let phora = document.getElementById('phora')
    

    cod.innerHTML = `#${codigo}`
    pdate.innerHTML = `<strong>Dia:</strong> ${tdate}`
    psalao.innerHTML = `<strong>Local:</strong> ${tsalao}`
    ppessoas.innerHTML = `<strong>Quant. de Pessoas:</strong> ${tpessoas} pessoas` 
    phora.innerHTML = `<strong>Horário:</strong> ${thora}h`
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