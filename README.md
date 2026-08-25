# Fokus

<p align="center">
  <img src="./assets/images/logo.png" alt="Logo Fokus" width="180" />
</p>

Aplicativo mobile de produtividade inspirado na técnica Pomodoro, criado com Expo e React Native. O projeto combina um temporizador de foco com uma lista de tarefas persistente, ajudando a organizar o que precisa ser feito e a manter ciclos de concentração, pausas curtas e pausas longas.

## Sobre o projeto

O Fokus foi desenvolvido como um app fictício e sem fins comerciais, com base em estudos da Alura. A aplicação usa navegação por rotas com Expo Router, menu lateral com Drawer Navigator e armazenamento local para manter as tarefas salvas entre sessões.

## Funcionalidades

- Tela inicial com chamada para iniciar o fluxo de produtividade.
- Temporizador Pomodoro com três modos:
  - Foco: 25 minutos.
  - Pausa curta: 5 minutos.
  - Pausa longa: 15 minutos.
- Controle de iniciar e pausar o timer.
- Lista de tarefas com cadastro, edição, conclusão e exclusão.
- Persistência local das tarefas usando AsyncStorage.
- Navegação por menu lateral entre Timer e Lista de tarefas.

## Preview

<p align="center">
  <img src="./assets/images/home.png" alt="Tela inicial do Fokus" width="220" />
  <img src="./assets/images/pomodoro.png" alt="Ilustração do modo foco" width="220" />
</p>

## Tecnologias

- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/)
- [React](https://react.dev/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [React Navigation](https://reactnavigation.org/)

## Requisitos

- Node.js 20.19.x ou superior.
- npm.
- Expo Go no celular ou um emulador Android/iOS configurado.

> O projeto usa Expo SDK 54, que trabalha com React Native 0.81 e React 19.1.

## Como executar

Clone o repositório e instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Depois, escolha uma das opções exibidas no terminal:

- abrir no Expo Go pelo QR Code;
- rodar no emulador Android;
- rodar no simulador iOS;
- abrir a versão web.

Também é possível iniciar diretamente por plataforma:

```bash
npm run android
npm run ios
npm run web
```

## Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor do Expo. |
| `npm run android` | Abre o app no Android. |
| `npm run ios` | Abre o app no iOS. |
| `npm run web` | Abre o app no navegador. |
| `npm run lint` | Executa a verificação de lint do Expo. |

## Estrutura

```text
app/
  _layout.jsx          # Configuração de navegação e provider global
  index.jsx            # Tela inicial
  pomodoro.jsx         # Temporizador Pomodoro
  add-task/            # Cadastro de tarefas
  edit-task/           # Edição de tarefas
  tasks/               # Lista de tarefas

components/
  ActionButton/        # Botões dos modos do timer
  FokusButton/         # Botão principal reutilizável
  Icons/               # Ícones usados na interface
  TaskItem/            # Item da lista de tarefas
  Timer/               # Formatação e exibição do contador
  context/             # Contexto e persistência das tarefas

assets/
  fonts/               # Fontes do projeto
  images/              # Imagens, logos e ícones
```

## Armazenamento local

As tarefas são salvas no dispositivo com a chave `fokus-tasks`, usando `@react-native-async-storage/async-storage`. Isso permite fechar e abrir o app mantendo a lista cadastrada.

## Licença e créditos

Projeto fictício, sem fins comerciais, desenvolvido para fins de estudo.

Base visual e proposta educacional: Alura.
