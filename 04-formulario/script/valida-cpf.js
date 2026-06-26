document.addEventListener('DOMContentLoaded', function(){
    // adiciona um evento 

    //Aplicar a mascara de CPF
    var cpfInput = document.getElementById('cpfInput');

    cpfInput.addEventListener('input', function(){

        //Removendo caracteres não numericos
        var cpf = cpfInput.value.replace(/\D/g, '');

        //litar até 11 numeros
        if(cpf.length > 11){
            cpf = cpf.slice(0,11);
        }

        if(cpf.length > 3){
            cpf = cpf.replace(/(\d{3})(\d{3})/,'$1.$2.')
        }

        if(cpf.length > 7){
            cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.');
        }

        if(cpf.length > 11){
            cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3.');
        }

        cpfInput.value = cpf;
    });

    var validarButton = document.getElementById("validarButton");
    validarButton.addEventListener('click', function(){

        var cpf = cpfInput.value;
        document.getElementById("resultado").textContent = "Em construção";
    })
})