# Matrix Chat Stream 💬🌐

Bem-vindo ao **Matrix Chat Stream**, um projeto React que combina um chat onde as mensagens digitadas pelo usuário caem na tela em estilo "chuva de caracteres" inspirado na matriz, criando uma experiência única e divertida. 🚀

![Matrix Chat Stream Demo](./demo.gif)

## Funcionalidades 🔥

- Digite suas mensagens e veja-as caindo na tela em estilo Matrix.
- Duplo clique na tela para abrir o formulário de entrada.
- As mensagens são salvas e carregadas do Firestore em tempo real.
- Estilo visual inspirado no icônico efeito de chuva de caracteres da série de filmes Matrix.

## Como Usar 📝

1. Clone este repositório para sua máquina local.
2. Instale as dependências usando `npm install`.
3. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Copie as configurações do projeto para `src/firebaseConfig.ts`.
4. Inicie o aplicativo com `npm run dev`.
5. Abra seu navegador em [http://localhost:3000](http://localhost:3000) para ver o aplicativo em ação.

## Estrutura do Projeto 📁

- `src/components/inputForm.tsx`: Componente para entrada de mensagens.
- `src/components/matrixRain.tsx`: Componente que exibe a chuva de caracteres Matrix.
- `src/firebaseConfig.ts`: Configurações do Firebase.
- `src/App.tsx`: Componente principal do aplicativo.
- `src/index.tsx`: Ponto de entrada do aplicativo.

## Tecnologias Utilizadas 🛠️

- [React](https://reactjs.org/): Biblioteca para construção de interfaces de usuário.
- [Firebase](https://firebase.google.com/): Plataforma de desenvolvimento de aplicativos web e móveis.
- [Vite](https://vitejs.dev/): Build tool e bundler rápido e moderno para projetos web.
- [Visual Studio Code](https://code.visualstudio.com/): Editor de código utilizado para desenvolvimento.
- [ChatGPT](https://openai.com/): Modelo de linguagem utilizado para assistência técnica.

## Contribuição e Melhorias ✨

Contribuições são bem-vindas! Se você tiver sugestões de melhorias, correções de bugs ou novas funcionalidades, fique à vontade para abrir uma **issue** ou enviar um **pull request**.

## Licença 📜

Este projeto está licenciado sob a [Licença MIT](./LICENSE).

---

Feito com 💚 por [Daniel Filipe](https://www.linkedin.com/in/daniel-filipe-779b9b18b/).
