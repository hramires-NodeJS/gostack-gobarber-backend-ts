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

### Startar em DEV
```
yarn dev:server
```
