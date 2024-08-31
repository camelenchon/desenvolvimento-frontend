### Criando primeiro projeto com Angular



## Configurações iniciais
    


### Instalação normal [GLOBAL]
    - npm install -g @angular/cli
    - Obs: Pode ser necessaio exercutar o seguinte comando: Set-ExecutionPolicy Unrestriced [rodar pelo POWERSHELL]

### Criação da aplicação a angular
    ng new primeiro-programa-angular --no-standalone

### Executar aplicação
    entrar na pasta da aplicação angular
    ng serve --open  OU ng serve --o

## Single page application(SPA)
    Uma Single page Aplication (aplicativo de página única SPA) é um aplicativo da web ou site que interage com o usuário reescrevendo dinamicamente a página da web atual com novos dados do servidor da web em vez do método padrão de carregar páginas inteiras novas. O objetivo são transições mais rápidas que fazem o site parecer mais com um aplicativo nativo.

# como funciona o app
    O main ts abre o app modules, o app modules, vai renderizar os 3 app.component(é um codigo reutilizavel, que esta em html, css e ts) no index.html(com o app-root)


#
    Um componente em angular sempre terá 3 arquivos sendo: html, css, ts
    Isso pode variar mas em geral são esses 3

### Como criar um componente
    ng generate component nome-componente
ex: ng generate component components/views/home
    ng generate component components/shared/navbar
    ng g c components/views/login