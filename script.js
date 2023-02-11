function gerar(){
    let num = window.document.querySelector('input#n'),
        n = Number(num.value),
        t = window.document.querySelector('textarea#tabuada'),
        lim = window.document.querySelector('input#limit'),
        l = Number(lim.value)
    
        t.innerHTML = ''
        if(lim.value.length ==0){
            for(let c = 0 ; c <= 10 ; c++){
                let n0 = n * c
                t.innerHTML += `${n} X ${c} = ${n0} \n`
            }   
        }else{
            for(let c = 0 ; c<= l ; c++){
                let n0 = n * c
                t.innerHTML += `${n} X ${c} = ${n0} \n`
            }
        }
     
}