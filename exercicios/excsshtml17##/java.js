function getChartTypes() {
    const uppercase = document.querySelector('#case').checked;
    const caselow = document.querySelector('#caselow').checked;
    const casen = document.querySelector('#casenumber').checked;
    const casecar = document.querySelector('#casecar').checked;

    const charTypes = []; 
    if (uppercase) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (caselow) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }
    if (casen) {
        charTypes.push('0123456789'); // Corrigindo intervalo de números
    }
    if (casecar) {
        charTypes.push('!@#$%¨&*()_+{`^}?:><|"');
    }

    return charTypes;   
}

function getPasswordSize() {
    const size = parseInt(document.querySelector('#size').value); // Corrigindo acesso ao valor

    if(isNaN(size) || size < 4 || size > 128) {
        alert('Tamanho inválido, digite o número entre 4 e 128');
        return null; // Adicionando retorno nulo em caso de erro
    }

    return size;
}

function randomchartTypes(charTypes) {
    const randomIndex =  Math.floor(Math.random() * charTypes.length);
    const randomString = charTypes[randomIndex];
    const randomCharIndex = Math.floor(Math.random() * randomString.length);

    return randomString[randomCharIndex];
}

function geradorSenha(size, charTypes) {
    let SenhaGerador = '';
    while(SenhaGerador.length < size) {
        SenhaGerador += randomchartTypes(charTypes);
    }

    return SenhaGerador;
}

document.querySelector('#Gerador').addEventListener('click', function() {
    const size = getPasswordSize();
    if (size === null) return; // Verificando se o tamanho é válido
    const charTypes = getChartTypes();

    const SenhaGerador = geradorSenha(size, charTypes);

    const senha_cont = document.querySelector('#senha_cont');
    senha_cont.classList.add('show'); // Adicionando classe para mostrar
    senha_cont.textContent = SenhaGerador;
});
document.querySelector('#Gerador').addEventListener('click', function() {
    const size = getPasswordSize();
    if (size === null) return; // Verificando se o tamanho é válido
    const charTypes = getChartTypes();

    const SenhaGerador = geradorSenha(size, charTypes);

    const senha_cont = document.querySelector('#senha_cont');
    senha_cont.classList.add('show'); // Adicionando classe para mostrar
    senha_cont.textContent = SenhaGerador;

    const copyButton = document.querySelector('#copy');
    copyButton.style.display = 'block'; // Exibindo botão de cópia
    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(SenhaGerador).then(function() {
            alert('Senha copiada para a área de transferência!');
        }, function() {
            alert('Erro ao copiar senha!');
        });
    });
});
