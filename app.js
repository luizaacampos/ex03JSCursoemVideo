function contar() {
    var ini = document.getElementById('inicio')
    var fi = document.getElementById('fim')
    var pa = document.getElementById('passo')
    var res = document.getElementById('resultado')
    
    if (ini.value.length == 0 || fi.value.length == 0 || pa.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando...<br>'
        var i = Number(ini.value)
        var f = Number(fi.value)
        var p = Number(pa.value)
        if (p<=0){
            window.alert('Passo inválido! Vou considerar passo = 1!')
            p = 1
        }
        if (i < f) {
            for(var c = i;c <= f;c += p){
                res.innerHTML += `${c} `
            } 
        } else {
            for(var c = i;c >= f;c -= p){
                res.innerHTML += `${c}<br>`
            }
    }
    res.innerHTML += 'Fim!'
    } 
}

