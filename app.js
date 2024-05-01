
let numerosSorteados = [];
let sorteado = document.getElementById('sorteado');
let ultimo = document.getElementById('ultimo');
let penultimo = document.getElementById('penultimo');
let antepenultimo = document.getElementById('antepenultimo');

function escolher() {
 
    let numeroDigitado = parseInt(document.getElementById('numero').value);
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

                    sorteado.textContent = '0'+numeroDigitado;
                    antepenultimo.textContent = penultimo.textContent;  
                    penultimo.textContent = ultimo.textContent;
                    ultimo.textContent = sorteado.textContent;

                } else {

                    sorteado.textContent = numeroDigitado;
                    antepenultimo.textContent = penultimo.textContent;  
                    penultimo.textContent = ultimo.textContent;
                    ultimo.textContent = sorteado.textContent;     
                
            }

        }                               
                
    }

}

function sortear() {

    let numeroSorteado = Math.floor(Math.random() * (75 - 0 + 1) ) + 1;
    
    let elemento = document.getElementById(numeroSorteado);

    if(numerosSorteados.includes(numeroSorteado) == true) {

        numeroSorteado = Math.floor(Math.random() * (75 - 0 + 1) ) + 1; }
        
        else { 
            
            numerosSorteados.push(numeroSorteado);
            elemento.className = 'bola-sorteada';

            if (numeroSorteado < 10) {

                sorteado.textContent = '0'+numeroSorteado;
                antepenultimo.textContent = penultimo.textContent;  
                penultimo.textContent = ultimo.textContent;
                ultimo.textContent = sorteado.textContent;

            } else {

                sorteado.textContent = numeroSorteado;
                antepenultimo.textContent = penultimo.textContent;  
                penultimo.textContent = ultimo.textContent;
                ultimo.textContent = sorteado.textContent;     
            
        }

    }   
    
    console.log(numerosSorteados);

}

function limpar() {

sorteado.textContent = '00';
ultimo.textContent = '00';
penultimo.textContent = '00';
antepenultimo.textContent = '00';
document.getElementById('numero').value = '';

for(let i = 0; i < numerosSorteados.length; i++) {

    let controlador = document.getElementById(numerosSorteados[i]);
    controlador = document.getElementById(numerosSorteados[i]);
    controlador = controlador.className='bola';

    }

    numerosSorteados = '';

    numerosSorteados = [];

}

