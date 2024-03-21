function getChartTypes(){
    const uppercase = document.querySelector('#case').ariaChecked;
    const caselow = document.querySelector('#caselow').ariaChecked;
    const casen = document.querySelector('#casenumber').ariaChecked;
    const casecar = document.querySelector('#casecar').ariaChecked;
    
    const charTypes = []; 
        if (uppercase){
            charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        }
        if (caselow){
            charTypes.push('abcdefghijklmnopqrstuvwxyz')
        }
        if (casen){
            charTypes.push('012345678910')
        }
        if (casecar){
            charTypes.push('!@#$%¨&*()_+{`^}?:><|"')
        }

    return charTypes;   
    
}

function getPasswordSize(){
     if(isNaN(size) || size < 4 || size > 128){
        alert('Tamanho inválido, digite o número entre 4 e 128');
     }
      
    const size = document.querySelector('#size').ariaValueMax;

    return size;

}

function randomchartTypes(charTypes){
    const randomIndex =  Math.floor(Math.random() * charTypes.length);

    return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)];

}

function geradorSenha(size, charTypes){
     let SenhaGerador = '';
     while(SenhaGerador.length < size){
        SenhaGerador += randomchartTypes(charTypes)
     }
    
     return SenhaGerador;
}

document.querySelector('#Gerador').addEventListener('click', function(){
   const size = getPasswordSize();
   const charTypes = getChartTypes();

   const SenhaGerador = geradorSenha(size, charTypes)

    document.querySelector('#senha_cont').classList.add('show');

   document.querySelector('#senha_cont').textContent = SenhaGerador;
    
});