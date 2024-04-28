
let numerosSorteados = [];
let sorteado = document.getElementById('sorteado');
let ultimo = document.getElementById('ultimo').textContent;
let penultimo = document.getElementById('penultimo').textContent;
let antepenultimo = document.getElementById('antepenultimo').textContent;

function escolher() {

    let numeroDigitado = document.getElementById('numero').value;
    let elemento = document.getElementById(numeroDigitado);
    console.log(sorteado);
    

    if(numeroDigitado == '' ) {

        alert('Digite ao menos um valor para preencher a cartela!');

    } else {

        if(numerosSorteados.includes(numeroDigitado) == true) {

            alert('Valor já sorteado, digite um número ainda não sorteado!'); } 
            
            else { 
                
                numerosSorteados.push(numeroDigitado);
                elemento.className = 'bola-sorteada';

                if (numeroDigitado < 10) {

                    sorteado.innerHTML = '0'+numeroDigitado;

                } else {

                sorteado.innerHTML = numeroDigitado; }

                console.log(sorteado);                                        
                
            }

    }

}

function sortear() {


}

function limpar() {


}