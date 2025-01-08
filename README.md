# Rick & Morty Favorite Characters App

## Descrição

Esta é uma aplicação construída com React.js, Next.js e TypeScript, que permite buscar personagens de Rick & Morty pelo nome e salvar seus favoritos. A aplicação também conta com paginação, internacionalização e carregamento lento de módulos.

## Tecnologias Utilizadas

- **Obrigatórias:** React.js, Next.js, TypeScript, RxJS
- **Opcionais:** Tailwind CSS, Chakra UI, Redux, Zustand

## Funcionalidades

- **Buscar Personagem:** Permite buscar um personagem pelo nome, exibindo nome, gênero e foto.
- **Salvar Favorito:** Adiciona o personagem à lista de favoritos.
- **Contador em Tempo Real:** O contador no topo da página é atualizado em tempo real com base nos favoritos.
- **Visualizar Favoritos:** Visualiza a lista de personagens favoritos.
- **Remover Favoritos:** Remove personagens da lista de favoritos.
- **Paginação:** Implementa paginação para a exibição dos personagens.

## Diferenciais

- Utilização de operadores do RxJS para otimizar a busca por nome.
- Internacionalização da aplicação.
- Fonte personalizada do Google Fonts.
- Otimização do uso de componentes para evitar repetições.
- Carregamento lento para os módulos.
- Layout responsivo.

## História do Usuário

1. **Buscar Personagem:** Ao pesquisar um personagem, quero ver seu nome, gênero e foto.
2. **Salvar Favorito:** Ao pesquisar, quero poder adicionar um personagem aos meus favoritos.
3. **Notificação de Não Existência:** Ao buscar por um personagem que não existe, desejo ser informado sobre isso.

## Instruções para Desenvolvimento

### Inicialização do Projeto

```bash
npx create-next-app@latest my-rick-and-morty-app --typescript
cd my-rick-and-morty-app
npm install rxjs redux react-redux
