# Projeto de validação de e-mail e CPF com JavaScript 

## Índice
* [Introdução](#introdução)
* [Funcionalidades](#funcionalidades)
* [Lógica do código](#lógica-do-código)
* [Recursos de JavaScript utilizados](#recursos-de-javascript-utilizados)
* [Técnicas e tecnologias utilizadas](#técnicas-e-tecnologias-utilizadas)
* [Fontes Consultadas](#fontes-consultadas)


## Introdução
Este código JavaScript oferece uma funcionalidade completa para consulta de endereços a partir de um CEP (Código de Endereçamento Postal) brasileiro, utilizando a API do ViaCEP. Ele automatiza o processo de preenchimento de um formulário com as informações obtidas da API, proporcionando uma experiência mais fluida para o usuário.

![cep](/img/cep.gif)



![]()

## Funcionalidades
    O código JavaScript apresentado tem como objetivo principal automatizar a busca e preenchimento de informações de endereços a partir de um CEP (Código de Endereçamento Postal) brasileiro, utilizando a API do ViaCEP.


**Interface com o Usuário:**

    - O código interage com o usuário através de um formulário HTML, onde o usuário insere o CEP desejado.
    - Ao sair do campo de CEP (evento focusout), a função pesquisarCep() é acionada.

**Validação do CEP:**

    - A função pesquisarCep() verifica se o CEP inserido possui 8 dígitos numéricos.
    - Caso o CEP seja inválido, uma mensagem de alerta é exibida para o usuário.

**Consulta à API do ViaCEP:**

    - Se o CEP for válido, uma requisição HTTP é feita para a API do ViaCEP, que é um serviço gratuito que fornece informações sobre endereços a partir de CEPs brasileiros.
    - A URL da requisição é construída concatenando a URL base da API com o CEP informado.

**Tratamento da Resposta:**

A resposta da API, que é um objeto JSON, é analisada:

    - **CEP não encontrado:** Se a propriedade erro estiver presente no objeto JSON, significa que o CEP não foi encontrado e uma mensagem de alerta é exibida para o usuário.
    - **CEP encontrado:** Caso contrário, as informações do endereço (logradouro, bairro, localidade e UF) são extraídas do objeto JSON e preenchidas nos campos correspondentes do formulário.

<br>


## Lógica do código
![limparFormulario](/img/limparFormulario.png)
- ``'use strict';:`` Essa linha ativa o modo restrito do JavaScript, tornando o código mais seguro e evitando erros comuns.
<br>

``const limparFormulario = () => { ... }:``
- ``const:`` Declara uma constante chamada limparFormulario.
- ``= () => { ... }:`` Define uma função anônima (arrow function) que será atribuída à constante.

<br>

``document.getElementById('logradouro').value= '';:``
- ``document.getElementById('logradouro'):`` Seleciona o elemento HTML com o ID 'logradouro' (provavelmente um input).
- ``.value = '';:`` Atribui uma string vazia ao valor desse elemento, limpando o campo.
As outras linhas fazem o mesmo para os elementos 'bairro', 'localidade' e 'uf'.

![miau.gif](https://steemitimages.com/DQmZCo76MUSeg8WNYUqr9UMGig3kufJWfENY337KfSbpoJC/miau.gif)

## Recursos de JavaScript utilizados 


![miau.gif](https://steemitimages.com/DQmZCo76MUSeg8WNYUqr9UMGig3kufJWfENY337KfSbpoJC/miau.gif)


## Técnicas e tecnologias utilizadas
* [<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [<code><img height="32" src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS3"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [<code><img height="32" src="https://www.malwarebytes.com/wp-content/uploads/sites/2/2023/01/asset_upload_file97293_255583.jpg" alt="Git"/></code>](https://git-scm.com/)
* [<code><img height="32" src="https://blog.netscandigital.com/wp-content/uploads/2023/07/O-que-e-o-Google-Bard.png" alt="Bard"/></code>](https://bard.google.com/chat?hl=pt)
* [<code><img height="32" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VisualStudio"/></code>](https://code.visualstudio.com/)
* [<code><img height="32" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></code>](https://github.com/)


## Fontes consultadas 
* [Alura - Como escrever um bom README.md](https://www.alura.com.br/artigos/escrever-bom-readme)
* [Bootstrap](https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios)
* [Alura - Tipos de type](https://cursos.alura.com.br/forum/topico-type-do-campo-telefone-104370)
* [Dio](https://www.dio.me/articles/tutorial-criando-um-readme-bonitao-para-o-seu-github)
* [Progamador alternativo - Youtube](https://youtu.be/HJ16WEmOWTw?si=UFvCAtBHbuCc08Hu)
* [Fotos para o subtópico "Técnicas e tecnologias consultadas"](https://github.com/alexandresanlim/Badges4-README.md-Profile)
* [HomeHost](https://www.homehost.com.br/blog/tutoriais/html-buttton/)
* [W3schools](https://www.w3schools.com/js/js_window_location.asp)
* [Site de animações para css](https://storyset.com/search)
* [Paleta de cores para html](https://paletadecolores.online/pt/azul/indigo/)
* [Conversor de MP4 para Gif](https://cloudconvert.com/)
* [Gif divisor de texto](https://steemit.com/pt/@coyotelation/20-divisores-de-texto-em-gif-apenas-copie-e-cole-confira)


## Autor(a)
|  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/140712281?v=4" width=115><br><sub>Ana Santos</sub>](https://github.com/AnaLu1za) |  
| :---: |

[<code><img height="32" src="https://t.ctcdn.com.br/IwwDh-BajTE4ZwE4zuIcvz9Q2ZY=/i490027.jpeg" alt="Linkedin"/></code>](https://www.linkedin.com/in/ana-luiza-santos-a5032a2a2/)