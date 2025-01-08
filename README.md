# Desafio

## Desafio: Aplicação de Personagens Favoritos de Rick & Morty

## Tecnologias
- **Obrigatórias:** React.js, Next.js, TypeScript, RxJS, Hooks
- **Opcionais:** Tailwind CSS, Chakra UI, Redux, Zustand, React Query


### Layout
- Seguir o protótipo disponível no [Figma](https://www.figma.com/design/c8xS5wew3KBVVY62BS2imT/-internal--%F0%9F%94%93-Teste-t%C3%A9cnico).

### Funcionalidades
- Buscar um personagem pelo nome.
- Exibir informações mínimas (nome, gênero e foto) sobre o(s) personagem(ns).
- Permitir ao usuário salvar um personagem na lista de favoritos.
- O contador no topo da página deve ser atualizado em tempo real com base nos favoritos.
- Visualizar a lista de personagens favoritos.
- Remover personagens da lista de favoritos.


### Requisitos
- Utilize operadores do RxJS para otimizar a busca por nome, assim evitando chamadas desnecessárias à API.
- Inclua uma fonte personalizada do Google Fonts.
- Otimize o uso de componentes (evite muita repetição).
- Assegure que o layout seja responsivo.
- Faça o deploy da aplicação. (Disponibilize o link no readme)
- Suba em um github público e disponibilize o link para o entrevistador

## História do Usuário
- **Buscar Personagem:** Ao pesquisar um personagem, quero ver seu nome, gênero e foto.
- **Salvar Favorito:** Ao pesquisar, quero poder adicionar um personagem aos meus favoritos.
- **Notificação de Não Existência:** Ao buscar por um personagem que não existe, desejo ser informado sobre isso.

## Instruções para Desenvolvimento

### Inicialização do Projeto
```bash
npx create-next-app@latest my-rick-and-morty-app --typescript
cd my-rick-and-morty-app
npm install rxjs redux react-redux
