# Forma3D — e-commerce de impressão 3D

Estrutura inicial de uma loja online em português para produtos, peças sob medida e serviços de impressão 3D. A interface usa React, TypeScript e Vite; o catálogo atual é demonstrativo e está preparado para ser substituído por dados reais.

## Executar localmente

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```text
src/
├── data/
│   └── products.ts     # catálogo de exemplo
├── App.tsx             # páginas e componentes iniciais da loja
├── main.tsx            # ponto de entrada React
└── styles.css          # estilos responsivos
index.html
package.json
 tsconfig.json
 vite.config.ts
```

## Próximos passos sugeridos

- Integrar catálogo, estoque, pedidos e painel administrativo a uma API.
- Implementar carrinho persistente, checkout e meios de pagamento.
- Adicionar fluxo de orçamento para arquivos 3D (STL/OBJ), materiais e acabamento.
- Configurar imagens finais, domínio, políticas de entrega e privacidade.

Os produtos, preços, e-mail e imagens são conteúdo ilustrativo. Atualize-os antes de publicar a loja.
