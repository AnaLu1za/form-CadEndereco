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

// VERIFICA O TAMANHO DO CEP
const cepValido = (cep) => cep.length == 8 &&
eNumero(cep);

// FUNÇÃO PARA PREENCHER CAMPOS RELACIONADOS AO CEP
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;//COLOCA O VALOR DE LOGRADOURO DA API DENTRO DO CAMPO LOGRADOURO DO FORMULARIO
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}