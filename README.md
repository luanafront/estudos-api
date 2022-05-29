# Estudos APIs - Sexta

Fiz uma página com intuido de estudar Api e na pagina de hoje foi login. A api que estou usando é [Api de Rede Social Mockada](https://62913677665ea71fe142a512.mockapi.io/api/v1/). 

## Minha integração:

Na minha integração usei os endpoints `/login/` e `/profile/`.


## LOGIN

Consiste em enviar os dados do input de email e senha quando é clicado o botão enviar. Nele eu recebo um token para fazer autenticação e salvo no `localStorage` com chave `"LUANA_TOKEN"`.

## Profile 

O consumo desse endpoint é feito no `useEffect`, sem nada na lista de dependências e é executada a seguinte lógica: 

> __Se__ tiver Token no localStorage com a chave `LUANA_TOKEN`

> È feito um get no `/profile/` para pegar os dados de perfil.

> __Se Não__ , nada é feito.

