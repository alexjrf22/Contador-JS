function contar()
{
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.querySelector('#txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivél contar!'
    }else{
        res.innerHTML = 'Contando...'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo deve ser maior que 0') 
            Process.exit(1)
        }

        if (i < f){

            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`  
            }
        
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`  
            }
        }

            res.innerHTML += `\u{1f3c1}`
    }
}

