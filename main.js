let logado = false

function openLogin() {
    if (logado == true) {
        openConfirmLogin()
    } else {
        document.getElementById('login').classList.remove("closedLogin")
        document.getElementById('login').classList.add("openedLogin")
    }
}

function closeLogin() {
    document.getElementById('login').classList.remove("openedLogin")
    document.getElementById('login').classList.add("closedLogin")
}

function openConfirmLogin() {
    closeLogin()
    document.getElementById('confirmedLogin').classList.remove("closedLogin")
    document.getElementById('confirmedLogin').classList.add("openedLogin")
}

function closeConfirmLogin() {
    document.getElementById('confirmedLogin').classList.remove("openedLogin")
    document.getElementById('confirmedLogin').classList.add("closedLogin")
}

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

function startLogin() {
    const buttonCloseLogin = document.getElementById('close-login')
    const buttonOpenLogin = document.getElementById('open-login')
    const buttonMakeLogin = document.getElementById('make-login')
    const buttonCloseConfLogin = document.getElementById('close-ConfLogin')
    const buttonLogout = document.getElementById('logout')

    buttonCloseLogin.addEventListener("click", closeLogin)
    buttonOpenLogin.addEventListener("click", openLogin)
    buttonMakeLogin.addEventListener("click", makeLogin)
    buttonCloseConfLogin.addEventListener("click", closeConfirmLogin)
    buttonLogout.addEventListener("click", logout)
}

function startReserve() {
    const buttonCloseReserve = document.getElementById('close-reserve')
    const buttonOpenReserve = document.getElementById('open-reserve')
    const buttonMakeReserve = document.getElementById('make-reserve')
    const buttonCloseConfReserve = document.getElementById('close-ConfReserve')

    buttonCloseReserve.addEventListener("click", closeReserve)
    buttonOpenReserve.addEventListener("click", openReserve)
    buttonMakeReserve.addEventListener("click", makeReserve)
    buttonCloseConfReserve.addEventListener("click", closeConfirmReserve)
}

function makeLogin() {
    let tuser = document.getElementById('txtuser').value
    let tpass = document.getElementById('txtpass').value
    let error = document.getElementById('errorLogin')

    if (tuser == 0 || tpass == 0) {
        error.innerHTML = `Informações incompletas!`
    } else {
        logado = true
        openConfirmLogin()
        login()
    }
}

function makeReserve() {
    let tdate = new Date(document.getElementById("txtdate").value).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
    let tsalao = document.getElementById("txtsalao").value
    let tpessoas = Number(document.getElementById("txtpessoas").value)
    let thora = document.getElementById("txthora").value
    let error = document.getElementById('error')

    if (tdate == 'Invalid Date' || tsalao == '' || tpessoas <= 0 || thora == 0) {
        error.innerHTML = `Informações incompletas!`
    } else if (logado == false) {
        error.innerHTML = `É necessário fazer login primeiro!`
    } else {
        reservar()
    }
}

function login() {
    let tuser = document.getElementById('txtuser').value
    let twelcome = document.getElementById('pwelcome')
    twelcome.innerHTML = `Bem-vindo(a), ${tuser}`
}

function logout() {
    logado = false
    closeConfirmLogin()
    openLogin()
}

function reservar() {
    openConfirmReserve()
    let num = getRandomNum(1000, 2000)
    let letter = getRandomString(1)
    let tdate = new Date(document.getElementById("txtdate").value).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
    let tsalao = document.getElementById("txtsalao").value
    let tpessoas = Number(document.getElementById("txtpessoas").value)
    let thora = document.getElementById("txthora").value
    let tuser = document.getElementById('txtuser').value

    let codigo = letter + num

    let pdate = document.getElementById('pdate')
    let psalao = document.getElementById('psalao')
    let ppessoas = document.getElementById('ppessoas')
    let phora = document.getElementById('phora')
    let reservante = document.getElementById('reservante')

    cod.innerHTML = `#${codigo}`
    reservante.innerHTML = `<strong>Nome:</strong> ${tuser}`
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
startLogin()