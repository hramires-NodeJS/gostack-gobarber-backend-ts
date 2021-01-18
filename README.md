gostack-gobarber-backend-ts

### Iniciar o projeto
```
yarn init -y
```

### Instalar Express
```
yarn add express
```

### Declaração de tipos para o express
```
yarn add @types/express -D
```

### Instalar typescript, com dependência de DEV
```
yarn add typescript -D
```

### Gerar o arquivo tsconfig.json (confguracoes do typescript)
```
yarn tsc --init
```

### Converter .ts para .js
```
yarn tsc
```

### Converter pra ts e faz o papel do Nodemon, com dependência de DEV
```
yarn add ts-node-dev -D
```

### Não verificar se os tipos estão batendo na conversão de .ts para .js ao startar, apenas usa a IDE (--transpile-only)
```
"dev:server": "ts-node-dev --transpile-only src/server.ts"
```

### Evita compilar códigos do node_modules (--ignore-watch node_modules)
```
"dev:server": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
```

### Habilitar Debug (--inspect)
```
"dev:server": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
```

### Padrões de Projeto com Eslint, Prettier e Editor Config
See [Reference](https://www.notion.so/ESLint-7e455a7ac78b424892329ee064feaf99).

### Instalar Identificador Único
```
yarn add uuidv4
```

### Instalar Manipulador de Datas
```
yarn add date-fns
```

### Services & SOLID
See [Reference](https://www.notion.so/Repository-service-e-patterns-82419cceb11c4c4fbbc055ade7fb1ac5).

### TypeORM
See [Reference](https://typeorm.io/).

### Baixar imagem PostgreSQL
```
docker run --name gostack-postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### Listar todos containers
```
docker ps -a
```

### Subir o container
```
docker start <id>
```

### Startar em DEV
```
yarn dev:server
```
