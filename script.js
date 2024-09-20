'use strict'// ATIVA O MODO RESTRITO

//CODIGO PARA CONSUMO DE API DE VIA CEP
//https://viacep.com.br/

// LIMPAR CONSULTA DO FORM JÁ REALIZADA
const limparFormulario = () => {
    document.getElementById('rua').value= '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
 
// VERIFICA SE O CEP É VÁLIDO
const eNumero = (numero) => /^[0-9]+$/.test(numero);