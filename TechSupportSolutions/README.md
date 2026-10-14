# TechSupport Solutions — CP5

Aplicação React + TypeScript para gerenciamento de chamados técnicos, com React Router DOM e Axios.

## Requisitos
- Node.js compatível com Vite 8
- npm

## Como executar

No terminal, entre na pasta `TechSupportSolutions` e instale as dependências:

```bash
npm install
```

Em um terminal, inicie a API local de exemplo:

```bash
npm run server
```

A API ficará disponível em `http://localhost:3000` e usará os dados de `db.json`.

Em outro terminal, inicie o React:

```bash
npm run dev
```

Abra o endereço mostrado pelo Vite. Para validar a compilação de produção, execute `npm run build`.

## API
A URL base padrão é `http://localhost:3000`. Para usar outra API compatível, crie um arquivo `.env` com:

```env
VITE_API_URL=https://sua-api.example.com
```

Endpoints esperados:
- `GET /tickets`
- `GET /tickets/:id`
- `POST /tickets`
- `PATCH /tickets/:id` (atualiza `status`)
- `DELETE /tickets/:id`

A aplicação apresenta estados de carregamento, mensagens de erro/sucesso, pesquisa por título e filtro por status. As categorias, prioridades e status estão tipados em `src/models/Ticket.ts`.
