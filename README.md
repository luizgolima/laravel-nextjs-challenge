# Task Manager

O Task Manager é uma aplicação web que oferece um controle de tarefas (todo list) personalizado para cada usuário. A estrutura do projeto consiste em um mono repositório com duas partes: o frontend, desenvolvido com Next.js, e o backend, desenvolvido com Laravel. O banco de dados MySQL é utilizado para armazenar as tarefas.

## Visão geral do projeto

O Task Manager é uma aplicação web que permite aos usuários criar uma conta para terem um ambiente único e personalizado para gerenciar suas tarefas. Com ele, é possível criar, atualizar, editar e excluir cada tarefa de forma intuitiva.

## Tecnologias utilizadas

- Next.js
- Laravel
- MySQL
- Docker
- Docker Compose

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- Node.js
- PHP
- Docker
- Docker Compose

## Configuração

O projeto é composto por três serviços no arquivo docker-compose.yml:

- `frontend`: contém o código do cliente desenvolvido com Next.js, executado na porta 3000.
- `backend`: contém o código do servidor desenvolvido com Laravel, executado na porta 8000.
- `database`: contém o banco de dados MySQL, executado na porta 3306.

Certifique-se de que as portas 3000, 8000 e 3306 estejam disponíveis em sua máquina local antes de executar o aplicativo.

## Arquivos .env

No `backend`, será necessário criar um arquivo `.env` para garantir a conexão com o banco de dados MySQL.

```bash
DB_CONNECTION=mysql
DB_HOST=database
DB_PORT=3306
DB_DATABASE=database
DB_USERNAME=admin
DB_PASSWORD=root
```
Já no `frontend`, será necessário criar um arquivo `.env.local` contendo as seguintes informações:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Certifique-se de configurar corretamente as variáveis de ambiente. No backend, as configurações são necessárias para estabelecer a conexão com o MySQL, enquanto no frontend, elas garantem a conexão com o backend.


## Instalação

1. Clone o repositório do projeto:

```bash
git clone https://github.com/luizgolima/task-manager.git
```

2. Navegue até o diretório clonado:

```bash
cd task-manager
```

3. Execute o comando o seguinte comando para construir e iniciar os contêineres Docker definidos no arquivo `docker-compose.yml`.

```bash
docker-compose up -d
```

4. Aguarde até que os contêineres sejam criados e os serviços estejam em execução. Observação: O Docker irá criar os contêineres, instalar as dependências e executar automaticamente as migrações no banco de dados.

5. Após a criação dos contêineres, o frontend será exposto na porta `http://localhost:3000` e o backend na `http://localhost:8000`.

## Uso

1. Após iniciar os contêineres, abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

2. Na parte superior, no cabeçalho, haverá a opção de criar uma conta e fazer login.

3. Após criar uma conta, faça login com suas credenciais.

4. Você será direcionado(a) para a página de gerenciamento de tarefas personalizada.

5. Na página de gerenciamento de tarefas, você pode realizar as seguintes operações:

   - Criar uma nova tarefa: clique no botão "Nova Tarefa" e preencha as informações necessárias.
   - Atualizar uma tarefa existente: selecione a tarefa desejada e faça as alterações necessárias.
   - Marcar uma tarefa como concluída: clique na opção de conclusão ao lado da tarefa correspondente.
   - Excluir uma tarefa: clique no botão de exclusão ao lado da tarefa correspondente.

6. Todas as alterações nas tarefas são sincronizadas com o banco de dados MySQL.

