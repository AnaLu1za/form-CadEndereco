# Projeto de validação de e-mail e CPF com JavaScript 

## Índice
* [Introdução](#introdução)
* [Funcionalidades](#funcionalidades)
* [Lógica do código](#lógica-do-código)
* [Técnicas e tecnologias utilizadas](#técnicas-e-tecnologias-utilizadas)
* [Fontes Consultadas](#fontes-consultadas)
* [Autor(a)](#autora)

## Introdução
Este código JavaScript oferece uma funcionalidade completa para consulta de endereços a partir de um CEP (Código de Endereçamento Postal) brasileiro, utilizando a API do ViaCEP. Ele automatiza o processo de preenchimento de um formulário com as informações obtidas da API, proporcionando uma experiência mais fluida para o usuário.

![cep](/img/cep.gif)
<br>

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

- CEP não encontrado: Se a propriedade erro estiver presente no objeto JSON, significa que o CEP não foi encontrado e uma mensagem de alerta é exibida para o usuário.
- CEP encontrado: Caso contrário, as informações do endereço (logradouro, bairro, localidade e UF) são extraídas do objeto JSON e preenchidas nos campos correspondentes do formulário.

<br>


# Lógica do código
## Função limparFormulario
![limparFormulario](img/limparFormulario.png)
``'use strict';``: Essa linha ativa o modo restrito do JavaScript, tornando o código mais seguro e evitando erros comuns.
<br>

``const limparFormulario = () => { ... }``:
- ``const:`` Declara uma constante chamada limparFormulario.
- ``= () => { ... }``: Define uma função anônima (arrow function) que será atribuída à constante.

<br>

``document.getElementById('logradouro').value= '';``:
- ``document.getElementById('logradouro')``: Seleciona o elemento HTML com o ID 'logradouro' (provavelmente um input).
- ``.value = '';``: Atribui uma string vazia ao valor desse elemento, limpando o campo.
As outras linhas fazem o mesmo para os elementos 'bairro', 'localidade' e 'uf'.

## Validação de CEP 
![validação de cep](img/validação%20de%20cep.png)
``const eNumero = (numero) => /^[0-9]+$/.test(numero);``: Verifica se uma string contém apenas números.
- ``^ e $``: Esses caracteres garantem que a expressão regular corresponda à string inteira, do início ao fim.
- ``[0-9]+``: Essa parte da expressão define um conjunto de caracteres que vão de 0 a 9 e o quantificador ``+`` indica que pode haver um ou mais desses dígitos.
- ``.test(numero)``: O método ``test()`` da expressão regular é utilizado para verificar se a string ``numero`` corresponde ao padrão definido. Retorna ``true`` se corresponder e ``false`` caso contrário.

<br>

``const cepValido = (cep) => cep.length == 8 && eNumero(cep);``:  Verifica se um CEP é válido, considerando o tamanho e se contém apenas números.
- ``cep.length == 8:`` Verifica se o comprimento da string ``cep`` é exatamente 8 caracteres, que é o tamanho padrão de um CEP no Brasil.
- ``eNumero(cep):`` Chama a função ``eNumero`` para verificar se a string ``cep`` contém apenas números.
- ``&&:`` O operador lógico ``&&`` (e) garante que ambas as condições sejam verdadeiras para que a função ``cepValido`` retorne ``true``.

## Função preencherFormulario
![preencherFormulario](img/preencher%20formulario.png)

``const preencherFormulario = (endereco) => {:``
- ``const:`` Declara a função como constante, ou seja, ela não pode ser reatribuída.
- ``preencherFormulario:`` Nome da função, descrevendo claramente sua finalidade.
- ``(endereco):`` Define um parâmetro chamado endereco que receberá o objeto contendo as informações do endereço.
<br>

``document.getElementById('logradouro').value = endereco.logradouro;:``
- ``document.getElementById('logradouro'):`` Seleciona o elemento HTML com o ID 'logradouro' (geralmente um input text).
- ``.value = endereco.logradouro;:`` Atribui o valor da propriedade logradouro do objeto endereco ao atributo value do elemento HTML, preenchendo o campo com o logradouro.
<br>

``document.getElementById('bairro').value = endereco.bairro;:`` Funciona de forma similar ao exemplo anterior, preenchendo o campo 'bairro' com o valor correspondente do objeto endereco.
<br>

``document.getElementById('localidade').value = endereco.localidade;:`` Preenche o campo 'localidade' (cidade) com o valor correspondente do objeto endereco.
<br>

``document.getElementById('uf').value = endereco.uf;:`` Preenche o campo 'uf' (estado) com o valor correspondente do objeto endereco.

## Função pesquisarCep
![](img/consumo%20de%20api.png)
<br>

A função ``pesquisarCep`` tem como objetivo principal consumir a API do ViaCEP para obter informações de um endereço a partir de um CEP (Código de Endereçamento Postal) digitado pelo usuário. Após obter os dados, ela preenche automaticamente um formulário HTML com as informações do endereço.

``limparFormulario();:``
- Chama uma função (não mostrada no código) que limpa os campos do formulário antes de realizar uma nova pesquisa. Isso evita que dados de pesquisas anteriores permaneçam nos campos.
<br>

``const url =http://viacep.com.br/ws/${cep.value}/json/;:``
- Constrói a URL completa para a requisição à API do ViaCEP. A parte ``cep.value`` é substituída pelo valor do CEP digitado pelo usuário. A API retorna os dados no formato JSON.
<br>

``if (cepValido(cep.value)):``
- Chama a função ``cepValido`` (também não mostrada) para verificar se o CEP digitado está no formato correto (8 dígitos numéricos).
<br>

``const dados = await fetch(url);:``
- Utiliza a função ``fetch`` para fazer uma requisição HTTP à URL construída anteriormente. A palavra-chave ``await`` indica que a execução da função será pausada até que a promessa retornada por ``fetch`` seja resolvida (ou seja, até que a resposta da API seja recebida).
<br>

``const addres = await dados.json();:``
- Converte a resposta da API, que está em formato JSON, para um objeto JavaScript. O objeto ``addres`` conterá as informações do endereço, como logradouro, bairro, cidade, etc.
<br>

``if(addres.hasOwnProperty('erro')):``
- Verifica se o objeto ``addres`` possui uma propriedade chamada ``erro``. Se sim, significa que o CEP não foi encontrado na base de dados do ViaCEP.

``preencherFormulario(addres);:``
- Chama a função ``preencherFormulario`` (já explicada anteriormente) para preencher os campos do formulário com as informações do endereço contidas no objeto ``addres``.

![](img/executa%20a%20ação.png)

Este código JavaScript estabelece uma conexão entre o campo de entrada do CEP (com o ID 'cep') e a função pesquisarCep. 
<br>

``document.getElementById('cep'):``
- Essa parte do código seleciona o elemento HTML que possui o ID "cep". Normalmente, este elemento seria um campo de entrada (input) onde o usuário digita o CEP.
<br>

``.addEventListener('focusout', pesquisarCep):``
- ``.addEventListener():`` Este método é utilizado para adicionar um "ouvinte de eventos" a um elemento HTML. Quando um evento específico ocorre nesse elemento, a função associada é executada.
- ``'focusout':`` Este é o evento que estamos monitorando. O evento focusout ocorre quando um elemento perde o foco, ou seja, quando o usuário clica fora do campo de entrada do CEP.
- ``pesquisarCep:`` É o nome da função que será executada quando o evento focusout ocorrer. Nessa função, como vimos anteriormente, a API do ViaCEP é consultada para obter as informações do endereço e preencher o formulário.
<br>

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