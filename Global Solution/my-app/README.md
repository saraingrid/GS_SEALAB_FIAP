## Nossas soluções

O projeto visa implementar soluções de acessibilidade abrangentes, contemplando os seguintes recursos:

1. Leitor de Tela Adaptável: Permitirá que o usuário selecione partes específicas do texto para leitura por voz, oferecendo tanto cobertura parcial quanto total do conteúdo exibido.

2. Modos de Tema Ajustáveis: Os usuários terão a opção de alternar entre temas claros e escuros. Essa funcionalidade é projetada para melhorar a legibilidade do conteúdo, adaptando-se às preferências individuais de visualização.

3. Suporte em Libras: Para aprimorar a acessibilidade para usuários com deficiência auditiva, será incorporado um recurso de suporte em Língua Brasileira de Sinais (Libras), facilitando a compreensão do conteúdo das páginas durante a navegação.

4. Controle de Fonte e Cor via Teclado: Os usuários poderão ajustar o tamanho e a cor da fonte utilizando simples comandos de teclado, como as setas para cima e para baixo, personalizando a visualização de acordo com suas necessidades.

5. Apresentação Unificada de Dados dos Produtos: Será disponibilizada uma interface singular para apresentação dos dados dos produtos, permitindo que o usuário escolha o formato de aprendizado preferido entre texto, vídeo ou interação com um chatbot, que suporta comandos de texto e voz.

6. Pesquisa Aprimorada na Barra de Navegação: A barra de navegação permitirá pesquisas tanto por texto quanto por voz, simplificando e tornando a navegação mais intuitiva.

7. Fase de Testes e Feedback: Inicialmente, serão desenvolvidos projetos piloto para testar as funcionalidades de acessibilidade. Esses testes serão conduzidos por meio de vídeos tutoriais que ensinam a utilizar as novas funcionalidades do site. Através de relatórios de feedback, coletaremos impressões dos usuários para avaliar a eficácia das soluções implementadas e realizar ajustes conforme necessário.

8. Aumento da fonte usando o teclado

9. Ajuste das cores do background e textos

10. Imagens com a composição do Alt para que o usuário consiga usando sua tecnologiasaber oq ue foi criado e quando a imagem não renderizar, será mais claro o que possui na tela.

11. Login simplificado usando a API do Google

12. Formulário de Descoberta que visa indicar ao cliente qual o melhor produto para sua empresa, de acordo com as informações que ele tabular. Aqui será usando a IA para fazer essa análise.

### Detalhamento da Criação de Componentes ###

A seguir, será detalhada a criação de cada componente, apresentando um descritivo, os requisitos para executar o componente, os benefícios e o conteúdo do arquivo. O objetivo é facilitar o entendimento do projeto e garantir que todos compreendam o que será feito ou criado.

# Home

1. Descrição do componente

Foi composto por um modelo chamado Hero, onde vai mostrar a primeira sessão da página Home.

1.1 Descritivo do script

Este script é um componente de uma página inicial (Home) em um projeto Next.js com TypeScript. Ele inclui funcionalidades para ajustar o tamanho da fonte, animações de entrada e saída, leitura de texto em elementos específicos ao serem clicados, e foco em elementos ao navegar com a tecla TAB.O conteúdo dentro do componente Home inclui um cabeçalho de boas-vindas, um parágrafo de descrição, e um botão "Entre em contato".

1.2 O que é necessário para processar ele, se precisa de instalação de algo e como fazer

Para processar este script, é necessário ter um ambiente de desenvolvimento configurado com Next.js e TypeScript. Além disso, algumas bibliotecas são importadas e utilizadas no script, como React, Next.js, framer-motion e componentes personalizados (TextReader, FocusableComponent, FontSizeAdjusterContainer, FontSizeDecreaserContainer).Para instalar e configurar um ambiente Next.js com TypeScript, você pode seguir a documentação oficial do Next.js: Next.js - Getting Started.Para instalar as dependências necessárias, você pode usar o npm (Node Package Manager) com os seguintes comandos no terminal:

npm install react next
npm install framer-motion

1.3 Quais os benefícios ao utilizar o script que foi criado

1.3.1
O objetivo dele é incluir um cabeçalho de boas-vindas, um parágrafo de descrição, e um botão "Entre em contato". Esses elementos são apresentados de forma dinâmica e interativa, contribuindo para uma experiência de usuário envolvente e personalizada.

1.3.2 Para que esse componente funcione para todos os usuários, foi implementado algumas funcionalidades que são provenientes de outros componentes:

1.3.2.1 Ajuste de Tamanho da Fonte
O script permite que os usuários aumentem ou diminuam o tamanho da fonte da página, proporcionando uma melhor experiência de leitura para diferentes preferências de visualização.

1.3.2.2 Animações de Entrada e Saída
As animações aplicadas aos elementos da página (como transições de opacidade e posição) tornam a experiência de navegação mais agradável e dinâmica.

1.3.2.3 Leitura de Texto ao Clicar
A funcionalidade de leitura de texto ao clicar em um elemento específico pode ser útil para usuários com necessidades de acessibilidade, permitindo que o conteúdo seja ouvido em vez de lido visualmente.

1.3.2.4 Foco em Elementos ao Navegar com a Tecla TAB
O componente FocusableComponent possibilita que os usuários naveguem pelos elementos da página utilizando a tecla TAB, garantindo uma ordem lógica de foco e facilitando a interação com o teclado. Ao mesmo tempo o conteúdo possui leitor de tela embutido, o que atende aos usuários com deficiência visual, auditiva, e que não podem usar o teclado.

# DetailsCompany

2. Descrição do componente
Foi composto por um modelo chamado DetailsCompany, onde vai mostrar detalhes da empresa e produtos. Neste componente temos apenas frases de efeitos e dois botões que direcionam o usuário para a págian de Produtos ou o Formulário de Contato.

2.1 Descritivo do script
Este script é um componente que mostra detalhes da empresa e produtos em uma página específica. Ele inclui funcionalidades para exibir imagens, links de navegação e animações de entrada e saída. O conteúdo dentro do componente DetailsCompany inclui uma imagem destacada, um título de destaque e um parágrafo de descrição, além de links para outras páginas.

2.2 O que é necessário para processar ele, se precisa de instalação de algo e como fazer
Para processar este script, é necessário ter um ambiente de desenvolvimento configurado com Next.js e TypeScript.

2.2.1 Além disso, algumas bibliotecas são importadas e utilizadas no script, como:
React, Next.js, framer-motion e componentes personalizados (TextReader, FocusableComponent). Para instalar e configurar um ambiente Next.js com TypeScript, você pode seguir a documentação oficial do Next.js: Next.js - Getting Started. 

2.3 Para instalar as dependências necessárias, você pode usar o npm (Node Package Manager) com os seguintes comandos no terminal:
bash
Copy code
npm install react next
npm install framer-motion

2.4 Quais os benefícios ao utilizar o script que foi criado

2.4.1 Exibição de Detalhes da Empresa e Produtos
O componente permite a exibição de detalhes da empresa e produtos de forma organizada e visualmente atraente.

2.4.2 Interação com o Usuário
Os elementos interativos, como links e animações, proporcionam uma experiência de usuário dinâmica e envolvente.

2.4.3 Acessibilidade
O componente é acessível, permitindo que todos os usuários possam interagir com os elementos da página de forma fácil e intuitiva.

# About

3. Descrição do Componente
O componente About é responsável por exibir informações sobre a Salesforce, seus produtos, serviços, CRM e informações de contato. Nesta sessão, o usuário tem a opção de ser direcionado para as páginas de Produtos, Contato, CRM ou Serviços. Isso vai garantir um direcionamento claro e objetivo. Não ficando preso a um menu e o usuário pode navegar usando o teclado.

3.1. Descritivo do script
O script é um componente React que representa a página "Sobre" de um site. Ele inclui informações sobre a Salesforce, seus produtos, serviços, CRM e informações de contato.

3.2 O que é necessário para processar ele, se precisa de instalação de algo e como fazer
Para processar este script, é necessário ter um ambiente de desenvolvimento configurado com React. Não são necessárias instalações adicionais além das dependências padrão do React.

3.3 Quais os benefícios ao utilizar o script que foi criado

3.3.1 Informações Claras
O componente About fornece informações claras e concisas sobre a Salesforce, seus produtos, serviços, CRM e informações de contato, permitindo que os usuários entendam facilmente o que a empresa oferece.

3.3.2 Navegação Intuitiva 
O layout da página "Sobre" é organizado e fácil de navegar, com seções distintas para cada tipo de informação, facilitando a localização de informações específicas.
Acessibilidade: O uso do componente TextReader garante que o conteúdo da página seja acessível para pessoas com deficiência visual, permitindo que eles utilizem leitores de tela para acessar o conteúdo.

3.3.3 Integração com Next.js
O componente pode ser facilmente integrado a uma aplicação Next.js, aproveitando as funcionalidades de roteamento e pré-renderização oferecidas pelo Next.js.


# AboutServices

4. Descrição do Componente
O componente AboutServices é responsável por exibir informações sobre os serviços oferecidos pela empresa usando a plataforma Salesforce Customer 360.

4.1 Descritivo do script
O script é um componente React que representa uma seção de serviços em uma página. Ele inclui informações sobre os serviços oferecidos pela empresa usando a plataforma Salesforce Customer 360.

4.2 O que é necessário para processar ele, se precisa de instalação de algo e como fazer
Para processar este script, é necessário ter um ambiente de desenvolvimento configurado com React. Não são necessárias instalações adicionais além das dependências padrão do React.

4.3 Quais os benefícios ao utilizar o script que foi criado

4.3.1 Informações Claras
O componente AboutServices fornece informações claras e concisas sobre os serviços oferecidos pela empresa usando a plataforma Salesforce Customer 360, permitindo que os usuários entendam facilmente o que é oferecido.

4.3.2 Navegação Intuitiva
O layout da seção de serviços é organizado e fácil de navegar, com uma imagem representativa ao lado das informações sobre os serviços, facilitando a compreensão e a visualização.

4.3.3 Acessibilidade: 
O uso do componente TextReader garante que o conteúdo da seção de serviços seja acessível para pessoas com deficiência visual, permitindo que eles utilizem leitores de tela para acessar o conteúdo.

4.3.4 Integração com Next.js
O componente pode ser facilmente integrado a uma aplicação Next.js, aproveitando as funcionalidades de roteamento e pré-renderização oferecidas pelo Next.js.

# About SalesForce

5. Descrição do Componente
O componente AboutSalesForce é responsável por exibir informações sobre a empresa Salesforce, sua plataforma de CRM e sua revolução no gerenciamento de relacionamento com clientes.

5.1 Descritivo do script
O script é um componente React que representa uma seção sobre a empresa Salesforce em uma página. Ele inclui informações sobre a Salesforce, sua plataforma de CRM integrada e como ela revolucionou o gerenciamento de relacionamento com clientes.

5.2 O que é necessário para processar ele, se precisa de instalação de algo e como fazer
Para processar este script, é necessário ter um ambiente de desenvolvimento configurado com React. Além das dependências padrão do React, é necessário ter o Framer Motion instalado para a animação. A imagem usada no componente também deve estar disponível no projeto.

5.3 Quais os benefícios ao utilizar o script que foi criado

5.3.1 Informações Claras
O componente AboutSalesForce fornece informações claras e concisas sobre a Salesforce e sua plataforma de CRM, permitindo que os usuários entendam facilmente o que a empresa oferece.

5.3.2 Animação Atraente
O uso do Framer Motion para animação torna a seção mais dinâmica e visualmente atraente, destacando os pontos-chave sobre a Salesforce.

5.3.3 Imagem Representativa
A inclusão de uma imagem representativa dos serviços da Salesforce ajuda a visualizar melhor o que a empresa oferece, tornando a seção mais envolvente para os usuários.

# AboutForms

6. Descrição do Componente
O componente AboutForms é uma seção que apresenta informações sobre diferentes formulários e meios de contato relacionados aos serviços da Salesforce. Ele inclui três seções distintas, cada uma representando um tipo de formulário ou meio de contato.

6.1 Formulário de Descoberta

6.1.1 
Descrição das soluções de CRM ideais para a empresa.

6.1.2
Explicação sobre a consultoria personalizada oferecida para identificar os módulos e produtos de CRM mais adequados.

6.1.3
Destaque para os benefícios dos diferentes tipos de CRM oferecidos.

6.2 Pesquisa de Satisfação

6.2.1
Destaque para a importância do feedback dos clientes para o crescimento da empresa.

6.2.2
Incentivo para os clientes compartilharem suas impressões, sugestões e ideias por meio de um formulário de feedback.

6.3 Formulário de Contato

6.3.1
Explicação sobre a parceria com a Salesforce e como ela pode ajudar a colocar os clientes no centro do negócio.

6.3.2
Incentivo para explorar as soluções da Salesforce e iniciar a jornada rumo à excelência no relacionamento com o cliente.

6.4
O componente utiliza o TextReader para acessibilidade e o Link do Next.js para navegação entre as diferentes páginas de formulários. Além disso, ele inclui imagens representativas para cada seção, ajudando a visualizar melhor os serviços e formulários mencionados.


# Footer

7. Descrição do Componente
O componente Footer representa o rodapé de uma página e inclui links para diferentes seções, informações sobre produtos, empresa, projeto e redes sociais da Salesforce. Ele também exibe o logo da Salesforce e um texto de direitos autorais.

7.1 O rodapé está dividido em duas seções principais

7.1.1 Logo e Links:
Exibe o logo da Salesforce como um link.
Apresenta links para diferentes seções, como "Produtos", "Empresa", "Projeto" e "Redes Sociais".

7.1.2 Informações e Direitos Autorais:
Inclui informações sobre a empresa, como "Sobre", "Contato" e "Formulários".
Apresenta links para outras seções importantes, como "Nosso Time" e "Documentação Acessibilidade".

7.1.3  Mostra ícones de redes sociais como links para as respectivas páginas.
Exibe um texto de direitos autorais no final do rodapé.

7.2 O componente utiliza o TextReader para acessibilidade e o Link do Next.js para navegação entre as diferentes páginas e links externos das redes sociais.

# InfiniteMovingCards - Descrição dos parceiros - Ele funciona junto com a página Carrosel Partner

8. Descrição dos Componentes
Este componente InfiniteMovingCards cria um carrossel de cartões que se movem infinitamente para a esquerda ou para a direita. Ele recebe uma lista de itens, cada um contendo uma imagem, um nome e um produto. O carrossel pode ser configurado com diferentes velocidades e pausa quando o mouse passa por cima.

8.1 Funcionalidades principais

8.1.1 Cria um carrossel de cartões com movimento infinito.

8.1.2 Aceita uma lista de itens, cada um contendo uma imagem, um nome e um produto.

8.1.3 Permite configurar a direção e a velocidade do movimento.

8.1.4 Pausa o movimento quando o mouse está sobre o carrossel.

8.2 Instruções de uso:

Adicione o componente InfiniteMovingCards ao seu projeto.
Passe a lista de itens como propriedade items, onde cada item contém uma imagem, um nome e um produto.
Configure a direção do movimento com a propriedade direction ("left" para a esquerda, "right" para a direita).
Defina a velocidade do movimento com a propriedade speed ("fast", "normal" ou "slow").
Para pausar o movimento quando o mouse estiver sobre o carrossel, defina a propriedade pauseOnHover como true.
Observações:

Certifique-se de ter definido as variáveis CSS --animation-direction e --animation-duration em seu arquivo de estilos para controlar a direção e a duração da animação.
Requisitos adicionais:
Não é necessário baixar nada adicional para usar este componente. Certifique-se de ter as dependências do React e as configurações necessárias para CSS customizado em seu projeto.

# CN

9. Descrição do Componente
A função cn é uma abreviação de "classNames" e é utilizada para combinar e condicionar classes CSS de forma mais simples e legível em componentes React.

9.1 Instalação:
Para usar a função cn, é necessário instalar as bibliotecas clsx e tailwind-merge:

npm install clsx tailwind-merge

9.2 Conteúdo do Componente
O componente contém a função cn, que recebe um número variável de argumentos (representados por ...inputs) e os mescla usando as funções clsx e tailwind-merge, retornando uma string única de classes CSS combinadas.

# InfoSalesForce

10. Descrição do Componente
O componente InfoSalesForce exibe informações sobre a Salesforce, destacando seus recursos e vantagens. Ele utiliza o componente TextReader para tornar o conteúdo acessível e oferecer uma experiência de leitura mais inclusiva.

10.1 Instalação
Este componente não requer nenhuma instalação adicional além das dependências padrão do React.

10.2 Conteúdo do Componente
O componente exibe várias seções de informações sobre a Salesforce, cada uma destacando um aspecto específico da plataforma. Cada seção inclui um título, um parágrafo descritivo e uma imagem ilustrativa. As seções abordam tópicos como personalização, inteligência artificial, inovação contínua, ecossistema abrangente e computação em nuvem. Cada informação é apresentada de forma organizada e visualmente atraente, com o uso de grades e espaçamentos adequados.

10.3 Implementação
Para implementar este componente, você pode renderizá-lo em seu aplicativo React onde desejar exibir as informações sobre a Salesforce. Certifique-se de importar o componente TextReader corretamente e fornecer as imagens e textos apropriados para cada seção. Este componente pode ser integrado em páginas da web que promovem a Salesforce ou oferecem informações detalhadas sobre seus recursos.

# Login
11. Descrição do Componente
O componente LoginComponent é responsável por exibir a interface de login de um usuário utilizando o NextAuth.js para autenticação. Ele utiliza os hooks useSession para obter informações da sessão do usuário e as funções signIn e signOut para gerenciar o login e logout do usuário, respectivamente.

11.1 Instalação
Para utilizar este componente, é necessário ter o NextAuth.js configurado no projeto. Certifique-se de ter instalado e configurado corretamente o NextAuth.js, incluindo a configuração dos provedores de autenticação, como o Google neste caso.

11.2 Conteúdo do Componente
O componente exibe um botão "Login com Google" quando o usuário não está autenticado. Ao clicar neste botão, o usuário é redirecionado para a página de login do Google para autenticação. Após o login bem-sucedido, o componente exibe uma mensagem de boas-vindas com o nome do usuário e um botão "Sair" para fazer logout.

11.3 Implementação
Para implementar este componente, você precisa importar e utilizar as funções signIn, signOut e o hook useSession fornecidos pelo NextAuth.js. Certifique-se de que as rotas e configurações do NextAuth.js estão corretamente configuradas no seu projeto. O componente pode ser colocado em qualquer parte do seu aplicativo onde deseja exibir a interface de login e logout.

# NavBar
12. Descrição do Componente
O componente Navbar é responsável por exibir a barra de navegação do aplicativo. Ele inclui um menu responsivo para dispositivos móveis, links para diferentes seções do aplicativo e botões para acessar e cadastrar-se no sistema.

12.1 Instalação
Este componente pode ser utilizado em um projeto React com Next.js. Certifique-se de ter as dependências necessárias instaladas e configuradas, como o Next.js, React e os estilos necessários (por exemplo, Tailwind CSS).

12.2 Conteúdo do Componente
O componente Navbar consiste em um cabeçalho (header) contendo a barra de navegação. Ele inclui um logo que redireciona para a página inicial, links para as seções "Produto" e "Projeto", botões para acessar e cadastrar-se, e um menu responsivo para dispositivos móveis.

12.3 Implementação
Para utilizar este componente, você pode importá-lo e inseri-lo na sua aplicação React. Certifique-se de que as rotas para as páginas "Produto", "Projeto", "Login" e "Cadastro" estejam corretamente configuradas no seu projeto Next.js.

12.4 Observações
O componente utiliza o Next.js para lidar com as rotas, portanto, certifique-se de ter configurado corretamente as rotas no arquivo pages do seu projeto.
O menu responsivo é ativado ao clicar no botão de menu, exibindo ou ocultando os links de navegação, dependendo do estado do menu (menuOpen).
O componente utiliza o hook useState para controlar o estado do menu (menuOpen), e o hook useEffect não é utilizado neste componente.

# NavForms - Menu par os Formulários

13. Descrição do Componente
O componente NavForms é responsável por exibir um menu de formulários e chamadas de ação na barra de navegação. Ele utiliza o pacote @headlessui/react para criar um menu dropdown com diferentes opções de formulários e ações.

13.1 Instalação
Para utilizar este componente, é necessário instalar as dependências @headlessui/react e @heroicons/react utilizando o comando:

npm install @headlessui/react @heroicons/react

13.2 Conteúdo do Componente
O componente NavForms consiste em um menu dropdown na barra de navegação contendo diferentes formulários e chamadas de ação. Ele exibe opções como "Descoberta", "Cadastro", "Contato", "Feedback", "Demonstração" e "Ligue agora", cada uma com um ícone representativo e um link correspondente.

13.3 Implementação
Para utilizar este componente, você pode importá-lo e inseri-lo na sua aplicação React. Certifique-se de que a barra de navegação (Navbar) está configurada para exibir o componente NavForms. Você também pode customizar as opções de formulários e chamadas de ação conforme necessário.

13.4 Observações
O componente utiliza o pacote @headlessui/react para criar o menu dropdown, e o pacote @heroicons/react para os ícones.
O menu dropdown é ativado ao clicar no botão "Formulários" e exibe as opções de forma dinâmica.
As opções de formulários e chamadas de ação são exibidas com seus respectivos ícones e descrições, permitindo que o usuário selecione a opção desejada.
O botão "Fechar" dentro do menu dropdown permite fechar o menu sem selecionar nenhuma opção.

# NavSolution

14. Descrição do Componente
O componente NavSolution é responsável por exibir um menu de opções de acessibilidade na barra de navegação. Ele utiliza o pacote @headlessui/react para criar um menu dropdown com diferentes opções de acessibilidade, como tema claro ou escuro, ajuste de fonte, idioma, entre outros.

14.1 Instalação
Para utilizar este componente, é necessário instalar as dependências @headlessui/react e @heroicons/react utilizando o comando:

npm install @headlessui/react @heroicons/react

14.2 Conteúdo do Componente
O componente NavSolution consiste em um menu dropdown na barra de navegação contendo diferentes opções de acessibilidade, como tema claro ou escuro, ajuste de fonte, idioma, entre outros. Ele exibe opções com ícones representativos e descrições, permitindo que o usuário selecione a opção desejada.

14.3 Implementação
Para utilizar este componente, você pode importá-lo e inseri-lo na sua aplicação React. Certifique-se de que a barra de navegação (Navbar) está configurada para exibir o componente NavSolution. Você também pode customizar as opções de acessibilidade conforme necessário.

14.4 Observações
O componente utiliza o pacote @headlessui/react para criar o menu dropdown, e o pacote @heroicons/react para os ícones.
O menu dropdown é ativado ao clicar no botão "Acessibilidade" e exibe as opções de forma dinâmica.
As opções de acessibilidade são exibidas com seus respectivos ícones e descrições, permitindo que o usuário selecione a opção desejada.
O botão "Fechar" dentro do menu dropdown permite fechar o menu sem selecionar nenhuma opção.

## Páginas 

1. Cadastro
Esse componente React chamado Cadastro é uma página de cadastro com um formulário para os usuários preencherem suas informações. Aqui está o que ele faz:

Utiliza o hook useState para gerenciar o estado do formulário (InformacoesFormulario), que inclui campos como nome, sobrenome, email, telefone, senha, confirmação de senha, gênero e empresa.

Define a função handleChange para atualizar o estado do formulário conforme os usuários preenchem os campos. A função também faz algumas validações, como aceitar apenas strings para campos como nome, sobrenome, gênero e empresa, e remover caracteres não numéricos do campo de telefone.

Define a função saveDataToCSV para salvar os dados do formulário em um arquivo CSV e iniciar o download desse arquivo. Antes de salvar, ele exibe os dados no console para verificação.

Define a função handleSubmit para lidar com o envio do formulário. Ele realiza algumas validações, como verificar se o email é válido, se a senha tem pelo menos 6 caracteres, se todos os campos obrigatórios estão preenchidos e se as senhas coincidem. Se todas as validações forem bem-sucedidas, ele chama a função saveDataToCSV para salvar os dados em CSV e salva os dados no localStorage em formato JSON.

No retorno do componente, há um formulário HTML com campos para o usuário preencher suas informações. Cada campo é um componente input com um label associado e um TextReader que envolve o label para acessibilidade. O formulário também inclui botões de rádio para selecionar o gênero e a empresa.

No geral, este componente cria uma página de cadastro acessível e funcional, que salva os dados do usuário em um arquivo CSV e no localStorage.

# Carrosel Partner

2. Carrosel com informações de parceiros e produtos.

Esse componente React, chamado InfiniteMovingCardsDemo, renderiza um componente InfiniteMovingCards que exibe uma série de cartões de maneira infinita e animada. Aqui está uma visão geral do que o componente faz:

O componente InfiniteMovingCardsDemo renderiza um <div> com a classe bg-white, que serve como o contêiner principal para o componente InfiniteMovingCards.
Dentro desse contêiner, há outro <div> com a classe min-h-[30vh] flex flex-col antialiased bg-white relative mx-auto, que define a altura mínima do componente e o alinha ao centro da página.
Dentro desse segundo <div>, há um <div> que renderiza o componente InfiniteMovingCards. Este componente recebe várias propriedades, incluindo items, que é um array de objetos representando os cartões a serem exibidos. Cada objeto tem as propriedades imagem, name, e product.
Os cartões são renderizados com base nos dados do array comentarios. Cada cartão exibe uma imagem, um nome e um produto relacionado.
O componente InfiniteMovingCards é responsável por animar os cartões de forma infinita, movendo-os na direção especificada (right neste caso) e com a velocidade determinada (fast neste caso).
A animação é realizada usando a biblioteca Framer Motion, que é importada no início do arquivo.

No geral, este componente cria uma exibição visualmente atraente de cartões que se movem infinitamente, exibindo informações sobre diferentes produtos e empresas relacionadas à inteligência artificial e outros serviços.

# Página de Contato

3. Descrição do Componente
Esse componente Contact é uma página de contato que exibe um formulário para os usuários preencherem. Ele captura informações como nome, e-mail, telefone, tamanho da empresa, segmento, cargo, produto e uma mensagem. Aqui está uma descrição geral do que o componente faz:

3.1 Importa useState do React para lidar com o estado dos dados do formulário.

3.2 Define um estado inicial para as informações do formulário usando useState.

3.3 Define uma função handleChange para atualizar o estado do formulário conforme os usuários preenchem os campos.

3.4 Define uma função handleSubmit para lidar com o envio do formulário. Ela salva os dados do formulário no localStorage do navegador e envia os dados para uma API usando fetch.

3.5 Renderiza um formulário com campos para nome, e-mail, telefone, tamanho da empresa, segmento, cargo, produto e mensagem. Os campos são vinculados ao estado do formulário e atualizados conforme os usuários interagem com eles.
Usa a biblioteca TextReader para renderizar alguns elementos de texto, como "Contato", "Nome", "E-mail", etc.
Ao clicar no botão "Enviar", o formulário é submetido, e a função handleSubmit é chamada para processar os dados do formulário.
Observações:

3.6 Há partes do código comentadas, como a função saveDataToCSV, que parecem estar relacionadas à geração de um arquivo CSV com os dados do formulário. Essas partes estão desativadas no momento.
O código inclui a importação de Image e Link do Next.js, mas esses componentes não são usados no código fornecido. Eles podem ter sido usados em versões anteriores ou podem ser usados em outras partes do projeto.

# CRM

4. Documentação do Componente CRM

O componente CRM é responsável por exibir informações sobre Customer Relationship Management (Gestão de Relacionamento com o Cliente). Ele apresenta detalhes sobre o que é CRM, sua importância, tipos de CRM e como escolher o CRM certo para um negócio.

4.1 Descrição do Componente
O CRM é um componente funcional que renderiza uma página com seções informativas sobre CRM. Ele utiliza o framework Next.js para renderização no lado do servidor e fornece uma interface de usuário responsiva e acessível.

4.2 Não precisa de nenhuma instação.

# Formulário de Feedback

5. Descrição do Componente
O componente FormFeedback é responsável por exibir um formulário de feedback, permitindo que os usuários enviem comentários e avaliações sobre um serviço ou produto.

5.1 Informações gerais
O FormFeedback é um componente funcional que renderiza um formulário de feedback com campos para nome, e-mail, avaliação e mensagem. Ele utiliza o estado do React para controlar a classificação da avaliação e os dados do formulário de feedback.

5.2 Uso
O componente FormFeedback pode ser utilizado em qualquer página da sua aplicação para coletar feedback dos usuários. Ele é responsivo e adapta-se a diferentes tamanhos de tela.

5.2.1 Como usar

5.2.1.1 Importação de Componentes:
Certifique-se de importar corretamente os componentes necessários, como useState do React e TextReader de "../components/TextReader".

5.2.1.2 Estado de Classificação (useState):
Utilize o useState do React para controlar o estado da classificação da avaliação (rating).

5.2.1.3 Ícone de Estrela (StarIcon):
O componente StarIcon renderiza um ícone de estrela para representar a classificação da avaliação. Ele é configurado para mudar de cor quando preenchido.

5.2.1.4 Manipulação de Classificação (handleSetRating):
Utilize a função handleSetRating para atualizar a classificação da avaliação com base no índice da estrela clicada.

5.2.1.5 Dados do Formulário (InformacoesFeedback):
Utilize o estado InformacoesFeedback para controlar os dados do formulário de feedback, incluindo nome, e-mail, mensagem e classificação.

5.2.1.6 Manipulação de Mudanças (handleChange):
Utilize a função handleChange para atualizar os dados do formulário de feedback conforme o usuário digita nos campos.

5.2.1.7 Envio de Dados (handleSubmit):
Utilize a função handleSubmit para salvar os dados do formulário de feedback no localStorage quando o formulário for enviado.

# Login

6. Descrição do Componente para página de Login
O componente Login é responsável por exibir um formulário de login e oferecer opções de login social, como Google, GitHub e Twitter. Ele também inclui validação de e-mail e senha antes de enviar os dados para autenticação.

6.1 Informações gerais
O Login é um componente funcional que renderiza um formulário de login com campos para e-mail e senha. Ele utiliza o estado do React para controlar os dados do formulário e inclui validação de e-mail e senha antes de permitir o envio do formulário.

6.2 Uso
O componente Login pode ser utilizado em qualquer página da sua aplicação para permitir que os usuários façam login. Ele também oferece opções de login social para facilitar o acesso dos usuários.

6.2.1 Como usar

6.2.1.1 Importações de Componentes:
Certifique-se de importar corretamente os componentes necessários, como Link, Image, useState do React e signIn de "next-auth/react".

6.2.1.2 Estado do Formulário (useState):
Utilize o useState do React para controlar o estado dos dados do formulário de login.

6.2.1.3 Manipulação de Mudanças (handleChange):
Utilize a função handleChange para atualizar os dados do formulário de login conforme o usuário digita nos campos.

6.2.1.4 Validação de E-mail e Senha (handleSubmit):
Utilize a função handleSubmit para validar o e-mail e a senha antes de enviar os dados para autenticação. Se os dados forem válidos, envie os dados para autenticação e redirecione o usuário para a página protegida.

6.2.1.5 Opções de Login Social:
Utilize botões com onClick para permitir que os usuários façam login usando provedores de autenticação social, como Google, GitHub e Twitter.

# VideoComponent

1. Visão Geral
O VideoComponent é um componente React funcional, escrito em TypeScript, projetado para renderizar um vídeo a partir de um arquivo fornecido. Este componente permite a personalização das dimensões do vídeo através de propriedades (props) opcionais.

2. Interface das Propriedades (VideoComponentProps)
O VideoComponent aceita um conjunto de propriedades definidas pela interface VideoComponentProps.

2.1 interface VideoComponentProps {
  videoSrc: string;  // Caminho do arquivo de vídeo.
  width?: string;    // Largura do vídeo (opcional).
  height?: string;   // Altura do vídeo (opcional).
}

2.2 
2.2.1 videoSrc (string): Obrigatória. Especifica o caminho para o arquivo de vídeo. Este caminho deve ser relativo à raiz do servidor.
2.2.2 width (string): Opcional. Define a largura do vídeo. O valor padrão é "800".
2.2.3 height (string): Opcional. Define a altura do vídeo. O valor padrão é "auto".

3. Uso
Para utilizar o VideoComponent em um aplicativo React, você deve importar o componente e passar as propriedades apropriadas.

4. Descrição do Código

4.1 Importações: 
Importa o módulo React necessário para criar o componente.

4.1 Interface VideoComponentProps: Define os tipos das propriedades aceitas pelo componente.
Componente VideoComponent:

4.2 Utiliza a interface VideoComponentProps para tipar as propriedades recebidas.

4.3 Define valores padrão para width (800 pixels) e height (auto).

4.4 Renderiza um elemento <video> com as propriedades fornecidas.

4.5 O <video> contém um elemento <source> que especifica o tipo de vídeo como video/mp4.
Inclui uma mensagem de fallback para navegadores que não suportam a tag <video>.

5. Este componente é útil para incorporar vídeos em um aplicativo React, permitindo fácil configuração das dimensões do vídeo e garantindo compatibilidade com a maioria dos navegadores modernos.

### Itens de Acessibilidade ###

# Seleção do Idioma

1.
Geral:
O componente ModalIdioma é responsável por exibir uma página modal para selecionar o idioma desejado. O usuário é direcionado para esta página onde faz a seleção do idioma desejado e ela será aplicada em todas as telas.

1.1 Descritivo do script
O script é um componente React que exibe um modal para selecionar o idioma desejado. Ele inclui opções para os idiomas português, inglês e espanhol, além de botões para confirmar ou cancelar a seleção.

1.2 O que é necessário para processar ele, se precisa de instalação de algo e como fazer:
Para processar este script, é necessário ter um ambiente de desenvolvimento configurado com React. Não são necessárias instalações adicionais além das dependências padrão do React.

1.3 Quais os benefícios ao utilizar o script que foi criado:

1.3.1
Facilidade na Seleção de Idioma: O componente ModalIdioma permite ao usuário selecionar o idioma desejado de forma simples e intuitiva, melhorando a experiência de uso do aplicativo.

1.3.2
Acessibilidade: A inclusão do componente TextReader para cada opção de idioma e botão torna o modal mais acessível para pessoas com deficiência visual, permitindo que elas utilizem leitores de tela para navegar e interagir com o conteúdo.

1.3.3
Feedback Visual: O modal fornece um feedback visual claro ao usuário, indicando as opções disponíveis e as ações a serem tomadas, como a seleção de um idioma ou a confirmação da escolha.

1.3.4
Melhoria da Experiência do Usuário: Ao oferecer uma maneira fácil e clara de selecionar o idioma, o modal contribui para uma experiência de usuário mais agradável e personalizada, atendendo às necessidades de diferentes usuários.

# Aumento da Fonte - FontSizeAdjusterContainer

2. Descrição do Componente
O componente FontSizeAdjusterContainer é responsável por ajustar dinamicamente o tamanho da fonte em elementos HTML quando a tecla de seta para cima é pressionada, se a opção de aumento de fonte estiver habilitada. Ele utiliza o localStorage para armazenar o estado da opção de aumento de fonte.

2.1 Instalação
Este componente não requer nenhuma instalação adicional além das dependências padrão do React.

2.2 Conteúdo do Componente
O componente utiliza o estado local isFontUpEnabled para controlar se o aumento de fonte está habilitado. Ele define um efeito colateral que adiciona um ouvinte de evento de teclado à janela, que aumenta o tamanho da fonte em 2 pixels para todos os elementos com classes começando com "text-" quando a tecla de seta para cima é pressionada e a opção de aumento de fonte está habilitada. O estado isFontUpEnabled é inicializado com base no valor armazenado no localStorage.

2.3 Implementação
Para implementar este componente, você pode renderizá-lo em seu aplicativo React onde desejar que o ajuste dinâmico do tamanho da fonte ocorra. Certifique-se de adicionar este componente em um nível adequado para que os elementos de texto desejados sejam afetados pelo aumento de fonte.

# Diminuir a fonte - FontSizeDecreaserContainer

3. Descrição do Componente
O componente FontSizeDecreaserContainer é responsável por ajustar dinamicamente o tamanho da fonte em elementos HTML quando a tecla de seta para baixo é pressionada, se a opção de diminuição de fonte estiver habilitada. Ele utiliza o localStorage para armazenar o estado da opção de diminuição de fonte.

3.1 Instalação
Este componente não requer nenhuma instalação adicional além das dependências padrão do React.

3.2 Conteúdo do Componente
O componente utiliza o estado local isFontDownEnabled para controlar se a diminuição de fonte está habilitada. Ele define um efeito colateral que adiciona um ouvinte de evento de teclado à janela, que diminui o tamanho da fonte em 2 pixels para todos os elementos com classes começando com "text-" quando a tecla de seta para baixo é pressionada e a opção de diminuição de fonte está habilitada. O estado isFontDownEnabled é inicializado com base no valor armazenado no localStorage.

3.3 Implementação
Para implementar este componente, você pode renderizá-lo em seu aplicativo React onde desejar que o ajuste dinâmico do tamanho da fonte ocorra. Certifique-se de adicionar este componente em um nível adequado para que os elementos de texto desejados sejam afetados pela diminuição de fonte.

# Leitor de tela

4. Descrição do Componente
O script implementa um componente React chamado TextReader, que tem como objetivo facilitar a leitura de texto por meio de síntese de fala. O componente aceita um texto (text) e um conteúdo filho (children) que será exibido e lido quando o componente for interagido. Para que ele funcione perfeitamente, será necessários implementar esse item/TAG em cada texto disponível no código para que o usuário possa realizar a leitura de forma parcial.

4.1 O componente TextReader possui dois principais eventos de interação

4.1.1 onClick
Este evento é acionado quando o componente é clicado com o mouse. Quando acionado, o componente irá exibir o texto passado como propriedade e utilizar a API de síntese de fala do navegador para falar o texto.

4.1.2 onFocus
Este evento é acionado quando o componente recebe o foco, geralmente ao navegar pela página utilizando a tecla TAB. Quando acionado, o componente irá também exibir o texto e utilizar a API de síntese de fala para falar o texto.
Além disso, o componente utiliza a propriedade tabIndex={0} para tornar o componente focável, permitindo a interação via teclado. O estilo cursor: 'pointer' é aplicado para indicar que o componente é interativo.

4.2 No geral, o componente TextReader fornece uma maneira simples e acessível de permitir que os usuários ouçam o conteúdo textual de forma fácil e intuitiva.

# UseChangeLanguage - Para mudar o idioma

5. Descrição do Componente
Este é um hook personalizado chamado useChangeLanguage que gerencia o estado de um botão de alternância de idioma. Ele utiliza o useState para controlar se o botão está ativado ou desativado, e useCallback para memorizar a função toggleAlterLanguage e evitar que ela seja recriada a cada renderização, otimizando o desempenho.

5.1 Quando o botão é clicado, toggleAlterLanguage é chamado, invertendo o estado atual (isLanguageOn) e exibindo uma mensagem no console indicando se o botão está ativado ou desativado.

5.2 Este hook pode ser utilizado em componentes React para controlar o estado de um botão de alternância de idioma, permitindo que você alterne entre idiomas no seu aplicativo.

# ChatBot

6. Descrição do componete
Este é um componente React chamado WatsonAssistantChat que integra o Watson Assistant Chat em um aplicativo web. O componente utiliza o hook useEffect para carregar o script necessário para inicializar o chat do Watson Assistant quando o componente é montado.

6.1 Conexões

6.1.1 window.watsonAssistantChatOptions: Define as opções de configuração para o chat do Watson Assistant, incluindo o ID da integração, a região e o ID da instância do serviço.
Criação de um novo elemento script (t) para carregar o script do Watson Assistant Chat com base nas opções de configuração.
Adição do elemento script ao cabeçalho (head) do documento para carregar o script do Watson Assistant Chat.
O retorno do componente é um <div> com o id watson-chat, onde o chat será renderizado.
Este componente é útil para integrar o Watson Assistant Chat em um aplicativo web React e permite que os usuários interajam com um assistente virtual desenvolvido com o Watson Assistant.

6.2 O Chat ficará disponóvel 24 horas por dia e será gerenciado pelo Watson Assistant e não pelo React. 

# CustomChat

1. Descrição do Componente
O código CustomChat implementa o gerenciamento da abertura e fechamento do chat, integrando o componente WatsonAssistantChat.

2. Detalhes
21. Verificação de Ambiente (isClient):

Assim como no componente isClient verifica se o código está sendo executado no ambiente do navegador.

2.2 Gerenciamento de Estado (isChatOpen):

O componente usa o hook useState para gerenciar o estado de abertura do chat (isChatOpen).
O valor inicial de isChatOpen é definido como:
isClient && localStorage.getItem('isChatOpen') === 'true'.
Essa expressão verifica se o código está no navegador (isClient) e, em seguida, verifica se existe uma chave "isChatOpen" no localStorage com valor "true". Se ambas as condições forem verdadeiras, o chat será aberto inicialmente.
Função toggleChat:

A função toggleChat é responsável por alternar o estado de abertura do chat (isChatOpen).
Ela atualiza o estado usando setIsChatOpen com o valor oposto do estado atual (!isChatOpen).
Além disso, a função atualiza o valor de "isChatOpen" no localStorage para persistir a preferência do usuário (aberto ou fechado) entre recarregamentos da página.
Renderização Condicional:

O componente retorna um div com a classe "chat-container".
Dentro do div, há um botão com a classe "chat-icon" para alternar a abertura do chat. Você precisará substituir o comentário por seu ícone de chat personalizado.
O componente WatsonAssistantChat é renderizado condicionalmente usando o operador lógico AND (&&). Se isChatOpen for verdadeiro, o componente do chat do Watson Assistant será renderizado.
Conclusão:

3. Finalização:
Este componente (CustomChat) gerencia a abertura e fechamento do chat e integra o componente WatsonAssistantChat. Ele verifica o estado inicial no localStorage, permite alternar a abertura usando o botão, e persiste a preferência do usuário no localStorage.

#  RightSidebar

O código Sidebar deve funcionar para abrir o chat quando você pressiona o botão de chat. 

Estado de Abertura do Chat (isChatOpen):

O componente Sidebar agora possui um estado adicional, isChatOpen, que controla se o chat está aberto ou fechado.
Tratamento da Ação 'CustomChat':

Dentro da função handleClick, o caso "CustomChat" foi modificado. Agora, ele simplesmente define isChatOpen como true para indicar que o chat deve ser aberto.
Renderização Condicional do Chat:

No final do retorno do componente Sidebar, há uma renderização condicional usando o operador lógico AND (&&). Se isChatOpen for verdadeiro, o componente CustomChat será renderizado dentro da barra lateral.
Como funciona:

Quando você clica no botão "ChatBot" na barra lateral, a função handleClick é chamada com action sendo "CustomChat".
A função handleClick altera isChatOpen para true.
A renderização condicional do Sidebar verifica o novo valor de isChatOpen. Como ele é true, o componente CustomChat é renderizado dentro da barra lateral, abrindo o chat.
Verificações adicionais:


# Processo do VLibras
1. Instalar biblioteca: npm install @djpfs/react-vlibras
2. Chamar a aplicação no _app.tsx: import VLibras from '@djpfs/react-vlibras';
3. Agora ao abrir quando a aplicação estiver rodando (npm start) ele permite ao usuário selecionar o conteúdo que ele
deseja e após isso, o personagem começa a descrever em Libras sobre o conteúdo selecionado.

# Processo do NavForm
1. Primeiro instalar as bibliotecas de icones e de suportes
2. npm install @headlessui/react @heroicons/react
3. Importar o conteúdo no documento: import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
4. Para cada icone que eu precisar, só ir na pasta que foi baixada dentro da pasta Next e selecionar o nome. Exemplo: ChevronDownIcon

# NavSolution
1. Instalar a bilioteca npm install @headlessui/react @heroicons/react

# Integração do Chatbot
Os acessos estão diretos pelo Watson Assistant

1. Acessos:
API: YqqGTY1pxYgPQZYVDwHt2zcJ0qUT3nislRVJDjutJplS
URL:https://api.us-east.assistant.watson.cloud.ibm.com/instances/e0771cd9-c1d2-4b8e-b057-f554aa3c898e

2. Watson:
Assistant name: Sales force bot
Assistant ID: 742a7fa8-273d-4074-86a2-4e30f2830c70
URL:https://api.us-east.assistant.watson.cloud.ibm.com/v2/assistants/742a7fa8-273d-4074-86a2-4e30f2830c70/sessions 

3. Link para o TTS:
API: TnUcB2uO15M4TMNQSj_NQnPwwGG_qP_7iQRpTzrKIwh9
URL: https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/3c52d93e-e3e4-4344-9dd1-ba2fd8520811

4. Link para o STT:
API: fR6Ip2YoIT6g5BILmqY89Ey9wvlcELc9Y-V1CNCttwDL
URL: https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/bfcc14fb-7741-4c32-aaa3-9651749530c9

5. Para realizar a integração
<script>
  window.watsonAssistantChatOptions = {
    integrationID: "994cc0c8-0b8f-4077-a50d-eb51b45b24f9", // The ID of this integration.
    region: "us-east", // The region your integration is hosted in.
    serviceInstanceID: "e0771cd9-c1d2-4b8e-b057-f554aa3c898e", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
</script>

6. Criar uma interface no globals.d.ts que fica na pasta context
// types/globals.d.ts
interface Window {
  watsonAssistantChatOptions?: {
    integrationID: string;
    region: string;
    serviceInstanceID: string;
    clientVersion?: string;
    onLoad: (instance: any) => Promise<void>;
  };
}

7. Ajustar o arquivo tsconfig.json e inserir no campo compilerOptions: "typeRoots": ["./node_modules/@types", "./types"]

# Conexão com a API do Google

1. Criar e Coletar as credenciais:
https://console.cloud.google.com/apis/credentials?project=celestial-digit-420914

2. Salvar os dados em um script
Chave secreta do cliente = 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
ID = 803761310178-945f061pteqdk848pgh61r28g8ugbmgb.apps.googleusercontent.com

3. Criar EndPoint
http://localhost:3000/api/auth/callback/google

4. Criar um arquivo .env.local e deixar salvo as credenciais lá.
## DATABASE_URL=""
#Using Oracle
DATABASE_URL=""

#Providers
GOOGLE_CLIENT_ID=803761310178-945f061pteqdk848pgh61r28g8ugbmgb.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

5. Criar um componente dentro da pasta API > [...nextauth].ts 

5.1 Vai enderizar as informações do Login

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  // Adicione outras configurações conforme necessário
});

5.2 Instalações
npm install next-auth @types/next-auth google-auth-library


5.3 No componente de Login, colocar a rota para a página privada




## Criação da API em Node

npm install express

Rota:
meu-projeto/
├── node_modules/
├── public/
├── src/
├── server/
│   └── api.js
├── .gitignore
├── package-lock.json
└── package.json

Dentro do arquivo api.js

// api.js
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/mensagem', (req, res) => {
    res.json({ mensagem: 'Olá, mundo!' });
});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});

Para complementar:
npm install cors


## Processo de animação na página

Irei inserir ações da biblioteca Frame Motion

Site: https://www.framer.com/motion/introduction/

1. Instalação: npm install framer-motion

2. Importação em cada componente criado e que irei precisar para ter/criar uma animação:  import { motion } from "framer-motion"

## Login simplificado usando Google - Integração

1. npm install googleapis



