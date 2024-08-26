let desplazamiento = 3;

function copiarAlPortapapeles(texto) {
    const tempInput = document.createElement('input');
    tempInput.value = texto;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
}

function encriptar() {
    
    const textoOriginal = document.getElementById('TextoCripto').value;
    let textoCifrado = '';
    if(textoOriginal==""){
        alert('Ingresa algo');
            return;
    }

    for (let i = 0; i < textoOriginal.length; i++) {
        let char = textoOriginal.charCodeAt(i);

        if (char >= 97 && char <= 122) {
            char = ((char - 97 + desplazamiento) % 26) + 97;
            textoCifrado += String.fromCharCode(char);
        } else {
            alert('Solo se permiten letras minúsculas.');
            return;
        }
    }

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<textarea class="textosalida" col="32" rows="13">${textoCifrado}</textarea>
    <button class="btn-copiar" id="copiarBtn">Copiar</button>`;
    const copiarBtn = document.getElementById('copiarBtn');
    copiarBtn.addEventListener('click', function() {
        copiarAlPortapapeles(textoCifrado);
    });
}
function desencriptar() {
    const textoCifrado = document.getElementById('TextoCripto').value;
    let textoOriginal = '';
    
    if (textoCifrado === "") {
        alert('Ingresa algo');
        return;
    }

    for (let i = 0; i < textoCifrado.length; i++) {
        let char = textoCifrado.charCodeAt(i);

        if (char >= 97 && char <= 122) {
            char = ((char - 97 - desplazamiento + 26) % 26) + 97;
            textoOriginal += String.fromCharCode(char);
        } else {
            alert('Solo se permiten letras minúsculas.');
            return;
        }
    }

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<textarea class="textosalida" col="32" rows="13">${textoOriginal}</textarea>
    <button class="btn-copiar" id="copiarBtn">Copiar</button>`;
    
    const copiarBtn = document.getElementById('copiarBtn');
    copiarBtn.addEventListener('click', function() {
        copiarAlPortapapeles(textoOriginal);
    });
}



