# desafio

Desafio: Aplicação de Personagens Favoritos de Rick & Morty
Tecnologias
Obrigatórias: React.js, Next.js, TypeScript, RxJS
Opcionais: Tailwind CSS, Chakra UI, Redux, Zustand
Requisitos
Layout:

Seguir o protótipo disponível (use o link do Figma fornecido).
Funcionalidades:

Buscar um personagem pelo nome.
Exibir informações mínimas (nome, gênero e foto) sobre o(s) personagem(ns).
Permitir ao usuário salvar um personagem na lista de favoritos.
O contador no topo da página deve ser atualizado em tempo real com base nos favoritos.
Visualizar a lista de personagens favoritos.
Remover personagens da lista de favoritos.
Implementar paginação (scroll infinito ou outra solução conforme a preferência).
Diferenciais:

Utilize operadores do RxJS para otimizar a busca por nome, assim evitando chamadas desnecessárias à API.
Adicione internacionalização à aplicação.
Inclua uma fonte personalizada do Google Fonts.
Otimize o uso de componentes (evite muita repetição).
Implemente carregamento lento para os módulos.
Assegure que o layout seja responsivo.
Faça o deploy da aplicação.
Adicione funcionalidades criativas conforme o seu critério.
Histórias de Usuário
Buscar Personagem: Ao pesquisar um personagem, quero ver seu nome, gênero e foto.
Salvar Favorito: Ao pesquisar, quero poder adicionar um personagem aos meus favoritos.
Notificação de Não Existência: Ao buscar por um personagem que não existe, desejo ser informado sobre isso.
Instruções para Desenvolvimento
Inicialização do Projeto:

Crie um novo projeto Next.js usando TypeScript.
Instale as dependências necessárias.
Estrutura do Projeto:

Organize o projeto de acordo com os componentes, páginas e serviços.
Configure a API para acessar os dados dos personagens.
Implementação:

Utilize hooks para gerenciar estados e efeitos, implementando o uso de RxJS conforme necessário.
Utilize context ou uma biblioteca de gerenciamento de estado (Redux, Zustand) para os favoritos.
Configure as chamadas à API para a busca de personagens e a manipulação da lista de favoritos.
Deploy:

Após completar o desenvolvimento, faça o deploy da aplicação em uma plataforma como Vercel ou Netlify e compartilhe o link.
Documentação:

Inclua um arquivo README.md com instruções de como rodar a aplicação localmente, incluindo qualquer configuração necessária.
Exemplo de Commands
bash
Copy
npx create-next-app@latest my-rick-and-morty-app --typescript
cd my-rick-and-morty-app
npm install rxjs redux react-redux
Conclusão
Após implementar todos os requisitos e diferenciais, suba o projeto para um repositório público no GitHub e envie o link para avaliação. Sinta-se à vontade para personalizar a aplicação e incluir quaisquer funcionalidades criativas que você desejar!
