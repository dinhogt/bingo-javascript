let numeroSorteado = 0;    
let elemento = document.getElementById(numeroSorteado);
let numerosSorteados = [];
let sorteado = document.getElementById('sorteado');
let ultimo = document.getElementById('ultimo');
let penultimo = document.getElementById('penultimo');
let antepenultimo = document.getElementById('antepenultimo');

function escolher() {
 
    let numeroDigitado = parseInt(document.getElementById('numero').value);
    elemento = document.getElementById(numeroDigitado);    

    if (numeroDigitado == '') {

        alert('Digite ao menos um valor para preencher a cartela!');

    } else {

        if(numerosSorteados.includes(numeroDigitado) == true) {

            alert('Valor já sorteado, digite um número ainda não sorteado!'); } 
            
            else { 
                
                numerosSorteados.push(numeroDigitado);
                elemento.className = 'bola-sorteada';

                if (numeroDigitado < 10) {

                    antepenultimo.textContent = penultimo.textContent;  
                    penultimo.textContent = ultimo.textContent;
                    ultimo.textContent = sorteado.textContent;
                    sorteado.textContent = '0'+numeroDigitado;

                } else {
                   
                    antepenultimo.textContent = penultimo.textContent;  
                    penultimo.textContent = ultimo.textContent;
                    ultimo.textContent = sorteado.textContent;  
                    sorteado.textContent = numeroDigitado;   
                
            }

        }                               
                
    }

}

function sortear() {

    numeroSorteado = Math.floor(Math.random() * (75 - 1) );    
    elemento = document.getElementById(numeroSorteado);

    while (elemento == null) {

        numeroSorteado = Math.floor(Math.random() * (75 - 1) ); 
        elemento = document.getElementById(numeroSorteado); }

        if (numerosSorteados.includes(numeroSorteado)) {

            numeroSorteado = Math.floor(Math.random() * (75 - 1) ); 
            elemento = document.getElementById(numeroSorteado); } 
            
            else {
        
            numerosSorteados.push(numeroSorteado);
            elemento.className = 'bola-sorteada';

            if (numeroSorteado < 10) {

                antepenultimo.textContent = penultimo.textContent;  
                penultimo.textContent = ultimo.textContent;
                ultimo.textContent = sorteado.textContent;
                sorteado.textContent = '0'+numeroSorteado;

            } else {

                antepenultimo.textContent = penultimo.textContent;  
                penultimo.textContent = ultimo.textContent;
                ultimo.textContent = sorteado.textContent;  
                sorteado.textContent = numeroSorteado;   
            
        }

    }

}

function limpar() {

sorteado.textContent = '00';
ultimo.textContent = '00';
penultimo.textContent = '00';
antepenultimo.textContent = '00';
document.getElementById('numero').value = '';
let controlador;

for(let i=0; i < numerosSorteados.length; i++) {

    controlador = document.getElementById(numerosSorteados[i]); 
    controlador.className = 'bola'; }   

    numerosSorteados = '';
    numerosSorteados = [];

}

